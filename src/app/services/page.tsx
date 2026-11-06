import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import ReviewCard from "@/components/ReviewCard"
import { reviews, services, upworkProfileUrl } from "@/lib/services"
import StoreBadges from "@/components/StoreBadges"
import { guideForService } from "@/lib/guides"

const title = "Services: apps, websites, automation & dashboards | WKL Labs"
const description =
  "WKL Labs builds web and mobile apps, websites, Google Apps Script automation, and reporting dashboards for businesses."

export const metadata: Metadata = pageMetadata({ title, description, path: "/services" })

const process = [
  { h: "Discovery", p: "We review your goals, current process, and requirements.", outcome: "Defined objectives" },
  { h: "Planning", p: "We confirm the scope and timeline before work begins.", outcome: "Written project plan" },
  { h: "Development", p: "You review working progress and provide feedback throughout.", outcome: "Regular updates" },
  { h: "Launch", p: "We test the final solution, hand it over, and support your team.", outcome: "Documented handover" },
]

const faqs = [
  { q: "What types of projects do you take on?", a: "We build web and mobile applications, websites and online platforms, Google Apps Script automation, and Google Sheets and Excel reporting dashboards." },
  { q: "How much does a project cost?", a: "Pricing depends on scope. We confirm the scope and provide a quote before work begins." },
  { q: "Where do automation and dashboard projects run?", a: "They run in your own Google or Microsoft account, so your data and the finished work stay with you." },
  { q: "How do we get started?", a: "Send us your goals through the contact page. We reply within one business day and then discuss your requirements." },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    ...services.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.summary,
      url: `https://wkllabs.com/services#${s.slug}`,
      provider: { "@type": "Organization", name: "WKL Labs", url: "https://wkllabs.com" },
    })),
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

const primaryCta =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"

export default function ServicesPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <FadeIn immediate>
            <span className="mb-6 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Services
            </span>
          </FadeIn>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Software built around how your business operates.
          </h1>
          <FadeIn immediate delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Applications, websites, automation, and reporting dashboards from one accountable studio.
            </p>
          </FadeIn>
          <FadeIn immediate delay={300}>
            <nav aria-label="Services" className="mt-8 flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-lg border border-border-strong px-4 py-2 font-mono text-[13px] transition-colors hover:border-ring"
                >
                  {s.name}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {services.map((s) => (
            <FadeIn key={s.slug}>
              <article
                id={s.slug}
                className="grid scroll-mt-20 gap-8 border-b border-border py-14 md:grid-cols-2 md:gap-12"
              >
                <div className="flex flex-col items-start">
                  <div className="mb-3 font-mono text-xs tracking-[0.1em] text-subtle uppercase">{s.index}</div>
                  <h2 className="text-[1.7rem] font-semibold leading-tight tracking-tight">{s.name}</h2>
                  <p className="mt-3 text-lg text-muted-foreground">{s.summary}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-muted-foreground" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  {guideForService(s.slug) && (
                    <Link
                      href={`/guides/${guideForService(s.slug)?.slug}`}
                      className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Read the guide <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  )}
                  <Link href="/contact" className={`mt-4 ${primaryCta}`}>
                    Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="self-start overflow-hidden rounded-xl border border-border bg-card">
                  {s.proof.image && (
                    <Image
                      src={s.proof.image.src}
                      alt={s.proof.image.alt}
                      width={s.proof.image.width}
                      height={s.proof.image.height}
                      sizes="(min-width: 768px) 410px, calc(100vw - 42px)"
                      className="h-auto w-full border-b border-border"
                    />
                  )}
                  <div className="p-5">
                    <div className="mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">{s.proof.kicker}</div>
                    <h3 className="text-base font-semibold">{s.proof.title}</h3>
                    <dl className="mt-3 space-y-3 text-sm">
                      <div>
                        <dt className="font-medium">Problem</dt>
                        <dd className="mt-0.5 text-muted-foreground">{s.proof.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Result</dt>
                        <dd className="mt-0.5 text-muted-foreground">{s.proof.result}</dd>
                      </div>
                    </dl>
                    {s.proof.image?.note && <p className="mt-2 text-xs text-subtle">{s.proof.image.note}</p>}
                    {s.proof.href && (
                      <div className="mt-3 flex flex-wrap gap-x-6">
                        <a
                          href={s.proof.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-1.5 font-mono text-sm transition-colors hover:text-muted-foreground"
                        >
                          {s.proof.hrefLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                    <StoreBadges appStoreUrl={s.proof.appStoreHref} playStoreUrl={s.proof.playStoreHref} className="mt-3" />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">Client feedback</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.source} {...r} />
          ))}
        </div>
        <a
          href={upworkProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
        >
          5.0 from 3 client reviews on Upwork <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </section>

      <section className="border-y border-border bg-[#0f0f12]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How it works</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A clear process from initial enquiry to launch.
          </p>
          <ol className="mt-10 grid md:grid-cols-4 md:gap-6">
            {process.map((step, i) => (
              <li key={step.h} className="relative flex gap-5 pb-10 last:pb-0 md:block md:pb-0">
                {i < process.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-10 bottom-0 left-5 w-px bg-border-strong md:top-5 md:right-[-1.5rem] md:bottom-auto md:left-10 md:h-px md:w-auto"
                  />
                )}
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-border-strong bg-card font-mono text-sm">
                  {i + 1}
                </span>
                <div className="md:mt-5">
                  <h3 className="text-lg font-semibold">{step.h}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.p}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 flex-none text-muted-foreground" aria-hidden="true" />
                    {step.outcome}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 pt-16 sm:px-8">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Frequently asked questions</h2>
        <dl className="divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <div key={f.q} className="py-5">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Discuss your project</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Share what you need to build or improve, and we will respond with a recommended plan.
        </p>
        <Link href="/contact" className={`mt-7 ${primaryCta}`}>
          Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <p className="mt-5 text-sm text-muted-foreground">
          Still deciding?{" "}
          <Link href="/guides" className="underline underline-offset-2 hover:text-foreground">
            Read our guides
          </Link>
          .
        </p>
      </section>

      <Footer />
    </main>
  )
}
