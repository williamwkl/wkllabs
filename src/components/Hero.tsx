import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FadeIn from "./FadeIn"

export default function Hero() {
  return (
    <section className="px-5 pt-20 pb-16 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1.35fr_1fr] md:gap-10">
        <div className="text-center md:text-left">
          <FadeIn immediate>
            <span className="mb-7 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
              Independent software studio
            </span>
          </FadeIn>

          <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            Custom software for growing businesses.
          </h1>

          <FadeIn immediate delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground md:mx-0">
              WKL Labs designs and builds applications, websites, automation, and
              reporting dashboards, and operates its own software products.
            </p>
          </FadeIn>

          <FadeIn immediate delay={250}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start a project{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border-strong px-5 py-3 font-mono text-sm transition-colors hover:border-ring"
              >
                View services
              </Link>
            </div>
          </FadeIn>

          <FadeIn immediate delay={350}>
            <p className="mt-6 text-sm text-subtle">
              Our booking platform, Nabbee, is live on the App Store and Google Play.{" "}
              <Link
                href="/case-studies/nabbee"
                className="rounded text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                Read the case study
              </Link>
            </p>
          </FadeIn>
        </div>

        <FadeIn immediate delay={300} className="flex justify-center md:justify-end">
          <div className="animate-float relative w-[210px] sm:w-[250px]">
            <div
              aria-hidden="true"
              className="absolute -inset-10 -z-10 rounded-full bg-accent-nabbee/15 blur-3xl"
            />
            <div className="overflow-hidden rounded-[2.4rem] border border-border-strong bg-card p-1.5 shadow-2xl shadow-black/60">
              <Image
                src="/products/nabbee-phone.webp"
                alt="Nabbee owner app showing today's bookings, revenue, pending payments, and the next appointment for a demo salon"
                width={600}
                height={1301}
                sizes="250px"
                priority
                className="h-auto w-full rounded-[2rem]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
