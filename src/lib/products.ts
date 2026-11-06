export interface Product {
  id: string
  index: string
  kicker: string
  name: string
  description: string
  /** Omitted until there is a public page to link to; hrefLabel then shows as a status. */
  href?: string
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
  {
    id: "catnapcafe",
    index: "03",
    kicker: "iPhone game",
    name: "Cat Nap Café",
    description:
      "A cozy logic puzzle where you find every sleepy cat a spot, then spend your coins decorating a café for them.",
    hrefLabel: "Coming soon to the App Store",
    accentClass: "text-accent-catnap",
    image: "/products/catnapcafe.webp",
    imageAlt: "Three Cat Nap Café screens: a daily puzzle grid, a café full of sleeping cats, and the cat book",
  },
]
