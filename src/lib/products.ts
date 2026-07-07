import { Calendar, UtensilsCrossed, Layers, Sparkles, type LucideIcon } from "lucide-react"

export type ProductStatus = "live" | "coming-soon"

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  status: ProductStatus
  icon: LucideIcon
}

export const products: Product[] = [
  {
    id: "bookit",
    name: "BookIt",
    tagline: "Appointments & Booking",
    description:
      "Scheduling for service businesses. Clients book in seconds; you run everything from one clean dashboard.",
    href: "#",
    status: "live",
    icon: Calendar,
  },
  {
    id: "menuqr",
    name: "MenuQR",
    tagline: "Digital Menus for Restaurants",
    description:
      "Turn any table into a digital menu. Guests scan, browse, and order — no app, no download.",
    href: "#",
    status: "live",
    icon: UtensilsCrossed,
  },
  {
    id: "spellcollector",
    name: "Spell Collector",
    tagline: "Trading Card Marketplace",
    description:
      "Buy, sell, and organize trading cards in one place — a marketplace and collection manager for collectors.",
    href: "https://spellcollector.com",
    status: "live",
    icon: Layers,
  },
  {
    id: "future-1",
    name: "In the Lab",
    tagline: "Something new is coming",
    description:
      "We're building the next tool for modern businesses. Join the waitlist to hear it first.",
    href: "#support",
    status: "coming-soon",
    icon: Sparkles,
  },
]
