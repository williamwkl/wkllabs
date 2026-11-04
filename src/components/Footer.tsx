import Link from "next/link"
import BrandMark from "./BrandMark"

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
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-10 font-mono text-[13px] text-subtle sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:py-9">
        <div className="order-1 lg:order-none">
          <div className="mb-4 flex items-center gap-2.5 text-foreground lg:hidden">
            <BrandMark className="h-5 w-auto" />
            <span className="font-sans text-[15px] font-semibold tracking-tight">WKL Labs</span>
          </div>
          <div className="hidden lg:block">© {year} WKL Labs LLC</div>
          <address className="not-italic leading-relaxed lg:mt-1">
            58 West Portal Ave #556,
            <br className="lg:hidden" /> San Francisco, CA 94127
          </address>
          <div className="mt-4 lg:hidden">© {year} WKL Labs LLC</div>
        </div>
        <nav
          aria-label="Footer"
          className="order-2 grid grid-cols-2 gap-x-6 border-t border-border pt-4 sm:grid-cols-3 lg:order-none lg:flex lg:items-center lg:gap-x-5 lg:border-0 lg:pt-0"
        >
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
