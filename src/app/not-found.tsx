import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
      <p className="text-8xl font-bold text-slate-800 select-none">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
      <p className="mt-2 text-slate-400">This page doesn&apos;t exist or has been moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors"
      >
        ← Back to home
      </Link>
    </div>
  )
}
