export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-auto">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-9 font-mono text-[13px] text-subtle sm:px-8">
        <span>© {year} WKL Labs LLC · Wyoming, USA</span>
        <a
          href="mailto:hello@wkllabs.com"
          className="transition-colors hover:text-foreground"
        >
          hello@wkllabs.com
        </a>
      </div>
    </footer>
  )
}
