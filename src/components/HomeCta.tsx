import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomeCta() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Have something in mind?</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
        Tell us what you want to build or fix. We&apos;ll reply with a clear plan.
      </p>
      <Link
        href="/contact"
        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
