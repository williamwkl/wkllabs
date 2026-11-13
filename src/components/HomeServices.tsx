import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Workflow } from "lucide-react"
import FadeIn from "./FadeIn"

type Item = {
  title: string
  body: string
  tags: string
  slug: string
  accent: string
  wide: boolean
  image?: { src: string; position: string }
}

const items: Item[] = [
  {
    title: "Applications",
    body: "Web and mobile applications for your customers and team.",
    tags: "Web · iOS · Android",
    slug: "apps",
    accent: "var(--accent-nabbee)",
    wide: true,
    image: { src: "/case-studies/nabbee-app.webp", position: "object-[0%_18%]" },
  },
  {
    title: "Websites",
    body: "Professional websites and online platforms.",
    tags: "Company sites · Platforms",
    slug: "websites",
    accent: "var(--accent-spell)",
    wide: false,
    image: { src: "/products/spellcollector.webp", position: "object-top" },
  },
  {
    title: "Automation",
    body: "Automate recurring tasks, connect spreadsheets, and reduce manual work.",
    tags: "Apps Script · Sheets · Excel",
    slug: "spreadsheet-workflow-automation",
    accent: "var(--accent-automation)",
    wide: false,
  },
  {
    title: "Dashboards",
    body: "Google Sheets and Excel reporting that updates automatically.",
    tags: "Google Sheets · Excel",
    slug: "automated-reporting-dashboards",
    accent: "var(--accent-dashboards)",
    wide: true,
    image: { src: "/samples/property-dashboard.png", position: "object-[50%_12%]" },
  },
]

// Drawn illustration for Automation, since client workbooks cannot be shown.
function FlowArt({ accent }: { accent: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3 bg-[#101014] px-5">
      <div className="w-[38%] overflow-hidden rounded-md border border-border bg-card">
        <div className="border-b border-border px-2 py-1 font-mono text-[9px] text-subtle">orders.xlsx</div>
        {[0, 1, 2, 3].map((r) => (
          <div key={r} className="grid grid-cols-3 border-b border-border last:border-b-0">
            {[0, 1, 2].map((c) => (
              <div key={c} className="border-r border-border px-1.5 py-1.5 last:border-r-0">
                <div className="h-1 rounded-full bg-white/15" style={{ width: `${40 + ((r * 3 + c) * 17) % 50}%` }} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-full border"
          style={{
            borderColor: `color-mix(in srgb, ${accent} 40%, transparent)`,
            backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
            color: accent,
          }}
        >
          <Workflow className="h-4 w-4" />
        </div>
        <span className="font-mono text-[9px] text-subtle">Mon 6:00</span>
      </div>
      <div className="w-[34%] rounded-md border border-border bg-card p-2">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-subtle">
          <Mail className="h-3 w-3" /> Weekly report
        </div>
        <div className="mt-2 flex h-9 items-end gap-1">
          {[45, 70, 55, 90, 65].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, backgroundColor: i === 3 ? accent : "rgba(255,255,255,0.14)" }}
            />
          ))}
        </div>
        <div className="mt-2 h-1 w-2/3 rounded-full bg-white/15" />
      </div>
    </div>
  )
}

export default function HomeServices() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8 sm:pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
      <div className="grid gap-4 sm:grid-cols-5">
        {items.map((item, i) => (
          <FadeIn key={item.slug} delay={i * 60} className={item.wide ? "sm:col-span-3" : "sm:col-span-2"}>
            <Link
              href={`/services#${item.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,translate] duration-200 hover:-translate-y-0.5 hover:border-ring motion-reduce:hover:translate-y-0"
            >
              <div aria-hidden="true" className="relative aspect-[16/9] overflow-hidden border-b border-border sm:aspect-auto sm:h-56">
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 480px, 100vw"
                    className={`object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100 ${item.image.position}`}
                  />
                ) : (
                  <FlowArt accent={item.accent} />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-xs" style={{ color: item.accent }}>{item.tags}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{item.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
                  View service <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
