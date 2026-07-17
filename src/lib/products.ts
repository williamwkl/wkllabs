export interface Product {
  id: string
  index: string
  kicker: string
  name: string
  description: string
  href: string
  hrefLabel: string
  accentClass: string
}

export const products: Product[] = [
  {
    id: "nabbee",
    index: "01",
    kicker: "Booking SaaS",
    name: "Nabbee",
    description:
      "Appointment scheduling, payments, and client management for service businesses in the US and the Philippines.",
    href: "https://nabbee.app",
    hrefLabel: "nabbee.app",
    accentClass: "text-accent-nabbee",
  },
  {
    id: "spellcollector",
    index: "02",
    kicker: "Marketplace",
    name: "Spell Collector",
    description:
      "A trading-card marketplace where collectors buy, sell, and track their collections.",
    href: "https://spellcollector.com",
    hrefLabel: "spellcollector.com",
    accentClass: "text-accent-spell",
  },
]
