import { MetadataRoute } from "next"
import { guides } from "@/lib/guides"

// Update when page content changes materially.
const lastModified = new Date("2026-11-06")

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://wkllabs.com", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://wkllabs.com/services", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://wkllabs.com/about", lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: "https://wkllabs.com/case-studies/nabbee", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://wkllabs.com/guides", lastModified, changeFrequency: "monthly", priority: 0.6 },
    ...guides.map((g) => ({
      url: `https://wkllabs.com/guides/${g.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: "https://wkllabs.com/contact", lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: "https://wkllabs.com/privacy", lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: "https://wkllabs.com/terms", lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: "https://wkllabs.com/cat-nap-cafe/privacy", lastModified, changeFrequency: "yearly", priority: 0.1 },
  ]
}
