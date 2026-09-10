import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import { samples } from "@/lib/samples"

const title = "Work — Sample dashboards | WKL Labs"
const description =
  "Sample automated reporting dashboards built by WKL Labs — property performance, sales KPIs and marketing analytics, rebuilt on demonstration data so you can see the quality before you commit."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, url: "https://wkllabs.com/work", type: "website" },
}

export default function WorkPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* HERO */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <span className="mb-6 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Work · Sample dashboards
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              See the quality before you commit.
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Built for real engagements and rebuilt here on demonstration data. Every figure
              shown is illustrative — the point is the layout, the clarity, and the fact that
              each one refreshes itself.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SAMPLES */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {samples.map((s) => (
            <FadeIn key={s.id}>
              <article
                id={s.id}
                className="scroll-mt-20 border-b border-border py-14"
              >
                <div className="mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
                  {s.index} / {s.kicker}
                </div>
                <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={1220}
                    height={1180}
                    className="h-auto w-full"
                  />
                </div>

                <dl className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <dt className="mb-1.5 font-mono text-xs tracking-[0.1em] text-subtle uppercase">Problem</dt>
                    <dd className="text-sm text-muted-foreground">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="mb-1.5 font-mono text-xs tracking-[0.1em] text-subtle uppercase">What we built</dt>
                    <dd className="text-sm text-muted-foreground">{s.built}</dd>
                  </div>
                  <div>
                    <dt className="mb-1.5 font-mono text-xs tracking-[0.1em] text-subtle uppercase">Result</dt>
                    <dd className="text-sm text-foreground">{s.result}</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  {s.demoHref ? (
                    <a
                      href={s.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors hover:border-ring"
                    >
                      Open the live sample <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 font-mono text-xs text-subtle">
                      Live view-only demo coming soon
                    </span>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-5 py-20 sm:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Want one built on your numbers?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Tell us the sources and the numbers that matter. The same builds work for
              property, sales, marketing, finance and operations reporting.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                See services &amp; pricing <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="mailto:hello@wkllabs.com?subject=Project%20enquiry"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 font-mono text-sm transition-colors hover:border-ring"
              >
                Email hello@wkllabs.com
              </a>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  )
}
