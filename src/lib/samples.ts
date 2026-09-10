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
  /** Live view-only demo link, when available. */
  demoHref: string | null
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
    demoHref: null,
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
    demoHref: null,
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
    demoHref: null,
  },
]

export function sampleById(id: string): Sample | undefined {
  return samples.find((s) => s.id === id)
}
