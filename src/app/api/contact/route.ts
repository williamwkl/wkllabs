import { NextResponse } from "next/server"

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PROJECT_TYPES = ["Application", "Website", "Automation", "Reporting dashboard", "Other"]
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5
const attempts = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  attempts.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !from) {
    return NextResponse.json({ error: "The contact form is unavailable." }, { status: 503 })
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  // Bots fill the hidden field; report success so they do not retry.
  if (body.website) return NextResponse.json({ success: true })

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""
  const projectType = typeof body.projectType === "string" ? body.projectType : ""
  if (!PROJECT_TYPES.includes(projectType) || !name || name.length > 120 || !EMAIL.test(email) || email.length > 254 || !message || message.length > 5000) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: process.env.CONTACT_TO_EMAIL ?? "hello@wkllabs.com",
      reply_to: email,
      subject: `New ${projectType} enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
    }),
  })

  if (!res.ok) {
    console.error("Contact email failed", res.status)
    return NextResponse.json({ error: "Your message could not be sent." }, { status: 502 })
  }
  return NextResponse.json({ success: true })
}
