import { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://wklapp.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://wklapp.com/blog", lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ]
}
