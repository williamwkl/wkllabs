import { Calendar, Layers, Sparkles, type LucideIcon } from "lucide-react"

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
    id: "nabbee",
    name: "Nabbee",
    tagline: "Booking & Appointments",
    description:
      "Scheduling for service businesses — clients book in seconds, you manage it all from one dashboard. Launching soon.",
    href: "#support",
    status: "coming-soon",
    icon: Calendar,
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
