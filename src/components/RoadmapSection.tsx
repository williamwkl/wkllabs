import FadeIn from "./FadeIn"

type Status = "planned" | "in-progress" | "shipped"

interface RoadmapItem {
  title: string
  product: string
  description: string
}

const columns: { status: Status; label: string; color: string; dot: string }[] = [
  { status: "planned", label: "Planned", color: "text-slate-400", dot: "bg-slate-600" },
  { status: "in-progress", label: "In Progress", color: "text-yellow-400", dot: "bg-yellow-500" },
  { status: "shipped", label: "Shipped", color: "text-emerald-400", dot: "bg-emerald-500" },
]

const items: Record<Status, RoadmapItem[]> = {
  planned: [
    { title: "SMS reminders", product: "BookIt", description: "Automated SMS reminders sent before appointments." },
    { title: "Online ordering", product: "MenuQR", description: "Let customers order directly from the digital menu." },
    { title: "Analytics dashboard", product: "Platform", description: "Unified stats across all your WKL Labs products." },
  ],
  "in-progress": [
    { title: "Google Calendar sync", product: "BookIt", description: "Two-way sync with Google Calendar for bookings." },
    { title: "Multiple menus", product: "MenuQR", description: "Support for breakfast, lunch, and dinner menus." },
  ],
  shipped: [
    { title: "Confirmation emails", product: "BookIt", description: "Auto-send booking confirmations to clients." },
    { title: "Multi-language menus", product: "MenuQR", description: "Publish menus in multiple languages." },
    { title: "QR code generator", product: "MenuQR", description: "Instant QR codes for any table or location." },
  ],
}

const productColors: Record<string, string> = {
  BookIt: "text-blue-400",
  MenuQR: "text-orange-400",
  Platform: "text-slate-400",
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Roadmap
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Where we're headed
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto text-base sm:text-lg">
            A rough look at what we're working on. Things change — but this is where our focus is.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col, ci) => (
            <FadeIn key={col.status} delay={ci * 100}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                  <span className={`text-sm font-semibold ${col.color}`}>{col.label}</span>
                  <span className="ml-auto text-xs text-slate-600">{items[col.status].length}</span>
                </div>
                {items[col.status].map((item, i) => (
                  <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-4 flex flex-col gap-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-medium text-white">{item.title}</span>
                      <span className={`text-xs font-medium shrink-0 ${productColors[item.product]}`}>
                        {item.product}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p className="mt-10 text-center text-xs text-slate-700">
            Have a feature request?{" "}
            <a href="mailto:hello@wkllabs.com" className="text-slate-500 hover:text-white transition-colors underline underline-offset-2">
              Send us an email
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
