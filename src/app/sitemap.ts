import { MetadataRoute } from "next"
import { guides } from "@/lib/guides"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://wkllabs.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://wkllabs.com/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://wkllabs.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://wkllabs.com/guides", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...guides.map((g) => ({
      url: `https://wkllabs.com/guides/${g.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: "https://wkllabs.com/contact", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: "https://wkllabs.com/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: "https://wkllabs.com/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ]
}
