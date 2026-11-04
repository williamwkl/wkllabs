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
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-9 font-mono text-[13px] text-subtle sm:px-8">
        <div>
          <div>© {year} WKL Labs LLC</div>
          <address className="mt-1 not-italic">58 West Portal Ave #556, San Francisco, CA 94127</address>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
