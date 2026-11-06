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
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || immediate) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
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
      className={cn("transition-[opacity,transform] duration-[400ms] ease-out", className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
