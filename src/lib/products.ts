export interface Product {
  id: string
  index: string
  kicker: string
  name: string
  description: string
  href: string
  hrefLabel: string
  accentClass: string
  image: string
  imageAlt: string
}

export const products: Product[] = [
  {
    id: "nabbee",
    index: "01",
    kicker: "Booking SaaS",
    name: "Nabbee",
    description:
      "Online booking, deposits, and customer management for service businesses in the US and the Philippines.",
    href: "https://nabbee.app",
    hrefLabel: "nabbee.app",
    accentClass: "text-accent-nabbee",
    image: "/products/nabbee.webp",
    imageAlt: "Nabbee homepage with the headline Your business, fully booked, and photos of the service businesses it supports",
  },
  {
    id: "spellcollector",
    index: "02",
    kicker: "Marketplace",
    name: "Spell Collector",
    description:
      "A Magic: The Gathering and Pokémon marketplace where collectors compare prices, buy from local shops, and manage their collections.",
    href: "https://spellcollector.com",
    hrefLabel: "spellcollector.com",
    accentClass: "text-accent-spell",
    image: "/products/spellcollector.webp",
    imageAlt: "Spell Collector marketplace homepage with the headline Where collectors buy and sell, a card search, and a fan of trading cards",
  },
]
