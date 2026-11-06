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
  "Deposits that each shop can turn on or off, by card in the US and by GCash, Maya, or bank transfer in the Philippines",
  "An owner dashboard for the calendar, staff schedules, front-desk checkout, client records, and reports",
  "A walk-in queue for customers who arrive without a booking",
  "Booking confirmations and reminders by email and app notification",
  "iOS and Android apps for owners and customers",
]

const engineering = [
  {
    title: "No double bookings",
    body: "Every booking and reschedule is checked against the same availability rules and saved in a single step, so two customers cannot take the same slot at the same moment.",
  },
  {
    title: "Two markets, two payment models",
    body: "US shops take card deposits through Stripe. Philippine shops receive e-wallet or bank transfers, and customers upload proof of payment for the shop to approve. Proof images are stored privately.",
  },
  {
    title: "Time zones and currencies",
    body: "Each business keeps its own time zone and currency, so a shop in Manila and a shop in San Francisco both see correct times and prices.",
  },
  {
    title: "Safe payments and access",
    body: "Payment requests can be retried without charging twice, staff only see their own business, and signing out on one device can revoke access everywhere.",
  },
  {
    title: "Fast app updates",
    body: "Most fixes reach the mobile apps through over-the-air updates, without waiting for a new App Store or Google Play review.",
  },
  {
    title: "Monitoring after launch",
    body: "Automated checks run against production every night and after every deploy, and alert us when something fails.",
  },
]

function Cite({ n }: { n: number }) {
  return (
    <sup>
      <a href={`#source-${n}`} className="ml-0.5 font-mono text-xs text-subtle hover:text-foreground">
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
              How we studied where salons, spas, and other appointment businesses lose time and income, then
              designed, built, and launched a booking platform for them in two countries.
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
            Many appointment businesses still take bookings by phone, text, or social media messages. That means
            owners answer the same questions all day, double-check availability by hand, and lose slots when
            customers do not show up.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Published research points the same way:
          </p>
          <ul className="mt-4 space-y-4">
            <li className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
              <span className="font-semibold">Online booking is still missing for many small businesses.</span>{" "}
              <span className="text-muted-foreground">
                An audit of 4,407 small business websites found only 27.3% offered any way to book online. Salons
                led all industries, and still only 59.9% did.
              </span>
              <Cite n={1} />
            </li>
            <li className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
              <span className="font-semibold">Reminders reduce missed appointments.</span>{" "}
              <span className="text-muted-foreground">
                A meta-analysis of clinic studies found people who received digital reminders missed 15% of
                appointments, against 21% without them, and a Cochrane review reached a similar conclusion. Both
                come from healthcare, the setting with the strongest research.
              </span>
              <Cite n={2} />
              <Cite n={3} />
            </li>
            <li className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed">
              <span className="font-semibold">Filipino customers increasingly pay digitally, but often not by card.</span>{" "}
              <span className="text-muted-foreground">
                The Bangko Sentral ng Pilipinas reported that 57.4% of retail payments in the Philippines were digital
                in 2024, and e-wallets such as GCash and Maya are a common way to pay. A booking product built only for card
                payments would miss how many Philippine customers actually pay.
              </span>
              <Cite n={4} />
            </li>
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We also looked at deposits. Many booking companies report large drops in no-shows after shops require
            them, but we found no independent study for salons, so Nabbee lets each business decide whether to
            require one.
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
            Nabbee is live on the web at nabbee.app and in the App Store and Google Play. Businesses in the US and
            the Philippines can sign up, set up their booking page, and start taking bookings the same day. We
            continue to run, monitor, and improve it.
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
