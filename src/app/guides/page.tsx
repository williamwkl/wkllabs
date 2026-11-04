import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import { guides } from "@/lib/guides"

const title = "Guides — Plain-English data & automation | WKL Labs"
const description =
  "Plain-English guides on automating everyday spreadsheet work and reporting — written for owners and managers, not developers."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides" },
  openGraph: { title, description, url: "https://wkllabs.com/guides", type: "website" },
}

export default function GuidesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <FadeIn immediate>
            <span className="mb-6 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Guides
            </span>
          </FadeIn>
          <FadeIn immediate delay={100}>
            <h1 className="max-w-2xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Plain-English guides to the busywork worth automating.
            </h1>
          </FadeIn>
          <FadeIn immediate delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Written for owners and managers, not developers. No jargon — just what a thing is,
              what it does for your business, and whether you need anything to use it.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="flex flex-col">
            {guides.map((g) => (
              <FadeIn key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="group grid items-center gap-4 border-b border-border py-8 transition-colors sm:grid-cols-[1fr_auto]"
                >
                  <div>
                    <div className="mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
                      {g.kicker} · {g.readMinutes} min read
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
                      {g.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-muted-foreground">{g.dek}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 self-start whitespace-nowrap rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors group-hover:border-ring sm:self-center">
                    Read <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <p className="py-10 font-mono text-xs text-subtle">More guides on the way.</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
