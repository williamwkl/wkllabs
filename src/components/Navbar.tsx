import Link from "next/link"
import BrandMark from "./BrandMark"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <BrandMark className="h-5 w-auto" />
          <span className="text-[15px] font-semibold tracking-tight">WKL Labs</span>
        </Link>

        <nav className="flex items-center gap-5 font-mono text-[13px] text-muted-foreground">
          <Link href="/services" className="transition-colors hover:text-foreground">
            services
          </Link>
          <Link href="/work" className="transition-colors hover:text-foreground">
            work
          </Link>
          <Link href="/#products" className="hidden transition-colors hover:text-foreground sm:block">
            products
          </Link>
          <a
            href="mailto:hello@wkllabs.com"
            className="transition-colors hover:text-foreground"
          >
            contact
          </a>
        </nav>
      </div>
    </header>
  )
}
