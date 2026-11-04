import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import type { Guide } from "@/lib/guides"
import { services } from "@/lib/services"
import { sampleById } from "@/lib/samples"

export default function GuideLayout({ guide }: { guide: Guide }) {
  const service = services.find((s) => s.slug === guide.relatedServiceSlug)
  const sample = guide.relatedSampleId ? sampleById(guide.relatedSampleId) : undefined

  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-border px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FadeIn immediate>
            <Link
              href="/guides"
              className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Guides
            </Link>
          </FadeIn>
          <h1 className="max-w-2xl text-balance text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
            {guide.title}
          </h1>
          <FadeIn immediate delay={200}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{guide.dek}</p>
          </FadeIn>
          <FadeIn immediate delay={300}>
            <p className="mt-5 font-mono text-xs tracking-[0.08em] text-subtle uppercase">
              {guide.kicker} · {guide.readMinutes} min read
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BODY */}
      <article className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8">
        {guide.body.map((section, i) => (
          <FadeIn key={i}>
            <div className={i > 0 ? "mt-14" : ""}>
              {section.type === "prose" && (
                <div>
                  {section.title && (
                    <h2 className="mb-4 text-xl font-semibold tracking-tight">{section.title}</h2>
                  )}
                  {section.paras.map((p, j) => (
                    <p key={j} className="mt-3 leading-relaxed text-muted-foreground first:mt-0">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {section.type === "keypoints" && (
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  {section.title && (
                    <h2 className="mb-4 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
                      {section.title}
                    </h2>
                  )}
                  <ul className="space-y-3">
                    {section.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-muted-foreground" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.type === "cards" && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                  {section.dek && <p className="mt-2 text-muted-foreground">{section.dek}</p>}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {section.items.map((c) => (
                      <div key={c.h} className="rounded-xl border border-border bg-card p-5">
                        <h3 className="text-base font-semibold">{c.h}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{c.p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "steps" && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                  {section.dek && <p className="mt-2 text-muted-foreground">{section.dek}</p>}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {section.items.map((s, k) => (
                      <div key={s.h} className="rounded-xl border border-border bg-card p-5">
                        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-border font-mono text-sm text-foreground">
                          {k + 1}
                        </div>
                        <h3 className="text-sm font-semibold">{s.h}</h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">{s.p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === "faq" && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
                  <div className="mt-6 space-y-3">
                    {section.items.map((f) => (
                      <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                        <h3 className="text-base font-semibold">{f.q}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </article>

      {/* CROSS-LINKS: related service + sample */}
      <section className="border-t border-border bg-[#0f0f12]">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <h2 className="mb-2 text-xl font-semibold tracking-tight">Prefer to have it built for you?</h2>
          <p className="mb-8 text-muted-foreground">
            This guide explains the fundamentals. When a solution must be reliable and
            run without constant attention, we can design and build it for you.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {service && (
              <Link
                href={`/services#${service.slug}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-border-strong"
              >
                <div>
                  <div className="mb-1 font-mono text-xs tracking-[0.1em] text-subtle uppercase">Service</div>
                  <div className="text-base font-semibold">{service.name}</div>
                </div>
                <ArrowRight className="h-4 w-4 flex-none text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true" />
              </Link>
            )}
            {sample && (
              <Link
                href="/services#automated-reporting-dashboards"
                className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-border-strong"
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
                    <div className="mb-1 font-mono text-xs tracking-[0.1em] text-subtle uppercase">Sample</div>
                    <div className="text-sm font-medium">{sample.title}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true" />
                </div>
              </Link>
            )}
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
