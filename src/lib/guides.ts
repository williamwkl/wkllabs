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
  relatedSampleId?: string
  body: GuideSection[]
}

export const guides: Guide[] = [
  {
    slug: "automated-reporting-dashboards",
    kicker: "Reporting",
    title: "What is an automated reporting dashboard?",
    dek: "A practical guide to self-updating reports for owners and managers who review numbers every week.",
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
        dek: "The same approach works across industries. These are common examples.",
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
          { h: "Data comes in", p: "Your numbers reach the sheet by import, form, export, or manual entry." },
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
          { q: "Where does it run?", a: "On Google's or Microsoft's servers, inside your own account, so it keeps running when your computer is off." },
          { q: "Do I own it?", a: "Yes. The dashboard lives in your account with no lock-in. Ongoing support is available if you need it." },
        ],
      },
    ],
  },
  {
    slug: "google-apps-script",
    kicker: "Automation",
    title: "What is Google Apps Script?",
    dek: "The automation built into Google Workspace: what it is, how it helps your business, and what you need to use it.",
    readMinutes: 5,
    relatedServiceSlug: "spreadsheet-workflow-automation",
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
        dek: "Common tasks that small businesses automate.",
        items: [
          { h: "Pull data into one place", p: "Bring numbers from different sheets, exports or tools together into a single view." },
          { h: "Clean and de-duplicate", p: "Fix inconsistent formatting, remove duplicate rows, standardize names and dates automatically." },
          { h: "Weekly reports on a schedule", p: "Have a dashboard or summary refresh itself, so the current numbers are always ready." },
          { h: "Alerts when something's off", p: "Receive an email when a number crosses a set threshold, such as low stock or an overdue payment." },
          { h: "Form-to-sheet workflows", p: "Turn form responses into organized records: log the entry, send a confirmation, file it." },
          { h: "Send routine emails", p: "Email a recurring report or reminder to the right people automatically, straight from the sheet." },
        ],
      },
      {
        type: "steps",
        title: "How it works",
        items: [
          { h: "Data comes in", p: "Your numbers reach the sheet by import, form, export, or manual entry." },
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
  {
    slug: "custom-web-and-mobile-apps",
    kicker: "Applications",
    title: "When does a business need a custom application?",
    dek: "How to decide between off-the-shelf software and a custom web or mobile application.",
    readMinutes: 3,
    relatedServiceSlug: "apps",
    body: [
      {
        type: "prose",
        paras: [
          "Off-the-shelf software is usually the right starting point because it is quick to adopt and predictable to run. A custom application becomes worthwhile when your process gives you an advantage, or when no existing product fits without costly workarounds.",
          "A custom application is designed around how your business operates. It can give customers and staff one place to work, and you decide how it develops over time.",
        ],
      },
      {
        type: "keypoints",
        title: "Signs a custom application may be worthwhile",
        items: [
          "Your team relies on several disconnected tools and spreadsheets",
          "Existing products cannot support an important part of your process",
          "Customers need a dedicated way to book, buy, or manage their accounts",
          "You need control over your data, features, and integrations",
        ],
      },
      {
        type: "steps",
        title: "How a project typically progresses",
        items: [
          { h: "Define the problem", p: "Confirm who will use the application and what it must accomplish." },
          { h: "Build the first version", p: "Focus on the features that deliver value first." },
          { h: "Launch and test with users", p: "Release the application and learn from real usage." },
          { h: "Maintain and improve", p: "Fix issues, keep it secure, and add features based on evidence." },
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          { q: "Do I need both web and mobile apps?", a: "Not always. Many products can start on the web. Native iOS and Android apps make sense when customers use the product often or need device features." },
          { q: "What happens after launch?", a: "Every application needs ongoing maintenance, including security updates, bug fixes, and improvements. It should be planned from the beginning." },
        ],
      },
    ],
  },
  {
    slug: "business-websites",
    kicker: "Websites",
    title: "What should a business website include?",
    dek: "The essential elements of a website that earns trust and turns visitors into enquiries.",
    readMinutes: 3,
    relatedServiceSlug: "websites",
    body: [
      {
        type: "prose",
        paras: [
          "A business website should quickly explain what you do, who you serve, and what a visitor should do next. Visual design matters, but clarity, speed, and credibility usually determine whether someone gets in touch.",
          "Most visitors arrive on a phone, so a site should be designed for mobile first and tested on real screen sizes.",
        ],
      },
      {
        type: "keypoints",
        title: "The essentials",
        items: [
          "A clear statement of what you offer and who it is for",
          "Real examples of your work and genuine client feedback",
          "An obvious next step, such as a contact form or booking link",
          "Fast loading, accessible design, and a good mobile experience",
          "Page titles and descriptions that help search engines understand each page",
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          { q: "When is a website more than a website?", a: "When visitors need accounts, listings, payments, or dashboards, the project becomes an online platform and needs a database and ongoing maintenance." },
          { q: "How can I tell whether my website is working?", a: "Use privacy-friendly analytics to see where visitors come from, and track how many become enquiries." },
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
