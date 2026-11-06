
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

function prune(now: number) {
  if (attempts.size > MAX_TRACKED) {
    for (const [key, times] of attempts) if (times.every((t) => now - t >= WINDOW_MS)) attempts.delete(key)
  }
  if (confirmations.size > MAX_TRACKED) {
    for (const [key, time] of confirmations) if (now - time >= WINDOW_MS) confirmations.delete(key)
  }
}

// Counted only for valid enquiries, so bot and malformed requests cannot use up the budget.
function claimSend() {
  const now = Date.now()
  recentSends = recentSends.filter((t) => now - t < WINDOW_MS)
  if (recentSends.length >= MAX_TOTAL_PER_WINDOW) return false
  recentSends.push(now)
  return true
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
    if (!res.ok) console.error("Contact confirmation failed", res.status)
  } catch (error) {
    console.error("Contact confirmation failed", error instanceof Error ? error.name : "unknown")
  }
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    return Response.json({ error: "The contact form is unavailable." }, { status: 503 })
  }

  if (isRateLimited(clientIp(req))) {
    return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
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

  if (!claimSend()) {
    return Response.json({ error: "Too many messages. Please try again later." }, { status: 429 })
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
    return Response.json({ error: "Your message could not be sent." }, { status: 502 })
  }

  // The enquiry has arrived, so a failed confirmation must not show the visitor an error.
  if (claimConfirmation(email)) await sendConfirmation(apiKey, from, email, inbox)
  return Response.json({ success: true })
}
