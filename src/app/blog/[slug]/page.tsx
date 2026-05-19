import { getPostBySlug, getPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowLeft, Clock, Tag, ExternalLink } from "lucide-react"

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const posts = await getPosts(50)
    return posts.map((p) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post = null
  try {
    post = await getPostBySlug(slug)
  } catch {
    notFound()
  }

  if (!post) notFound()

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-6">
            <span className="flex items-center gap-1">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {formatDate(post.published_at)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 pb-10 border-b border-slate-800">
            {post.summary}
          </p>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").filter(Boolean).map((para, i) => (
              <p key={i} className="text-slate-300 leading-relaxed mb-6 text-base">
                {para}
              </p>
            ))}
          </div>

          {post.source_url && (
            <div className="mt-12 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-600 mb-2">Original source</p>
              <a
                href={post.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                {post.source_name} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
