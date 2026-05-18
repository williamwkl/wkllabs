"use client"

import { Mail } from "lucide-react"
import { useState } from "react"

export default function FloatingEmailButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="mailto:hello@wkllabs.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-white text-neutral-900 rounded-full shadow-lg shadow-black/40 hover:bg-neutral-100 transition-all duration-200 px-4 py-3"
      aria-label="Email us"
    >
      <Mail className="h-4 w-4 shrink-0" />
      <span
        className={`text-sm font-medium overflow-hidden transition-all duration-200 whitespace-nowrap ${
          hovered ? "max-w-[120px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        hello@wkllabs.com
      </span>
    </a>
  )
}
