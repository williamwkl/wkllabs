import Link from "next/link"

const links = [
  { href: "/services", label: "services" },
  { href: "/about", label: "about" },
  { href: "/guides", label: "guides" },
  { href: "/contact", label: "contact" },
  { href: "/privacy", label: "privacy" },
  { href: "/terms", label: "terms" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-5 py-6 font-mono text-[13px] text-subtle sm:px-8 lg:flex-row-reverse lg:items-center lg:justify-between lg:py-8">
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 lg:justify-end">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-xs leading-relaxed lg:text-left">
          <div>© {year} WKL Labs LLC</div>
          <address className="not-italic">58 West Portal Ave #556, <span className="inline-block">San Francisco, CA 94127</span></address>
        </div>
      </div>
    </footer>
  )
}
