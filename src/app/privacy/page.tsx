import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Privacy Policy — WKL Labs",
  description: "Privacy policy for the WKL Labs company website.",
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <article className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8">
        <p className="mb-3 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
          Last updated: July 17, 2026
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>

        <div className="mt-8 space-y-8 text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-2">
          <section>
            <h2>Scope</h2>
            <p>
              This policy covers the WKL Labs company website (wkllabs.com and
              wklapp.com). Our products, Nabbee and Spell Collector, have their
              own privacy policies on their own sites, which govern data handled
              inside those products.
            </p>
          </section>
          <section>
            <h2>What we collect</h2>
            <p>
              This website has no accounts, no signup forms, and no advertising
              or analytics trackers. We do not set cookies. Our hosting
              providers keep standard server logs (IP address, request time,
              user agent) for security and operations, retained briefly.
            </p>
          </section>
          <section>
            <h2>Email</h2>
            <p>
              If you email hello@wkllabs.com, we keep the correspondence to
              respond to you. We do not sell or share your contact details, and
              we do not add you to any mailing list.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions about this policy: hello@wkllabs.com. WKL Labs LLC is a
              Wyoming, USA company.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
