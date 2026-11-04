export interface ServiceProof {
  kicker: string
  title: string
  description: string
  /** Screenshot of the work; omitted when no shareable image exists. */
  image?: { src: string; alt: string; width: number; height: number; note?: string }
  href?: string
  hrefLabel?: string
}

export interface Service {
  slug: string
  index: string
  name: string
  summary: string
  bullets: string[]
  proof: ServiceProof
}

export const services: Service[] = [
  {
    slug: "apps",
    index: "01",
    name: "Apps",
    summary: "Web and mobile apps that give your customers and team one place to get things done.",
    bullets: ["iOS, Android, and web", "Customer accounts and admin dashboards", "Built, launched, and maintained"],
    proof: {
      kicker: "Our product",
      title: "Nabbee",
      description: "Online booking for service businesses, with a web dashboard and iOS and Android apps.",
      image: {
        src: "/products/nabbee.webp",
        alt: "Nabbee homepage with the headline Your business, fully booked",
        width: 1120,
        height: 700,
      },
      href: "https://nabbee.app",
      hrefLabel: "nabbee.app",
    },
  },
  {
    slug: "websites",
    index: "02",
    name: "Websites",
    summary: "Fast business websites and online platforms, from a company site to a full marketplace.",
    bullets: ["Designed for phones first", "Search-friendly pages", "Accounts, listings, and databases when you need them"],
    proof: {
      kicker: "Our product",
      title: "Spell Collector",
      description: "A live trading-card marketplace built with Next.js, TypeScript, and PostgreSQL.",
      image: {
        src: "/products/spellcollector.webp",
        alt: "Spell Collector marketplace homepage with the headline Where collectors buy and sell",
        width: 1120,
        height: 700,
      },
      href: "https://spellcollector.com",
      hrefLabel: "spellcollector.com",
    },
  },
  {
    slug: "spreadsheet-workflow-automation",
    index: "03",
    name: "Google Apps Script & Automation",
    summary: "Hand repetitive spreadsheet work to a script that runs on a schedule or at the click of a button.",
    bullets: ["Scheduled imports and auto-filled reports", "Emails, PDFs, and sheet-to-sheet sync", "Runs in your own account"],
    proof: {
      kicker: "Client project",
      title: "Dispatch and audit workbooks",
      description:
        "For a facilities services company: sorts weekly work orders by state and flags overdue jobs. The client came back for more automation work.",
    },
  },
  {
    slug: "automated-reporting-dashboards",
    index: "04",
    name: "Reporting Dashboards",
    summary: "See the numbers that matter in one Google Sheets or Excel dashboard that updates on its own.",
    bullets: ["Combines reports, analytics, and listing data", "Flags numbers that don't add up", "Comes with a short guide for your team"],
    proof: {
      kicker: "Client project",
      title: "Property performance dashboard",
      description:
        "For a real estate investment firm: imports weekly property reports plus website and Google listing data on a schedule.",
      image: {
        src: "/samples/property-dashboard.png",
        alt: "Property performance dashboard showing occupancy, leased percent, leads and delinquency",
        width: 1220,
        height: 1180,
        note: "Shown with demonstration data",
      },
    },
  },
]

export const reviews = [
  {
    quote: "He created an amazing dashboard and made all the changes we asked for.",
    source: "Client, real estate dashboard project",
  },
  {
    quote: "He built a few automations that helped streamline our processes and improve our overall workflow.",
    source: "Client, Excel automation project",
  },
]

export const upworkProfileUrl = "https://www.upwork.com/freelancers/~01961c54d09ec1757d"
