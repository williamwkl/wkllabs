import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ArrowRight, Check } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import { services, retainer } from "@/lib/services"
import { sampleById } from "@/lib/samples"
import { guideForService } from "@/lib/guides"

const title = "Services — Automated reporting & spreadsheet automation | WKL Labs"
const description =
  "WKL Labs builds automated reporting dashboards, spreadsheet and workflow automation, and data cleaning for small businesses — a live workbook you own, fixed scope, fixed price."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "https://wkllabs.com/services", type: "website" },
}

function priceLabel(from: number | null) {
  return from ? `starting at $${from.toLocaleString()}` : "Custom"
}

const process = [
  { n: "1", h: "Discovery", p: "A short call to map your data sources, the numbers you track, and who reads the report." },
  { n: "2", h: "First draft", p: "We build on a copy of your data and share it for feedback, never touching your live files." },
  { n: "3", h: "Automate & test", p: "We wire up the scheduled refresh and check every automated value against the source." },
  { n: "4", h: "Handover", p: "You get the workbook, the documentation, and a walkthrough. It lives in your account." },
]

const faqs = [
  { q: "How long does a build take?", a: "A single dashboard build is usually ready for review within one to two weeks, depending on how many data sources are involved. Automations are often faster. We agree the timeline before starting." },
  { q: "Do I own the result?", a: "Yes. The dashboard and any scripts live in your own Google or Microsoft account. There is no subscription to us and no lock-in. The optional retainer is only for ongoing help if you want it." },
  { q: "What do you need from me?", a: "View access to your data sources and one sample export of each. We build on a copy, so your live files are never at risk during the work." },
  { q: "What if my data or its format changes?", a: "Builds parse by column name and handle changing row counts, so small changes rarely break anything. When a source changes shape, validation checks flag it, and the retainer covers keeping it current." },
]

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* HERO */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <FadeIn immediate>
            <span className="mb-6 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Services · Data &amp; automation
            </span>
          </FadeIn>
          <FadeIn immediate delay={100}>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              See the numbers that matter, without building the report by hand.
            </h1>
          </FadeIn>
          <FadeIn immediate delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              We turn your exports, spreadsheets and tools into one clean dashboard that
              updates on a schedule — delivered as a live Google Sheet or Excel workbook you
              own outright. Fixed scope, fixed price, no lock-in.
            </p>
          </FadeIn>
          <FadeIn immediate delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@wkllabs.com?subject=Project%20enquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Book a 20-minute call <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 font-mono text-sm transition-colors hover:border-ring"
              >
                See sample dashboards
              </Link>
            </div>
          </FadeIn>
          <FadeIn immediate delay={400}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[13px] text-muted-foreground">
              {["Currently engaged by a US multifamily operator", "You own the workbook, no lock-in", "Fixed scope, fixed price"].map((f) => (
                <li key={f} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-foreground" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      <section id="services" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {services.map((s) => {
            const sample = sampleById(s.sampleId)
            const guide = guideForService(s.slug)
            return (
              <FadeIn key={s.slug}>
                <article
                  id={s.slug}
                  className="grid scroll-mt-20 gap-10 border-b border-border py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-14"
                >
                  <div>
                    <div className="mb-3 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
                      {s.index} / {s.kicker}
                    </div>
                    <h2 className="text-[1.7rem] font-semibold tracking-tight">{s.name}</h2>
                    <p className="mt-3 text-lg text-foreground">{s.outcome}</p>

                    <h3 className="mt-8 mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
                      How it works
                    </h3>
                    {s.miniGuide.map((para, i) => (
                      <p key={i} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}

                    {guide && (
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        Read the full guide: {guide.title}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    )}

                    <ul className="mt-6 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-muted-foreground" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <div>
                        <div className="font-mono text-xs text-muted-foreground">{priceLabel(s.priceFrom)}</div>
                        <div className="mt-0.5 text-xs text-subtle">Deliverable: {s.deliverable}</div>
                      </div>
                      <a
                        href={`mailto:hello@wkllabs.com?subject=${encodeURIComponent(s.name)}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors hover:border-ring"
                      >
                        Get a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Sample */}
                  {sample && (
                    <Link
                      href={`/work#${sample.id}`}
                      className="group self-start overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-border-strong"
                    >
                      <Image
                        src={sample.image}
                        alt={sample.alt}
                        width={1220}
                        height={1180}
                        className="h-auto w-full border-b border-border"
                      />
                      <div className="flex items-center justify-between gap-3 p-4">
                        <div>
                          <div className="text-sm font-medium">{sample.title}</div>
                          <div className="mt-0.5 text-xs text-muted-foreground">Sample · demonstration data</div>
                        </div>
                        <span className="inline-flex items-center gap-1 whitespace-nowrap font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                          view <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  )}
                </article>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* RETAINER */}
      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
            <div className="mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">Ongoing</div>
            <h2 className="text-xl font-semibold tracking-tight">{retainer.name}</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{retainer.blurb}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{retainer.priceNote}</p>
          </div>
        </FadeIn>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-[#0f0f12]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="mb-2 text-2xl font-semibold tracking-tight">How it works</h2>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            A simple path from your current spreadsheets to a dashboard that runs on its own.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <FadeIn key={step.n}>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border font-mono text-sm text-foreground">
                    {step.n}
                  </div>
                  <h3 className="text-base font-semibold">{step.h}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.p}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">Questions, answered</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <FadeIn key={f.q}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-4xl px-5 pb-24 sm:px-8">
        <FadeIn>
          <div className="rounded-2xl border border-border bg-card p-10 text-center sm:p-14">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to stop building the report by hand?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Send a note describing your sources and the numbers you track. You&apos;ll get a
              clear scope and a fixed price before anything starts.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:hello@wkllabs.com?subject=Project%20enquiry"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Email hello@wkllabs.com <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 font-mono text-sm transition-colors hover:border-ring"
              >
                See the work
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  )
}
