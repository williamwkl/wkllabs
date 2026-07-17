export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 5l4 14 5-10 5 10 4-14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-mono text-sm tracking-wide">
            wkl<span className="text-subtle">·</span>labs
          </span>
        </a>

        <nav className="flex items-center gap-5 font-mono text-[13px] text-muted-foreground">
          <a href="#products" className="transition-colors hover:text-foreground">
            products
          </a>
          <a href="#about" className="hidden transition-colors hover:text-foreground sm:block">
            about
          </a>
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
