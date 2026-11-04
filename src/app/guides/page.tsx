import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import { guides } from "@/lib/guides"

const title = "Guides: software, websites, and automation | WKL Labs"
const description =
  "Practical guides to applications, websites, automation, and reporting, written for business owners and managers."

export const metadata: Metadata = pageMetadata({ title, description, path: "/guides" })

const planningSlugs = ["apps", "websites"]
const groups = [
  { title: "Planning software and websites", items: guides.filter((g) => planningSlugs.includes(g.relatedServiceSlug)) },
  { title: "Automation and reporting", items: guides.filter((g) => !planningSlugs.includes(g.relatedServiceSlug)) },
]

export default function GuidesPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <FadeIn immediate>
            <span className="mb-6 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Guides
            </span>
          </FadeIn>
          <h1 className="max-w-2xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            Practical guides to software and automation.
          </h1>
          <FadeIn immediate delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Written for owners and managers, these guides explain what each solution is,
              how it helps your business, and what is required to use it.
            </p>
          </FadeIn>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="border-t border-border">
          <div className="mx-auto max-w-4xl px-5 pt-12 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">{group.title}</h2>
            <div className="mt-2 flex flex-col">
              {group.items.map((g) => (
                <FadeIn key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="group grid items-center gap-4 border-b border-border py-8 last:border-0 sm:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <div className="mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
                        {g.kicker} · {g.readMinutes} min read
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">{g.title}</h3>
                      <p className="mt-2 max-w-2xl text-muted-foreground">{g.dek}</p>
                    </div>
                    <span className="inline-flex min-h-11 items-center gap-1.5 self-start whitespace-nowrap rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors group-hover:border-ring sm:self-center">
                      Read <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-4xl border-t border-border px-5 py-20 text-center sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Need help with a project?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Share what you need to build or improve, and we will respond with a recommended plan.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
