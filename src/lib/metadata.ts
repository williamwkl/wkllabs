import type { Metadata } from "next"

export const siteTitle = "WKL Labs | Custom software for growing businesses"
export const siteDescription =
  "WKL Labs designs and builds applications, websites, automation, and reporting dashboards, and operates its own products, Nabbee and Spell Collector."

const image = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "WKL Labs: custom software for growing businesses",
}

export function pageMetadata({
  title = siteTitle,
  description = siteDescription,
  path,
  type = "website",
}: {
  title?: string
  description?: string
  path: string
  type?: "website" | "article"
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: "WKL Labs", type, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  }
}
