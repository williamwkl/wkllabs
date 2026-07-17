export default function StudioNote() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
      <h3 className="mb-4 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
        The studio
      </h3>
      <p className="max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
        WKL Labs is run by William Lim, a builder splitting time between
        Chicago and Manila. Every product here is designed, coded, and
        supported by the person whose name is on the company.
      </p>
      <a
        href="mailto:hello@wkllabs.com"
        className="mt-6 inline-block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        hello@wkllabs.com ↗
      </a>
    </section>
  )
}
