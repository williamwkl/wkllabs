export type ProductStatus = "live" | "coming-soon"

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  status: ProductStatus
  icon: string
}

export const products: Product[] = [
  {
    id: "bookit",
    name: "BookIt",
    tagline: "Appointment & Booking Platform",
    description:
      "Streamline scheduling for any service business. Clients book in seconds, you manage everything from one clean dashboard.",
    href: "#",
    status: "live",
    icon: "📅",
  },
  {
    id: "menuqr",
    name: "MenuQR",
    tagline: "Digital Menu for Restaurants",
    description:
      "Turn any table into a digital menu experience. Scan, browse, and order — no app download required.",
    href: "#",
    status: "live",
    icon: "🍽️",
  },
  {
    id: "future-1",
    name: "Coming Soon",
    tagline: "Something new is brewing",
    description:
      "We're building the next tool for modern businesses. Stay tuned for what's next from WKL Labs.",
    href: "#",
    status: "coming-soon",
    icon: "🚀",
  },
]
