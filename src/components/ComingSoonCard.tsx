import { Card } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"

export default function ComingSoonCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col p-6 sm:p-7 opacity-60 bg-slate-900 border-slate-800 border-dashed">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/60">
          <product.icon className="h-5 w-5 text-slate-500" />
        </div>
        <span className="text-xs font-medium text-slate-500">Coming soon</span>
      </div>

      <div className="mt-5 flex-1">
        <h3 className="text-lg font-semibold text-slate-400">{product.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-slate-600">
          {product.tagline}
        </p>
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          {product.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800">
        <a
          href={product.href}
          className="group inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          Join waitlist
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Card>
  )
}
