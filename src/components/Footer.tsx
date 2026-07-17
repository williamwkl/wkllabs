export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-auto">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-9 font-mono text-[13px] text-subtle sm:px-8">
        <span>© {year} WKL Labs LLC · Wyoming, USA</span>
        <span className="flex flex-wrap items-center gap-5">
          <a href="/privacy" className="transition-colors hover:text-foreground">
            privacy
          </a>
          <a href="/terms" className="transition-colors hover:text-foreground">
            terms
          </a>
          <a
            href="mailto:hello@wkllabs.com"
            className="transition-colors hover:text-foreground"
          >
            hello@wkllabs.com
          </a>
        </span>
      </div>
    </footer>
  )
}
