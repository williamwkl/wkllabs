import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { pageMetadata } from "@/lib/metadata"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FadeIn from "@/components/FadeIn"
import StoreBadges from "@/components/StoreBadges"
import { nabbeeApp } from "@/lib/apps"

export const metadata: Metadata = pageMetadata({
  title: "Nabbee case study: booking and deposits for service businesses | WKL Labs",
  description:
    "How WKL Labs researched, designed, and built Nabbee, a booking platform with deposits, a web dashboard, and iOS and Android apps for service businesses in the US and the Philippines.",
  path: "/case-studies/nabbee",
  type: "article",
})

const facts = [
  { label: "Role", value: "Research, design, build, launch, and ongoing operation" },
  { label: "Platforms", value: "Web, iOS, and Android" },
  { label: "Markets", value: "United States and the Philippines" },
  { label: "Stack", value: "Next.js, React Native (Expo), PostgreSQL, Stripe" },
]

const sources = [
  {
    id: 1,
    label: "Elevate Web Design, audit of 4,407 small business websites (February 2026)",
    href: "https://elevatewebdesign.ca/blog/small-business-online-booking-statistics",
  },
  {
    id: 2,
    label: "Robotham et al., \"Using digital notifications to improve attendance in clinic\", BMJ Open (2016)",
    href: "https://pubmed.ncbi.nlm.nih.gov/27798006/",
  },
  {
    id: 3,
    label: "Gurol-Urganci et al., \"Mobile phone messaging reminders for attendance at healthcare appointments\", Cochrane Review (2013)",
    href: "https://www.cochrane.org/CD007458",
  },
  {
    id: 4,
    label: "Bangko Sentral ng Pilipinas, 2024 Status of Digital Payments report, as reported by SunStar (July 2025)",
    href: "https://www.sunstar.com.ph/cebu/bsp-digital-payments-now-over-57-of-retail-transactions",
  },
]

const built = [
  "A branded booking page for each business, with live availability and advance booking",
  "Optional deposits, by card in the US and by GCash, Maya, or bank transfer in the Philippines",
  "An owner dashboard for the calendar, staff schedules, front-desk checkout, client records, and reports",
  "A walk-in queue for customers who arrive without a booking",
  "Booking confirmations and reminders by email and app notification",
  "iOS and Android apps for owners and customers",
]

const engineering = [
  {
    title: "No double bookings",
    body: "Every booking and reschedule is validated against the same availability rules and saved in a single transaction, so two customers cannot reserve the same slot.",
  },
  {
    title: "Two markets, two payment models",
    body: "US businesses collect card deposits through Stripe. Philippine businesses receive e-wallet or bank transfers, and customers upload proof of payment for the business to approve. Proof images are stored privately.",
  },
  {
    title: "Time zones and currencies",
    body: "Each business keeps its own time zone and currency, so businesses in Manila and San Francisco each see correct times and prices.",
  },
  {
    title: "Payment and access security",
    body: "Payment requests can be retried safely without duplicate charges, staff can access only their own business, and owners can sign out of every device at once.",
  },
  {
    title: "Rapid app updates",
    body: "Most fixes reach the mobile apps through over-the-air updates, without waiting for a new store review.",
  },
  {
    title: "Production monitoring",
    body: "Automated checks run against production nightly and after every release, with alerts on any failure.",
  },
]

function Cite({ n }: { n: number }) {
  return (
    <sup>
      <a
        href={`#source-${n}`}
        aria-label={`Source ${n}`}
        className="ml-0.5 rounded font-mono text-xs text-subtle hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
      >
        [{n}]
      </a>
    </sup>
  )
}

