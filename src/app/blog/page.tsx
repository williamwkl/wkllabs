import { getPosts, getPostCount, type BlogPost } from "@/lib/blog"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowRight, Clock, Tag } from "lucide-react"

export const revalidate = 3600

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  })
}

export default async function BlogPage() {
  let posts: BlogPost[] = []
  let count = 0
  try {
    posts = await getPosts(20)
    count = await getPostCount()
  } catch {
    // DB not yet set up
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              WKL Labs Blog
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Tech News & Insights
            </h1>
            <p className="mt-4 text-slate-400 text-lg">
              Daily tech news curated for modern businesses — summarized and explained.
            </p>
            {count > 0 && (
              <p className="mt-2 text-sm text-slate-600">{count} articles published</p>
            )}
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <div className="text-center py-24 text-slate-600">
              <p className="text-lg">No posts yet — check back tomorrow.</p>
              <p className="text-sm mt-2">Posts are generated daily automatically.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-slate-800">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group py-8 flex flex-col gap-3 hover:bg-slate-900/50 -mx-4 px-4 rounded-xl transition-colors"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatDate(post.published_at)}
                    </span>
                    <span className="text-slate-700">via {post.source_name}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{post.summary}</p>
                  <span className="flex items-center gap-1 text-sm text-slate-500 group-hover:text-blue-400 transition-colors">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
