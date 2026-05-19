"use client"

import { useState, useEffect } from "react"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  )
}