export default function NabbeeCaseStudyPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />

      <section className="border-b border-border px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 font-mono text-xs tracking-[0.08em] text-accent-nabbee uppercase">Case study · Our product</p>
          <h1 className="max-w-2xl text-balance text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
            Nabbee: online booking and deposits for service businesses
          </h1>
          <FadeIn immediate delay={200}>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              How WKL Labs studied where salons, spas, and other appointment-based businesses lose time and revenue,
              then designed, built, and launched a booking platform for them in two countries.
            </p>
          </FadeIn>
          <FadeIn immediate delay={300}>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-xs tracking-[0.08em] text-subtle uppercase">{f.label}</dt>
                  <dd className="mt-1 text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-5 pt-12 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src="/case-studies/nabbee-app.webp"
            alt="Four Nabbee owner app screens: today's overview, the booking schedule, payment proofs waiting for review, and analytics"
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 960px, 100vw"
            className="h-auto w-full"
            priority
          />
        </div>
        <p className="mt-3 text-center text-xs text-subtle">Owner app screens from a demo shop.</p>
      </div>

      <article className="mx-auto w-full max-w-3xl flex-1 px-5 py-14 sm:px-8">
        <FadeIn>
          <h2 className="mb-4 text-xl font-semibold tracking-tight">The problem</h2>
          <p className="leading-relaxed text-muted-foreground">
            Many appointment-based businesses still manage bookings by phone, text message, or social media. Owners
            spend significant time answering availability questions, confirming slots manually, and absorbing the
            cost of missed appointments.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Published research supports three observations that shaped the product:
          </p>
          <ul className="mt-4 space-y-4">
            <li className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
              <span className="font-semibold">Online booking is still missing for many small businesses.</span>{" "}
              <span className="text-muted-foreground">
                An audit of 4,407 small business websites found that 27.3% offered online booking. Salons had the
                highest rate of any industry, at 59.9%.
              </span>
              <Cite n={1} />
            </li>
            <li className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
              <span className="font-semibold">Reminders reduce missed appointments.</span>{" "}
              <span className="text-muted-foreground">
                A meta-analysis of clinic studies found that patients who received digital reminders missed 15% of
                appointments, compared with 21% of those who did not, and a Cochrane review reached a similar
                conclusion. Both studies concern healthcare, so the effect may differ for service businesses.
              </span>
              <Cite n={2} />
              <Cite n={3} />
            </li>
            <li className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
              <span className="font-semibold">Most retail payments in the Philippines are now digital.</span>{" "}
              <span className="text-muted-foreground">
                The Bangko Sentral ng Pilipinas reported that 57.4% of retail payments in the Philippines, by volume,
                were digital in 2024.
              </span>
              <Cite n={4} />
              <span className="text-muted-foreground">
                {" "}Nabbee therefore supports deposits by GCash, Maya, and bank transfer for businesses in the
                Philippines, and card deposits through Stripe for businesses in the US.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Evidence on deposits specific to salons and similar businesses is limited, so Nabbee lets each business
            decide whether to require one.
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="mt-14 mb-4 text-xl font-semibold tracking-tight">What we built</h2>
          <ul className="space-y-3">
            {built.map((item) => (
              <li key={item} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 flex-none text-muted-foreground" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <h2 className="mt-14 mb-4 text-xl font-semibold tracking-tight">Engineering decisions</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {engineering.map((e) => (
              <div key={e.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="text-sm font-semibold">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <h2 className="mt-14 mb-4 text-xl font-semibold tracking-tight">Where it is today</h2>
          <p className="leading-relaxed text-muted-foreground">
            Nabbee is live on the web at nabbee.app and available in the App Store and Google Play. Businesses in
            the US and the Philippines can register, configure their booking page, and begin accepting bookings the
            same day. WKL Labs continues to operate, monitor, and improve the platform.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="https://nabbee.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-sm transition-colors hover:text-muted-foreground"
            >
              nabbee.app <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <StoreBadges appStoreUrl={nabbeeApp.appStoreUrl} playStoreUrl={nabbeeApp.playStoreUrl} />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight">Need something similar?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We build web and mobile applications for businesses, from research and design to launch and support.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>

        <section aria-labelledby="sources" className="mt-14 border-t border-border pt-8">
          <h2 id="sources" className="font-mono text-xs tracking-[0.1em] text-subtle uppercase">
            Sources
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
            {sources.map((s) => (
              <li key={s.id} id={`source-${s.id}`} className="scroll-mt-24">
                [{s.id}]{" "}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <Footer />
    </main>
  )
}
