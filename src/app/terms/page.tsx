import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Terms of Use | WKL Labs",
  alternates: { canonical: "/terms" },
  description: "Terms of use for the WKL Labs company website.",
}

export default function TermsPage() {
  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />
      <article className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8">
        <p className="mb-3 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
          Last updated: November 4, 2026
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>

        <div className="mt-8 space-y-8 text-muted-foreground [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-2">
          <section>
            <h2>Scope</h2>
            <p>
              These terms cover your use of the WKL Labs company website
              (wkllabs.com). Our products, Nabbee and Spell
              Collector, have their own terms of service on their own sites.
            </p>
          </section>
          <section>
            <h2>Use of this site</h2>
            <p>
              The site is provided for information about WKL Labs and its
              products. Content is provided as-is, without warranties of any
              kind. We may change or remove content at any time.
            </p>
          </section>
          <section>
            <h2>Intellectual property</h2>
            <p>
              WKL Labs, Nabbee, and Spell Collector names, logos, and site
              content belong to WKL Labs LLC. Links to third-party sites are
              provided for convenience; we are not responsible for their
              content.
            </p>
          </section>
          <section>
            <h2>Liability</h2>
            <p>
              To the maximum extent permitted by law, WKL Labs LLC is not
              liable for damages arising from your use of this website. These
              terms are governed by the laws of Wyoming, USA.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>Questions about these terms: hello@wkllabs.com.</p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
