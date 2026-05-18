export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-lg font-bold text-white">
              WKL <span className="text-neutral-500">Labs</span>
            </span>
            <p className="mt-1 text-sm text-neutral-500">
              Building tools for modern businesses.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-1">
            <a
              href="mailto:hello@wkllabs.com"
              className="text-sm text-neutral-500 hover:text-white transition-colors"
            >
              hello@wkllabs.com
            </a>
            <p className="text-xs text-neutral-700">
              © {year} WKL Labs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
