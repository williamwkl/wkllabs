export type GuideSection =
  | { type: "prose"; title?: string; paras: string[] }
  | { type: "keypoints"; title?: string; items: string[] }
  | { type: "cards"; title: string; dek?: string; items: { h: string; p: string }[] }
  | { type: "steps"; title: string; dek?: string; items: { h: string; p: string }[] }
  | { type: "faq"; title: string; items: { q: string; a: string }[] }

export interface Guide {
  slug: string
  kicker: string
  title: string
  dek: string
  readMinutes: number
  /** Cross-links back into the offer. */
  relatedServiceSlug: string
  relatedSampleId: string
  body: GuideSection[]
}

export const guides: Guide[] = [
  {
    slug: "automated-reporting-dashboards",
    kicker: "Reporting",
    title: "What is an automated reporting dashboard?",
    dek: "A plain-English guide to the report that builds itself, for owners and managers who track numbers every week.",
    readMinutes: 4,
    relatedServiceSlug: "automated-reporting-dashboards",
    relatedSampleId: "property-dashboard",
    body: [
      {
        type: "prose",
        paras: [
          "An automated reporting dashboard is a single view that pulls your numbers together, tidies them up, and refreshes itself on a set schedule. Instead of copying figures out of your systems every week and re-pasting them into the same layout, the dashboard does the assembly for you and always shows the current picture.",
          "The important part for a busy owner: it runs on Google's or Microsoft's own servers, on a schedule you choose. Your laptop does not need to be open, there is no extra program to install, and no separate subscription to pay for. It works inside the account you already have.",
        ],
      },
      {
        type: "keypoints",
        title: "What makes it 'automated'",
        items: [
          "Pulls from your own data sources on a schedule, not by hand",
          "Keeps history, so you can compare week to week and spot trends",
          "Flags values that look off before anyone else sees them",
          "Lives in your own account, so the work and the data stay yours",
        ],
      },
      {
        type: "cards",
        title: "What people put on one",
        dek: "The same build works across industries — these are common jobs it replaces.",
        items: [
          { h: "Portfolio health", p: "Occupancy, leased percent, leads and delinquency across properties, with a same-store comparison." },
          { h: "Sales performance", p: "Revenue vs target, pipeline by stage, and rep attainment in one screen." },
          { h: "Marketing & web", p: "Sessions, conversions, channels and top landing pages, refreshed on their own." },
          { h: "Finance & ops", p: "Cash, margins, aging and any operational number you review on a cycle." },
        ],
      },
      {
        type: "steps",
        title: "How it comes together",
        items: [
          { h: "Data comes in", p: "Your numbers land in the sheet — typed, imported, or dropped from an export or a form." },
          { h: "It gets tidied", p: "On your schedule, the build cleans, combines and organizes the data for you." },
          { h: "Your view updates", p: "The dashboard refreshes on its own, so the current picture is always ready." },
          { h: "You get alerts", p: "If something looks off, it emails you. Otherwise it runs quietly." },
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          { q: "Do I need special software?", a: "No. If you can open Google Sheets or Excel, you already have what is needed. It works in your normal browser." },
          { q: "Where does it run?", a: "On Google's or Microsoft's servers, inside your own account — so it keeps running even when your computer is off." },
          { q: "Do I own it?", a: "Yes. The dashboard lives in your account with no lock-in. An optional retainer covers ongoing help if you want it." },
        ],
      },
    ],
  },
  {
    slug: "google-apps-script",
    kicker: "Automation",
    title: "What is Google Apps Script?",
    dek: "The free automation built into Google Sheets — what it is, what it can do for your business, and whether you need anything to use it.",
    readMinutes: 5,
    relatedServiceSlug: "spreadsheet-workflow-automation",
    relatedSampleId: "property-dashboard",
    body: [
      {
        type: "prose",
        paras: [
          "Google Apps Script is free automation that lives inside Google Sheets and the rest of Google Workspace. Think of it as a set of instructions you can save once, then have Google run for you: pull these numbers together, tidy them up, refresh this summary, send that email.",
          "It runs on Google's own computers, on a schedule you choose. Your laptop does not need to be open, there is no extra program to install, and no separate subscription to pay for. It works inside the Google account you already have.",
        ],
      },
      {
        type: "keypoints",
        title: "The short version",
        items: [
          "Built into Google Sheets, Docs, Gmail and Drive at no extra cost",
          "Runs on a set schedule, on Google's servers, without your computer on",
          "Lives in your own account, so the work stays yours",
        ],
      },
      {
        type: "cards",
        title: "What it can do for you",
        dek: "Common jobs small businesses hand off — each replaces a task someone does by hand today.",
        items: [
          { h: "Pull data into one place", p: "Bring numbers from different sheets, exports or tools together into a single view." },
          { h: "Clean and de-duplicate", p: "Fix inconsistent formatting, remove duplicate rows, standardize names and dates automatically." },
          { h: "Weekly reports on a schedule", p: "Have a dashboard or summary refresh itself, so the current numbers are always ready." },
          { h: "Alerts when something's off", p: "Get an email when a number crosses a line you care about — low stock, an overdue payment." },
          { h: "Form-to-sheet workflows", p: "Turn form responses into organized records: log the entry, send a confirmation, file it." },
          { h: "Send routine emails", p: "Email a recurring report or reminder to the right people automatically, straight from the sheet." },
        ],
      },
      {
        type: "steps",
        title: "How it works",
        items: [
          { h: "Data comes in", p: "Your numbers land in the sheet — typed, imported, or dropped from an export or a form." },
          { h: "The script tidies it", p: "On the schedule you set, Apps Script cleans, combines and organizes the data." },
          { h: "Your summary updates", p: "Your dashboard or report refreshes on its own, so the current view is always ready." },
          { h: "You get alerts", p: "If something looks off, it emails you. Otherwise it runs quietly and you do nothing." },
        ],
      },
      {
        type: "faq",
        title: "Is it free? Do I need anything?",
        items: [
          { q: "Is it really free?", a: "Yes. Apps Script is included with your Google account at no extra charge. There is no separate license or subscription to switch it on." },
          { q: "Do I need to install anything?", a: "No new software. If you can open Google Sheets, you already have everything needed. It works in your normal browser." },
          { q: "What account do I need?", a: "A standard free Google account works for most everyday jobs. A paid Workspace account raises the daily limits for heavier tasks." },
          { q: "Are there any limits?", a: "Google sets fair daily limits, for example on emails per day. Most small-business tasks sit well inside them; Workspace accounts get higher limits." },
        ],
      },
    ],
  },
]

export function guideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug)
}

export function guideForService(serviceSlug: string): Guide | undefined {
  return guides.find((g) => g.relatedServiceSlug === serviceSlug)
}
