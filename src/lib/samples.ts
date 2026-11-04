export interface Sample {
  id: string
  index: string
  kicker: string
  title: string
  image: string
  alt: string
  problem: string
  built: string
  result: string
}

export const samples: Sample[] = [
  {
    id: "property-dashboard",
    index: "01",
    kicker: "Property management",
    title: "Property performance dashboard",
    image: "/samples/property-dashboard.png",
    alt: "Property performance dashboard showing occupancy, leased percent, leads and delinquency across a portfolio",
    problem:
      "A multifamily operator rebuilt the same weekly portfolio report by hand from Yardi exports and listing data.",
    built:
      "One dashboard that consolidates occupancy, leased percent, new leads and delinquency across the portfolio, with a same-store comparison and local listing engagement, refreshed on a schedule.",
    result: "The weekly report now assembles itself; the numbers are ready before the Monday review.",
  },
  {
    id: "sales-dashboard",
    index: "02",
    kicker: "Sales",
    title: "Sales KPI dashboard",
    image: "/samples/sales-dashboard.png",
    alt: "Sales KPI dashboard showing revenue versus target, pipeline and rep attainment",
    problem:
      "Revenue, pipeline and rep attainment lived in separate tabs, so the full picture meant flipping between files.",
    built:
      "A single KPI view — revenue vs target, pipeline by stage, and rep attainment — pulled together and kept current automatically.",
    result: "One screen answers 'how are we tracking?' without anyone rebuilding it.",
  },
  {
    id: "marketing-dashboard",
    index: "03",
    kicker: "Marketing",
    title: "Marketing & web analytics",
    image: "/samples/marketing-dashboard.png",
    alt: "Marketing and web analytics dashboard showing sessions, conversions, channels and landing pages",
    problem:
      "Web and channel numbers were exported and re-pasted into a monthly deck every reporting cycle.",
    built:
      "An analytics dashboard covering sessions, conversions, channels and top landing pages, refreshed on its own schedule.",
    result: "The monthly marketing report stopped being a manual rebuild.",
  },
]

export function sampleById(id: string): Sample | undefined {
  return samples.find((s) => s.id === id)
}

export interface CaseStudy {
  id: string
  kicker: string
  title: string
  problem: string
  built: string
  result: string
  image?: { src: string; alt: string; width: number; height: number; note?: string }
  href?: string
  hrefLabel?: string
}

export const productStudies: CaseStudy[] = [
  {
    id: "nabbee",
    kicker: "Booking app",
    title: "Nabbee",
    problem: "Salons, barbers, spas, and other service businesses lose time and money to back-and-forth booking and no-shows.",
    built: "Online booking with upfront deposits, a web dashboard for owners, and iOS and Android apps.",
    result: "Live and open to businesses, with clients able to book 24/7.",
    image: {
      src: "/products/nabbee.webp",
      alt: "Nabbee homepage with the headline Your business, fully booked",
      width: 1120,
      height: 700,
    },
    href: "https://nabbee.app",
    hrefLabel: "nabbee.app",
  },
  {
    id: "spell-collector",
    kicker: "Online marketplace",
    title: "Spell Collector",
    problem: "Trading card collectors need one trusted place to find cards from real shops and keep track of what they own.",
    built: "A marketplace for singles, sealed, and graded cards from verified shops, plus collection tracking, using Next.js, TypeScript, and PostgreSQL.",
    result: "Live in production, with listings from real shops.",
    image: {
      src: "/products/spellcollector.webp",
      alt: "Spell Collector marketplace homepage with the headline Where collectors buy and sell",
      width: 1120,
      height: 700,
    },
    href: "https://spellcollector.com",
    hrefLabel: "spellcollector.com",
  },
]

export const clientStudies: CaseStudy[] = [
  {
    id: "property-dashboard",
    kicker: "Reporting dashboard · Real estate investment firm",
    title: "Property performance dashboard",
    problem: "Weekly property reporting meant pulling numbers together by hand from several sources.",
    built: "A dashboard that imports weekly property-management reports plus website and Google listing data, flags anything that doesn't add up, and fills the weekly statistics files.",
    result: "It runs on a schedule in the client's own Google account. The client rated the project 5 stars.",
    image: {
      src: "/samples/property-dashboard.png",
      alt: "Property performance dashboard showing occupancy, leased percent, leads and delinquency",
      width: 1220,
      height: 1180,
      note: "Shown with demonstration data to protect client information",
    },
  },
  {
    id: "dispatch-workbooks",
    kicker: "Automation · Facilities services company",
    title: "Dispatch and audit workbooks",
    problem: "Weekly work orders had to be sorted by state and checked for overdue jobs.",
    built: "A workbook system that sorts each week's work orders by state and flags overdue jobs automatically.",
    result: "The client rated the project 5 stars and hired us again for ongoing automation work.",
  },
]
