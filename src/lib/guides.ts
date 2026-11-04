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
          "An automated reporting dashboard is a single view that consolidates your data, standardizes it, and updates on a set schedule. Rather than copying figures from your systems into the same report each week, your team can rely on a dashboard that stays current.",
          "It runs on Google's or Microsoft's servers on a schedule you choose, inside the account you already have. It does not depend on your computer being on and requires no additional software or separate subscription.",
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
          { h: "Marketing & web", p: "Sessions, conversions, channels and top landing pages, updated automatically." },
          { h: "Finance & ops", p: "Cash, margins, aging and any operational number you review on a cycle." },
        ],
      },
      {
        type: "steps",
        title: "How it comes together",
        items: [
          { h: "Data comes in", p: "Your numbers reach the sheet by import, form, export, or manual entry." },
          { h: "Data is prepared", p: "On your schedule, the data is cleaned, combined, and organized." },
          { h: "The dashboard updates", p: "The dashboard refreshes automatically, so current figures are always available." },
          { h: "Exceptions are flagged", p: "If a value appears incorrect, the system sends an email alert." },
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
          "Google Apps Script is an automation platform included with Google Sheets and other Google Workspace applications. It runs saved instructions such as consolidating data, updating a summary, or sending an email.",
          "Scripts run on Google's servers on a schedule you choose, inside your existing Google account. They do not depend on your computer being on and require no additional software or separate subscription.",
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
          { h: "Clean and de-duplicate", p: "Correct inconsistent formatting, remove duplicate rows, and standardize names and dates." },
          { h: "Scheduled weekly reports", p: "Update a dashboard or summary automatically on a set schedule." },
          { h: "Exception alerts", p: "Receive an email when a number crosses a set threshold, such as low stock or an overdue payment." },
          { h: "Form-to-sheet workflows", p: "Turn form responses into organized records: log the entry, send a confirmation, file it." },
          { h: "Send routine emails", p: "Email a recurring report or reminder to the right people automatically, straight from the sheet." },
        ],
      },
      {
        type: "steps",
        title: "How it works",
        items: [
          { h: "Data comes in", p: "Your numbers reach the sheet by import, form, export, or manual entry." },
          { h: "Data is prepared", p: "On your schedule, Apps Script cleans, combines, and organizes the data." },
          { h: "Reports update", p: "Your dashboard or report refreshes automatically, so current figures are always available." },
          { h: "Exceptions are flagged", p: "If a value appears incorrect, the script sends an email alert." },
        ],
      },
      {
        type: "faq",
        title: "Is it free? Do I need anything?",
        items: [
          { q: "Is there an additional cost?", a: "No. Apps Script is included with your Google account at no extra charge. There is no separate license or subscription to switch it on." },
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
  {
    slug: "custom-software-cost",
    kicker: "Applications",
    title: "What determines the cost of custom software?",
    dek: "The factors that shape a software budget, and how to get a quote you can compare with confidence.",
    readMinutes: 3,
    relatedServiceSlug: "apps",
    body: [
      {
        type: "prose",
        paras: [
          "Custom software has no standard price because two projects with the same name can differ greatly in scope. A reliable estimate depends on what the software must do, who will use it, and what it must connect to.",
          "Before requesting a quote, define the problem and the smallest first version that would solve it. A focused first release is usually easier to estimate and quicker to test with real users.",
        ],
      },
      {
        type: "keypoints",
        title: "What affects the budget most",
        items: [
          "The number of user types, screens, and business rules",
          "Web only, or web plus native iOS and Android apps",
          "Payments, accounts, and integrations with other systems",
          "Security, reporting, and data migration requirements",
          "Maintenance, hosting, and support after launch",
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          { q: "How can I compare quotes?", a: "Check that each quote covers the same features, testing, launch support, ownership terms, and ongoing costs. The lowest figure may simply exclude more." },
          { q: "How can I reduce the initial cost?", a: "Start with the features that solve the main problem, and add others after real users have tried the first version." },
        ],
      },
    ],
  },
  {
    slug: "google-sheets-vs-custom-software",
    kicker: "Applications",
    title: "Google Sheets or custom software: when should you switch?",
    dek: "How to tell whether to improve your spreadsheets or move to a dedicated application.",
    readMinutes: 3,
    relatedServiceSlug: "apps",
    body: [
      {
        type: "prose",
        paras: [
          "Spreadsheets are often the right tool. They are familiar, flexible, and inexpensive, and automation can remove much of the manual work. Moving to custom software too early can add cost without solving a real problem.",
          "A dedicated application becomes more attractive when a spreadsheet can no longer protect data, control access, or support how people need to work.",
        ],
      },
      {
        type: "cards",
        title: "Compare the options",
        items: [
          { h: "Keep and automate your spreadsheet", p: "A small team uses it, the process is stable, and the main problem is repetitive reporting or data entry." },
          { h: "Move to custom software", p: "Many people edit at once, access must vary by role, customers need to log in, or errors have become costly." },
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          { q: "Can I keep my spreadsheet while moving?", a: "Often, yes. A spreadsheet can remain in use for reporting or during a gradual transition while the new system takes over the core process." },
        ],
      },
    ],
  },
  {
    slug: "booking-software-vs-custom",
    kicker: "Applications",
    title: "Off-the-shelf booking software or a custom build?",
    dek: "How service businesses can choose between an existing booking product and a custom system.",
    readMinutes: 3,
    relatedServiceSlug: "apps",
    body: [
      {
        type: "prose",
        paras: [
          "For most service businesses, existing booking software is the practical first choice because it is ready to use and maintained by its provider. WKL Labs operates one such product, Nabbee, so we have an interest in this category, and we also build custom applications.",
          "A custom build makes sense when your booking process is central to how you compete and existing products would force costly compromises.",
        ],
      },
      {
        type: "cards",
        title: "Which fits your business?",
        items: [
          { h: "Choose off-the-shelf", p: "You offer standard appointments and deposits, and you want to start quickly with predictable running costs." },
          { h: "Choose a custom build", p: "You have unusual scheduling rules, multiple connected systems, or a customer experience existing products cannot support." },
        ],
      },
      {
        type: "keypoints",
        title: "What to check first",
        items: [
          "Supported payment methods and deposit rules in your market",
          "Staff, location, and resource scheduling",
          "Who owns and can export your customer data",
          "The total cost over several years, including maintenance",
        ],
      },
    ],
  },
  {
    slug: "automate-weekly-property-reports",
    kicker: "Reporting",
    title: "How to automate weekly property reports",
    dek: "A practical approach to combining property-management exports, web data, and listing data into one report.",
    readMinutes: 3,
    relatedServiceSlug: "automated-reporting-dashboards",
    relatedSampleId: "property-dashboard",
    body: [
      {
        type: "prose",
        paras: [
          "Property teams often rebuild the same weekly report from several sources, such as property-management exports, website analytics, and Google listing data. Automating that process starts with a clear definition of each number, not with the dashboard design.",
          "We used this approach on a dashboard for a real estate investment firm. It imports weekly reports and web and listing data on a schedule, flags figures that do not reconcile, and fills the firm's weekly statistics files in its own Google account.",
        ],
      },
      {
        type: "steps",
        title: "A practical approach",
        items: [
          { h: "Define the metrics", p: "Agree how each figure, such as occupancy or leased percentage, is calculated and which source is authoritative." },
          { h: "Standardize the inputs", p: "Identify columns by name and account for changes in property names, dates, and row counts." },
          { h: "Add validation", p: "Flag missing files and values that do not reconcile before anyone relies on the report." },
          { h: "Schedule and document", p: "Run the process automatically and document how your team can maintain it." },
        ],
      },
      {
        type: "faq",
        title: "Common questions",
        items: [
          { q: "Do I need to replace my property-management system?", a: "No. This approach works alongside your existing system by using the reports it already produces." },
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
