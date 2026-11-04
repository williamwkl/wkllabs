import { ArrowUpRight } from "lucide-react"
import ReviewCard from "./ReviewCard"
import { reviews, upworkProfileUrl } from "@/lib/services"

export default function HomeReview() {
  return (
    <section className="mx-auto w-full max-w-4xl px-5 pb-20 sm:px-8 sm:pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Client feedback</h2>
      <ReviewCard {...reviews[0]} />
      <a
        href={upworkProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-mono text-[13px] text-muted-foreground transition-colors hover:text-foreground"
      >
        5.0 from 3 client reviews on Upwork <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  )
}
