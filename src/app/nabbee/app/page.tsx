import type { Metadata } from "next"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { nabbeeApp, storeUrlFor } from "@/lib/apps"

export const metadata: Metadata = {
  title: "Get the Nabbee app | WKL Labs",
  description: "Download Nabbee for iPhone or Android.",
  robots: { index: false },
}

// Phones go straight to their store; computers see both options.
export default async function NabbeeAppPage() {
  const store = storeUrlFor(nabbeeApp, (await headers()).get("user-agent") ?? "")
  if (store) redirect(store)

  const links = [
    { label: "App Store", sub: "iPhone and iPad", href: nabbeeApp.appStoreUrl },
    { label: "Google Play", sub: "Android", href: nabbeeApp.playStoreUrl },
  ]

  return (
    <main id="main" className="flex min-h-screen flex-col">
      <Navbar />
      <section className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Get the Nabbee app</h1>
        <p className="mt-3 text-muted-foreground">Open this page on your phone to go straight to your app store, or choose one below.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 flex-1 items-center justify-between gap-3 rounded-xl border border-border px-5 py-4 transition-colors hover:border-border-strong"
              >
                <span>
                  <span className="block font-semibold">{link.label}</span>
                  <span className="block font-mono text-xs text-subtle">{link.sub}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
              </a>
            ) : null
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
