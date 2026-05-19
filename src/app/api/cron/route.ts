import { NextResponse } from "next/server"
import Anthropic from "@anthropic-ai/sdk"
import Parser from "rss-parser"
import pool from "@/lib/db"
import { ensureTable } from "@/lib/blog"

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
const parser = new Parser()

const RSS_FEEDS = [
  { url: "https://feeds.feedburner.com/TechCrunch", name: "TechCrunch" },
  { url: "https://www.theverge.com/rss/index.xml", name: "The Verge" },
  { url: "https://feeds.arstechnica.com/arstechnica/index", name: "Ars Technica" },
  { url: "https://hnrss.org/frontpage", name: "Hacker News" },
]

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80)
    + "-" + Date.now()
}

export async function GET(req: Request) {
  const secret = new URL(req.url).searchParams.get("secret")
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    await ensureTable()

    // Fetch from all RSS feeds
    const allItems: { title: string; link: string; content: string; source: string }[] = []

    for (const feed of RSS_FEEDS) {
      try {
        const parsed = await parser.parseURL(feed.url)
        const items = parsed.items.slice(0, 3).map((item) => ({
          title: item.title || "",
          link: item.link || "",
          content: item.contentSnippet || item.summary || item.content || "",
          source: feed.name,
        }))
        allItems.push(...items)
      } catch {
        console.error(`Failed to fetch ${feed.name}`)
      }
    }

    if (allItems.length === 0) {
      return NextResponse.json({ error: "No items fetched" }, { status: 500 })
    }

    // Pick top 3 most interesting items using Claude
    const selectionPrompt = `You are a tech editor for WKL Labs, a software company that builds business tools (booking systems, digital menus, etc.).

Here are today's tech news headlines:
${allItems.map((item, i) => `${i + 1}. [${item.source}] ${item.title}`).join("\n")}

Pick the 3 most relevant and interesting stories for small business owners and tech-curious people. Reply with just the numbers, comma-separated (e.g. "1,4,7").`

    const selectionMsg = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 20,
      messages: [{ role: "user", content: selectionPrompt }],
    })

    const selectionText = (selectionMsg.content[0] as { text: string }).text.trim()
    const selectedIndexes = selectionText.split(",").map((n) => parseInt(n.trim()) - 1).filter((n) => !isNaN(n) && n >= 0 && n < allItems.length)
    const selectedItems = selectedIndexes.map((i) => allItems[i]).slice(0, 3)

    const created: string[] = []

    for (const item of selectedItems) {
      const prompt = `You are a friendly tech writer for WKL Labs, a software company building tools for modern businesses.

Write a short, engaging blog post about this tech news story for small business owners and entrepreneurs. Keep it practical and relevant to running a business.

News: ${item.title}
Source: ${item.source}
Details: ${item.content}

Format your response as JSON with these fields:
- title: an engaging headline (keep it close to the original but more engaging)
- summary: 1-2 sentence summary for the blog listing page
- content: 3-4 paragraphs of blog post content in plain text (no markdown)
- category: one of: AI & Automation, Apps & Tools, Business Tech, Security, Industry News`

      const msg = await anthropic.messages.create({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }],
      })

      const text = (msg.content[0] as { text: string }).text
      const jsonMatch = text.match(/\{[\s\S]*\}/)
      if (!jsonMatch) continue

      const post = JSON.parse(jsonMatch[0])
      const slug = slugify(post.title)

      await pool.query(
        `INSERT INTO blog_posts (title, slug, summary, content, source_url, source_name, category)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (slug) DO NOTHING`,
        [post.title, slug, post.summary, post.content, item.link, item.source, post.category]
      )
      created.push(post.title)
    }

    return NextResponse.json({ success: true, created })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
