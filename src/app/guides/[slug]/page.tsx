import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"
import { notFound } from "next/navigation"
import GuideLayout from "@/components/GuideLayout"
import { guides, guideBySlug } from "@/lib/guides"

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = guideBySlug(slug)
  if (!guide) return {}
  return pageMetadata({
    title: `${guide.title} | WKL Labs`,
    description: guide.dek,
    path: `/guides/${guide.slug}`,
    type: "article",
  })
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = guideBySlug(slug)
  if (!guide) notFound()
  return <GuideLayout guide={guide} />
}
