export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-neutral-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold text-neutral-900">
              WKL <span className="text-neutral-400">Labs</span>
            </span>
            <p className="mt-1 text-sm text-neutral-400">
              Building tools for modern businesses.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <a
              href="mailto:hello@wkllabs.com"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              hello@wkllabs.com
            </a>
            <p className="text-xs text-neutral-300">
              © {year} WKL Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
