"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Above-the-fold content: animate with CSS so it never waits on hydration. */
  immediate?: boolean
}

export default function FadeIn({ children, className, delay = 0, immediate = false }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Content renders visible and is only hidden once the client can reveal it again,
  // so a failed script or a browser without IntersectionObserver never leaves it blank.
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || immediate || typeof IntersectionObserver === "undefined") return
    // Already on screen (or about to be): leave it as is rather than flashing it out and back in.
    if (el.getBoundingClientRect().top < window.innerHeight * 1.15) return
    setHidden(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false)
          observer.disconnect()
        }
      },
      // Start just before the element scrolls into view so fast scrolling never shows blank space.
      { rootMargin: "0px 0px 15% 0px", threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  if (immediate) {
    return (
      <div
        className={cn(
          "animate-in fade-in slide-in-from-bottom-3 fill-mode-backwards duration-[400ms] ease-out motion-reduce:animate-none",
          className
        )}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn("fade-reveal transition-[opacity,transform] duration-[400ms] ease-out", className)}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(12px)" : "translateY(0)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
