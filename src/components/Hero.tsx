import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "./FadeIn"

export default function Hero() {
  return (
    <section className="px-5 py-24 text-center sm:px-8 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn immediate>
          <span className="mb-7 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            Independent software studio
          </span>
        </FadeIn>

        <FadeIn immediate delay={100}>
          <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            We build small, serious software.
          </h1>
        </FadeIn>

        <FadeIn immediate delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            We build apps, websites, automations, and reporting dashboards, and we
            run our own products too.
          </p>
        </FadeIn>

        <FadeIn immediate delay={300}>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border-strong px-5 py-3 font-mono text-sm transition-colors hover:border-ring"
            >
              See services
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
