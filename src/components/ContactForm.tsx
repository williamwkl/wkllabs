"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Script from "next/script"

const projectTypes = ["Application", "Website", "Automation", "Reporting dashboard", "Other"]

const fieldClass =
  "w-full rounded-lg border border-border-strong bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-subtle focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"

interface Turnstile {
  render: (element: HTMLElement, options: { sitekey: string; theme: string }) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: Turnstile
  }
}

export default function ContactForm({ email, turnstileSiteKey }: { email: string; turnstileSiteKey?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")
  const [turnstileReady, setTurnstileReady] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | undefined>(undefined)

  useEffect(() => {
    if (!turnstileSiteKey || !widgetRef.current || !window.turnstile) return
    const turnstile = window.turnstile
    const id = turnstile.render(widgetRef.current, { sitekey: turnstileSiteKey, theme: "dark" })
    widgetId.current = id
    return () => {
      turnstile.remove(id)
      widgetId.current = undefined
    }
  }, [turnstileSiteKey, turnstileReady])

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError("")
    const form = e.currentTarget
    let res: Response
    try {
      res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
    } catch {
      // The message may have arrived even though the reply was lost, so avoid inviting a duplicate.
      setStatus("error")
      setError("We could not confirm your message was sent. Please email us directly.")
      return
    }
    try {
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(typeof data.error === "string" ? data.error : "")
      form.reset()
      setStatus("sent")
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error && err.message ? err.message : "Your message could not be sent.")
      // Each verification token works once, so get a fresh one for the next attempt.
      if (widgetId.current) window.turnstile?.reset(widgetId.current)
    }
  }

  if (status === "sent") {
    return (
      <p role="status" className="rounded-lg border border-border-strong bg-card p-5">
        Thank you. Your message has been sent, and we will reply by email.
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required maxLength={120} autoComplete="name" className={`mt-1.5 ${fieldClass}`} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required maxLength={254} autoComplete="email" className={`mt-1.5 ${fieldClass}`} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Project type
        <select name="projectType" required defaultValue="" className={`mt-1.5 ${fieldClass}`}>
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-medium">
        How can we help?
        <textarea name="message" required maxLength={5000} rows={6} className={`mt-1.5 ${fieldClass}`} />
      </label>
      {turnstileSiteKey && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            onReady={() => setTurnstileReady(true)}
          />
          <div ref={widgetRef} className="min-h-[65px]" />
        </>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-accent-nabbee">
          {error} You can also email {email}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  )
}
