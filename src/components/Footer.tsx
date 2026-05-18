export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold text-white">
              WKL <span className="text-slate-500">Labs</span>
            </span>
            <p className="mt-1 text-sm text-slate-500">
              Building tools for modern businesses.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <a
              href="mailto:hello@wkllabs.com"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              hello@wkllabs.com
            </a>
            <p className="text-xs text-slate-700">
              © {year} WKL Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
