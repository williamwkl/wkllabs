"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Platforms", href: "#platforms" },
  { label: "Changelog", href: "#changelog" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "#support" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["platforms", "changelog", "roadmap", "support"]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              WKL <span className="text-slate-500">Labs</span>
            </span>
          </a>

          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`hover:text-white transition-colors ${
                  link.href === `#${activeSection}` ? "text-white" : "text-slate-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="sm:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="sm:hidden pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
