import { Star } from "lucide-react"

export default function ReviewCard({ quote, source }: { quote: string; source: string }) {
  return (
    <figure className="flex flex-col rounded-xl border border-border bg-card p-6">
      <div role="img" aria-label="5 out of 5 stars" className="mb-4 flex gap-1 text-accent-nabbee">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="leading-relaxed text-foreground">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-auto pt-4 text-sm text-muted-foreground">{source}</figcaption>
    </figure>
  )
}
