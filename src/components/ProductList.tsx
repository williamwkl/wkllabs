import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import FadeIn from "./FadeIn"
import { products } from "@/lib/products"

export default function ProductList() {
  return (
    <section id="products" className="mx-auto scroll-mt-24 max-w-4xl px-5 pb-20 sm:px-8 sm:pb-24">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Our products</h2>
      <div className="flex flex-col gap-5">
        {products.map((product, i) => {
          const Card = product.href ? "a" : "div"
          const link = product.href ? { href: product.href, target: "_blank", rel: "noopener noreferrer" } : {}
          return (
          <FadeIn key={product.id} delay={i * 100}>
            <Card
              {...link}
              className={`group grid items-center gap-6 rounded-xl border border-border bg-white/[0.02] p-5 transition-colors sm:p-6 md:grid-cols-[1fr_1.05fr] md:gap-8 ${product.href ? "hover:border-border-strong" : ""}`}
            >
              <div className="flex h-full flex-col items-start">
                <div
                  className={`mb-2.5 font-mono text-xs tracking-[0.1em] uppercase ${product.accentClass}`}
                >
                  {product.index} / {product.kicker}
                </div>
                <h3 className="text-[1.7rem] font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-2 mb-5 max-w-xl text-muted-foreground">
                  {product.description}
                </p>
                {product.href ? (
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap md:mt-auto rounded-lg border border-border-strong px-4 py-2.5 font-mono text-sm transition-colors group-hover:border-ring">
                    {product.hrefLabel}
                    <ArrowUpRight className="h-4 w-4 opacity-70" aria-hidden="true" />
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-lg border border-dashed border-border-strong px-4 py-2.5 font-mono text-sm text-muted-foreground md:mt-auto">
                    {product.hrefLabel}
                  </span>
                )}
              </div>
              <div className="order-first overflow-hidden rounded-lg border border-border md:order-last">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={1120}
                  height={700}
                  sizes="(min-width: 768px) 440px, calc(100vw - 72px)"
                  className="h-auto w-full"
                />
              </div>
            </Card>
          </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
