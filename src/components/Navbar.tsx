"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import BrandMark from "./BrandMark"

const linkClass = "inline-flex min-h-11 items-center transition-colors hover:text-foreground"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="WKL Labs home" className="flex min-h-11 items-center gap-2.5">
          <BrandMark className="h-5 w-auto" />
          <span className="text-[15px] font-semibold tracking-tight">WKL Labs</span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-4 font-mono text-[13px] text-muted-foreground sm:gap-5">
          {pathname !== "/" && (
            <Link href="/" className={`hidden sm:inline-flex ${linkClass.replace("inline-flex ", "")}`}>
              home
            </Link>
          )}
          <Link href="/services" className={linkClass}>
            services
          </Link>
          <Link href="/about" className={linkClass}>
            about
          </Link>
          <Link href="/contact" className={linkClass}>
            contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
