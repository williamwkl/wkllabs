import Link from "next/link"

export default function StudioNote() {
  return (
    <section className="border-y border-border bg-[#0f0f12]">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="mb-4 font-mono text-xs tracking-[0.1em] text-subtle uppercase">The studio</h2>
        <p className="max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
          WKL Labs is led by William Lim. Clients work directly with the person
          responsible for the design, development, and support of their project.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-flex min-h-11 items-center font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          About the studio
        </Link>
      </div>
    </section>
  )
}
