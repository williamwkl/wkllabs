import pool from "./db"

export interface BlogPost {
  id: number
  title: string
  slug: string
  summary: string
  content: string
  source_url: string
  source_name: string
  category: string
  published_at: string
  created_at: string
}

export async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      summary TEXT NOT NULL,
      content TEXT NOT NULL,
      source_url TEXT,
      source_name TEXT,
      category TEXT DEFAULT 'Technology',
      published_at TIMESTAMPTZ DEFAULT NOW(),
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `)
}

export async function getPosts(limit = 20, offset = 0): Promise<BlogPost[]> {
  const { rows } = await pool.query(
    `SELECT * FROM blog_posts ORDER BY published_at DESC LIMIT $1 OFFSET $2`,
    [limit, offset]
  )
  return rows
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { rows } = await pool.query(
    `SELECT * FROM blog_posts WHERE slug = $1`,
    [slug]
  )
  return rows[0] || null
}

export async function getPostCount(): Promise<number> {
  const { rows } = await pool.query(`SELECT COUNT(*) FROM blog_posts`)
  return parseInt(rows[0].count)
}
