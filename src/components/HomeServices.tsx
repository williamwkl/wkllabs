import Link from "next/link"
import { AppWindow, ArrowRight, Globe, LayoutDashboard, Workflow, type LucideIcon } from "lucide-react"
import FadeIn from "./FadeIn"

const items: { title: string; body: string; slug: string; icon: LucideIcon }[] = [
  { title: "Applications", body: "Web and mobile applications for your customers and team.", slug: "apps", icon: AppWindow },
  { title: "Websites", body: "Professional websites and online platforms.", slug: "websites", icon: Globe },
  {
    title: "Automation",
    body: "Google Apps Script solutions that replace repetitive spreadsheet work.",
    slug: "spreadsheet-workflow-automation",
    icon: Workflow,
  },
  {
    title: "Dashboards",
    body: "Google Sheets and Excel reporting that updates automatically.",
    slug: "automated-reporting-dashboards",
    icon: LayoutDashboard,
  },
]

export default function HomeServices() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8 sm:pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <FadeIn key={item.slug} delay={i * 75}>
            <Link
              href={`/services#${item.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-white/[0.02] p-6 transition-colors hover:border-border-strong"
            >
              <item.icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{item.body}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors group-hover:text-foreground">
                View service <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
