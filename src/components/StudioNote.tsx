import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function StudioNote() {
  return (
    <section className="border-y border-border bg-[#0f0f12]">
      <div className="mx-auto grid max-w-4xl gap-4 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[10rem_1fr] md:gap-8">
        <h2 className="font-mono text-xs tracking-[0.1em] text-subtle uppercase md:pt-2">The studio</h2>
        <div>
          <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
            WKL Labs was founded by William Lim, who leads each project. You work
            directly with the developer responsible for your project, from planning
            through launch and ongoing support.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About the studio <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
