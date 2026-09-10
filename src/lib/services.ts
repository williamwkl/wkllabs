export interface Service {
  slug: string
  index: string
  kicker: string
  name: string
  /** Outcome-led one-liner (the business result, not the deliverable). */
  outcome: string
  /** Concrete artifact the client receives. */
  deliverable: string
  /** Fixed starting price, or null for custom/retainer. */
  priceFrom: number | null
  priceNote: string
  /** 150-250 word plain-English mini-guide embedded on the service. */
  miniGuide: string[]
  /** Sample shown alongside this service (id in samples.ts). */
  sampleId: string
  bullets: string[]
}

export const services: Service[] = [
  {
    slug: "automated-reporting-dashboards",
    index: "01",
    kicker: "Reporting",
    name: "Automated Reporting Dashboards",
    outcome:
      "See the numbers that matter in one place, refreshed on a schedule — without rebuilding the report by hand.",
    deliverable: "A live Google Sheet or Excel dashboard you own outright.",
    priceFrom: 1200,
    priceNote: "final quote depends on the number of data sources and properties",
    miniGuide: [
      "An automated reporting dashboard is a single view that pulls your numbers together, tidies them up, and refreshes itself on a set schedule. Instead of copying figures out of Yardi, your analytics, and a handful of spreadsheets every week, the dashboard does the assembly for you and always shows the current picture.",
      "It runs on Google's or Microsoft's own servers, so your laptop does not need to be open, and it lives inside the account you already have — no new software, no separate subscription. You get occupancy, leasing, delinquency, leads, or whatever you track in one clean layout, with history kept so you can compare week to week.",
    ],
    sampleId: "property-dashboard",
    bullets: [
      "Scheduled auto-refresh and history for trend comparisons",
      "Validation checks that flag anything that looks off",
      "Documentation so your team can run it",
    ],
  },
  {
    slug: "spreadsheet-workflow-automation",
    index: "02",
    kicker: "Automation",
    name: "Spreadsheet & Workflow Automation",
    outcome:
      "Replace the weekly copy-paste with one button or a schedule, so a repetitive task runs itself.",
    deliverable: "A working script inside your own workbook.",
    priceFrom: 500,
    priceNote: "priced by the task; confirmed in writing before any work begins",
    miniGuide: [
      "Most spreadsheet busywork is the same steps in the same order every time: pull an export, clean it, merge it, format it, send it. That is exactly the kind of work Google Apps Script (or Excel's own automation) is built to take over — you save the instructions once, and they run whenever you want.",
      "The automation handles messy inputs and changing row counts, cleans and de-duplicates, and can email the result to the right people on a schedule. It lives in your account, so the work stays yours and there is nothing to install. If you can open a spreadsheet, you already have everything needed to run it.",
    ],
    sampleId: "marketing-dashboard",
    bullets: [
      "Handles messy inputs and changing row counts",
      "Data cleaning and merging across sheets or files",
      "A short walkthrough so it is easy to maintain",
    ],
  },
  {
    slug: "data-cleaning-internal-tools",
    index: "03",
    kicker: "Data & tools",
    name: "Data Cleaning & Internal Tools",
    outcome:
      "Turn messy exports and scattered records into a tidy, reliable source your team can actually use.",
    deliverable: "A cleaned dataset or a lightweight internal tool in your stack.",
    priceFrom: null,
    priceNote: "scoped to the data and the job; quoted after a short look",
    miniGuide: [
      "Before any dashboard or report can be trusted, the underlying data has to be clean: consistent names and dates, no duplicate rows, columns that line up across files. This work is unglamorous and easy to get wrong by hand, which is why it is worth automating once and reusing.",
      "The same skills build small internal tools — a form that files responses where your team can find them, a tracker that updates itself, a KPI sheet that stays current. Nothing heavy, no platform to learn: it works inside the tools you already have, and you own whatever we build.",
    ],
    sampleId: "sales-dashboard",
    bullets: [
      "Standardize names, dates, and formats across sources",
      "De-duplicate and merge scattered records",
      "Small internal tools (forms, trackers, KPI sheets)",
    ],
  },
]

/** Optional ongoing tier shown after the service list. */
export const retainer = {
  name: "Managed Reporting",
  blurb:
    "A monthly retainer that keeps your dashboards and automations running as your data changes — priority fixes when a feed breaks, new metrics and views on request, added sources as you grow.",
  priceNote: "Custom — scoped to your volume, priced after a first build.",
}
