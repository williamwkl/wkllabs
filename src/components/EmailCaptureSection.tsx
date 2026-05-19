"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import FadeIn from "./FadeIn"

export default function EmailCaptureSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || "Something went wrong")

      setStatus("success")
      setEmail("")
    } catch (err: unknown) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Stay in the loop
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get early access
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Be the first to know when new products launch and get exclusive early access to everything WKL Labs builds.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          {status === "success" ? (
            <div className="mt-8 flex items-center justify-center gap-3 text-emerald-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">You're on the list! We'll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-200 transition-colors disabled:opacity-60 shrink-0"
              >
                {status === "loading" ? "Joining..." : (
                  <>
                    Join waitlist
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
          )}

          <p className="mt-4 text-xs text-slate-600">No spam. Unsubscribe anytime.</p>
        </FadeIn>
      </div>
    </section>
  )
}
