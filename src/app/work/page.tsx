import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import { clientStudies, productStudies, samples, type CaseStudy } from "@/lib/samples"

const title = "Work: apps, websites, automation & dashboards | WKL Labs"
const description =
  "See what WKL Labs has built: Nabbee, Spell Collector, and automation and reporting projects for real clients."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, url: "https://wkllabs.com/work", type: "website" },
}

const labelClass = "mb-1.5 font-mono text-xs tracking-[0.1em] text-subtle uppercase"

function Study({ study }: { study: CaseStudy }) {
  return (
    <FadeIn>
      <article id={study.id} className="scroll-mt-20 rounded-xl border border-border bg-card p-5 sm:p-7">
        <div className={`mb-2 ${labelClass}`}>{study.kicker}</div>
        <h3 className="text-2xl font-semibold tracking-tight">{study.title}</h3>
        {study.image && (
          <figure className="mt-5">
            <div className="overflow-hidden rounded-lg border border-border">
              <Image
                src={study.image.src}
                alt={study.image.alt}
                width={study.image.width}
                height={study.image.height}
                sizes="(min-width: 896px) 790px, calc(100vw - 82px)"
                className="h-auto w-full"
              />
            </div>
            {study.image.note && <figcaption className="mt-2 text-xs text-subtle">{study.image.note}</figcaption>}
          </figure>
        )}
        <dl className="mt-6 grid gap-6 sm:grid-cols-3">
          <div>
            <dt className={labelClass}>Problem</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">{study.problem}</dd>
          </div>
          <div>
            <dt className={labelClass}>What we built</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">{study.built}</dd>
          </div>
          <div>
            <dt className={labelClass}>Result</dt>
            <dd className="text-sm leading-relaxed text-foreground">{study.result}</dd>
          </div>
        </dl>
        {study.href && (
          <a
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors hover:border-ring"
          >
            {study.hrefLabel} <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
          </a>
        )}
      </article>
    </FadeIn>
  )
}

export default function WorkPage() {
  const dashboardSamples = samples.filter((s) => s.id !== "property-dashboard")

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <FadeIn immediate>
            <span className="mb-6 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Work
            </span>
          </FadeIn>
          <FadeIn immediate delay={100}>
            <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
              Real software, built and running.
            </h1>
          </FadeIn>
          <FadeIn immediate delay={200}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Products we run ourselves, and projects we&apos;ve delivered for clients.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Products we built and run</h2>
        <div className="flex flex-col gap-5">
          {productStudies.map((study) => (
            <Study key={study.id} study={study} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 pb-16 sm:px-8">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Client projects</h2>
        <div className="flex flex-col gap-5">
          {clientStudies.map((study) => (
            <Study key={study.id} study={study} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-[#0f0f12]">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sample dashboards</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Examples we made to show what&apos;s possible. All figures are demonstration data.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {dashboardSamples.map((s) => (
              <FadeIn key={s.id}>
                <article id={s.id} className="scroll-mt-20 overflow-hidden rounded-xl border border-border bg-card">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={1220}
                    height={1180}
                    sizes="(min-width: 640px) 400px, calc(100vw - 42px)"
                    className="h-auto w-full border-b border-border"
                  />
                  <div className="p-5">
                    <div className={labelClass}>Sample · {s.kicker}</div>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.built}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-20 text-center sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Want something like this?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Tell us what you want to build or fix. We&apos;ll reply with a clear plan.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
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
      </section>

      <Footer />
    </main>
  )
}
