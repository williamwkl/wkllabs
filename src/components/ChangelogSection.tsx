import FadeIn from "./FadeIn"

const entries = [
  {
    date: "May 2025",
    tag: "BookIt",
    title: "Booking confirmation emails",
    description: "Clients now receive automatic confirmation emails with booking details and a calendar invite.",
  },
  {
    date: "Apr 2025",
    tag: "MenuQR",
    title: "Multi-language menu support",
    description: "Restaurant owners can now publish menus in multiple languages from a single dashboard.",
  },
  {
    date: "Mar 2025",
    tag: "BookIt",
    title: "Service categories",
    description: "Group your services into categories so clients can find what they need faster.",
  },
  {
    date: "Feb 2025",
    tag: "Platform",
    title: "WKL Labs site launched",
    description: "Our public platform page is live — find all our products in one place.",
  },
]

const tagColors: Record<string, string> = {
  BookIt: "bg-blue-950 text-blue-400 border-blue-800",
  MenuQR: "bg-orange-950 text-orange-400 border-orange-800",
  Platform: "bg-neutral-800 text-neutral-400 border-neutral-700",
}

export default function ChangelogSection() {
  return (
    <section id="changelog" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            Changelog
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What's new
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto text-base sm:text-lg">
            A running log of updates and improvements across all WKL Labs products.
          </p>
        </FadeIn>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 ml-[7px]" />
          <div className="flex flex-col gap-10">
            {entries.map((entry, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-6">
                  <div className="mt-1.5 shrink-0 h-3.5 w-3.5 rounded-full border-2 border-neutral-600 bg-neutral-900 z-10" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${tagColors[entry.tag]}`}>
                        {entry.tag}
                      </span>
                      <span className="text-xs text-neutral-600">{entry.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{entry.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{entry.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
