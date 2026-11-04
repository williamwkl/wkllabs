import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = { title: "Page not found | WKL Labs" }

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="select-none font-mono text-7xl font-bold text-border-strong">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-muted-foreground">
        The page you requested does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-lg border border-border-strong px-5 py-2.5 font-mono text-sm transition-colors hover:border-ring"
      >
        Return to home
      </Link>
    </main>
  )
}
