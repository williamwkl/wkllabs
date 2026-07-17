import { ArrowUpRight } from "lucide-react"
import FadeIn from "./FadeIn"
import { products } from "@/lib/products"

export default function ProductList() {
  return (
    <section id="products" className="mx-auto max-w-4xl px-5 pb-24 sm:px-8 sm:pb-32">
      <div className="flex flex-col gap-5">
        {products.map((product, i) => (
          <FadeIn key={product.id} delay={i * 100}>
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid items-center gap-6 rounded-xl border border-border bg-white/[0.02] p-6 transition-colors hover:border-border-strong sm:grid-cols-[1fr_auto] sm:p-9"
            >
              <div>
                <div
                  className={`mb-2.5 font-mono text-xs tracking-[0.1em] uppercase ${product.accentClass}`}
                >
                  {product.index} / {product.kicker}
                </div>
                <h2 className="text-[1.7rem] font-semibold tracking-tight">
                  {product.name}
                </h2>
                <p className="mt-2 max-w-xl text-muted-foreground">
                  {product.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start whitespace-nowrap rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors group-hover:border-ring sm:self-center">
                {product.hrefLabel}
                <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
