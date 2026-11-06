
const EMAIL = /^[^\s@<>"(),;:]+@[^\s@<>"(),;:]+\.[^\s@<>"(),;:]+$/
const PROJECT_TYPES = ["Application", "Website", "Automation", "Reporting dashboard", "Other"]
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5
// Caps total sends however many addresses an attacker rotates through.
const MAX_TOTAL_PER_WINDOW = 30
const MAX_TRACKED = 1000
const attempts = new Map<string, number[]>()
let recentSends: number[] = []
const confirmations = new Map<string, number>()
const CONFIRMATION_TEXT = `Hello,

Thanks for contacting WKL Labs. We received your message and will reply within one business day.

If you have anything to add, just reply to this email.

Best regards,
WKL Labs`

// Maps keep insertion order, so dropping the first keys evicts the oldest entries.
function trim<V>(map: Map<string, V>, isExpired: (value: V) => boolean) {
  if (map.size <= MAX_TRACKED) return
  for (const [key, value] of map) if (isExpired(value)) map.delete(key)
  for (const key of map.keys()) {
    if (map.size <= MAX_TRACKED) break
    map.delete(key)
  }
}

function prune(now: number) {
  trim(attempts, (times) => times.every((t) => now - t >= WINDOW_MS))
  trim(confirmations, (time) => now - time >= WINDOW_MS)
}

export function resetContactLimitsForTests() {
  attempts.clear()
  confirmations.clear()
  recentSends = []
}

// Counted only for valid enquiries, so bot and malformed requests cannot use up the budget.
function claimSend() {
  const now = Date.now()
  recentSends = recentSends.filter((t) => now - t < WINDOW_MS)
  if (recentSends.length >= MAX_TOTAL_PER_WINDOW) return undefined
  recentSends.push(now)
  return now
}

function releaseSend(slot: number) {
  const index = recentSends.indexOf(slot)
  if (index !== -1) recentSends.splice(index, 1)
}

// Cloudflare sets CF-Connecting-IP itself; the first X-Forwarded-For entry is whatever the client sent.
function clientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for")?.split(",").map((part) => part.trim()).filter(Boolean)
  return req.headers.get("cf-connecting-ip")?.trim() || forwarded?.at(-1) || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  prune(now)
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  attempts.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

// One per address per window, so the form cannot be used to flood someone's inbox.
function claimConfirmation(email: string) {
  const key = email.toLowerCase()
  const now = Date.now()
  const last = confirmations.get(key)
  if (last !== undefined && now - last < WINDOW_MS) return false
  confirmations.set(key, now)
  return true
}

// Contains no form data, so it cannot carry an attacker's text to a third party.
async function sendConfirmation(apiKey: string, from: string, to: string, replyTo: string) {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      signal: AbortSignal.timeout(5000),
      body: JSON.stringify({
        from,
        to,
        reply_to: replyTo,
        subject: "We received your message",
        text: CONFIRMATION_TEXT,
        headers: { "Auto-Submitted": "auto-generated" },
      }),
    })
    if (!res.ok) {
      console.error("Contact confirmation failed", res.status)
      // Definitely not sent, so a later enquiry from this address can still be confirmed.
      if (res.status < 500) confirmations.delete(to.toLowerCase())
    }
  } catch (error) {
    console.error("Contact confirmation failed", error instanceof Error ? error.name : "unknown")
  }
}

const MAX_BODY_BYTES = 20_000

// Stops reading once the limit is passed, so oversized bodies are never fully buffered.
async function readBody(req: Request): Promise<string | undefined> {
  if (Number(req.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) return undefined
  if (!req.body) return ""
  const reader = req.body.getReader()
  const chunks: Uint8Array[] = []
  let size = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > MAX_BODY_BYTES) {
      await reader.cancel()
      return undefined
    }
    chunks.push(value)
  }
  return new TextDecoder().decode(Buffer.concat(chunks))
}

// Only enforced once both keys are set, so the form keeps working until the widget can render.
async function passesTurnstile(token: unknown, ip: string): Promise<boolean | "unavailable"> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret || !process.env.TURNSTILE_SITE_KEY) return true
  if (typeof token !== "string" || !token || token.length > 2048) return false
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      signal: AbortSignal.timeout(5000),
      body: new URLSearchParams({ secret, response: token, ...(ip !== "unknown" && { remoteip: ip }) }),
    })
    const result = (await res.json()) as { success?: boolean; "error-codes"?: string[] }
    if (result["error-codes"]?.includes("internal-error")) return "unavailable"
    return result.success === true
  } catch {
    return "unavailable"
  }
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    return Response.json({ error: "The contact form is unavailable." }, { status: 503 })
  }

  const ip = clientIp(req)
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 })
  }

  const raw = await readBody(req)
  if (raw === undefined) {
    return Response.json({ error: "Your message is too long." }, { status: 413 })
  }
  let body: Record<string, unknown>
  try {
    body = JSON.parse(raw)
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error("not an object")
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 })
  }

  // Bots fill the hidden field; report success so they do not retry.
  if (body.website) return Response.json({ success: true })

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""
  const projectType = typeof body.projectType === "string" ? body.projectType : ""
  if (!PROJECT_TYPES.includes(projectType) || !name || name.length > 120 || !EMAIL.test(email) || email.length > 254 || !message || message.length > 5000) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const human = await passesTurnstile(body["cf-turnstile-response"], ip)
  if (human === "unavailable") {
    return Response.json({ error: "We could not check your message right now. Please email us directly." }, { status: 503 })
  }
  if (!human) {
    return Response.json({ error: "Please complete the verification check and try again." }, { status: 400 })
  }

  const slot = claimSend()
  if (slot === undefined) {
    return Response.json({ error: "We are receiving a lot of messages. Please email us directly." }, { status: 429 })
  }

  const inbox = process.env.CONTACT_TO_EMAIL ?? "hello@wkllabs.com"
  let res: Response
  try {
    res = await fetch("https://api.resend.com/emails", {
      signal: AbortSignal.timeout(10000),
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: inbox,
        reply_to: email,
        subject: `New ${projectType} enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
        text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
      }),
    })
  } catch (error) {
    // A timeout may still have delivered, so ask the visitor to email rather than resubmit.
    console.error("Contact email failed", error instanceof Error ? error.name : "unknown")
    return Response.json({ error: "We could not confirm your message was sent. Please email us directly." }, { status: 502 })
  }
  if (!res.ok) {
    console.error("Contact email failed", res.status)
    // A 5xx may still have delivered, so keep the slot and avoid inviting a duplicate.
    if (res.status >= 500) {
      return Response.json({ error: "We could not confirm your message was sent. Please email us directly." }, { status: 502 })
    }
    releaseSend(slot)
    return Response.json({ error: "Your message could not be sent." }, { status: 502 })
  }

  // The enquiry has arrived, so a failed confirmation must not show the visitor an error.
  if (claimConfirmation(email)) await sendConfirmation(apiKey, from, email, inbox)
  return Response.json({ success: true })
}
