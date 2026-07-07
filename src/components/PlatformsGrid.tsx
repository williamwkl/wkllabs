import { products } from "@/lib/products"
import PlatformCard from "./PlatformCard"
import ComingSoonCard from "./ComingSoonCard"
import FadeIn from "./FadeIn"

export default function PlatformsGrid() {
  const live = products.filter((p) => p.status === "live")
  const coming = products.filter((p) => p.status === "coming-soon")
  const all = [...live, ...coming]

  return (
    <section id="platforms" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tools we&rsquo;ve shipped
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto text-base sm:text-lg">
            Focused software solving real problems for real businesses.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {all.map((product, i) => (
            <FadeIn key={product.id} delay={i * 100}>
              {product.status === "live" ? (
                <PlatformCard product={product} />
              ) : (
                <ComingSoonCard product={product} />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
