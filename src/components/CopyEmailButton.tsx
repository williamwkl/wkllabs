"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export default function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle")

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus("copied")
    } catch {
      setStatus("failed")
    }
    setTimeout(() => setStatus("idle"), 2500)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
    >
      {status === "copied" ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span aria-live="polite">
        {status === "copied" ? "Copied" : status === "failed" ? "Select the address" : "Copy"}
      </span>
    </button>
  )
}
