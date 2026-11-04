import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const title = "About | WKL Labs"
const description =
  "WKL Labs is an independent software studio led by William Lim, with more than 10 years of experience in product, technology, and operations."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "https://wkllabs.com/about", type: "website" },
}

const experience = [
  { role: "Founder", org: "WKL Labs LLC" },
  { role: "VP & Head of iCASH", org: "I-Remit, Inc." },
  { role: "Technical Product Manager", org: "Mynt (Globe Fintech Innovations), the company behind GCash" },
  { role: "Technical Presales", org: "Barhead Solutions, Yondu, and Solvento" },
]

export default function AboutPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />
      <section className="mx-auto w-full max-w-4xl flex-1 px-5 py-20 sm:px-8 sm:py-28">
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          Experienced, accountable software development.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          WKL Labs is an independent software studio led by William Lim. Clients work directly with
          the person responsible for the design, development, and support of their project.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          William brings more than 10 years of experience across product management, technical
          presales, and operations in fintech and IT. The studio also builds and operates its own
          products, Nabbee and Spell Collector.
        </p>

        <h2 className="mt-14 text-2xl font-semibold tracking-tight">Experience</h2>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {experience.map((item) => (
            <li key={item.role} className="py-4">
              <div className="font-medium">{item.role}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">{item.org}</div>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl font-semibold tracking-tight">Credentials</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          <li>BS Management Information Systems, Ateneo de Manila University</li>
          <li>ITIL Foundation certified</li>
          <li>WKL Labs LLC is registered in Wyoming, USA</li>
        </ul>

        <Link
          href="/contact"
          className="mt-12 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>
      <Footer />
    </main>
  )
}
