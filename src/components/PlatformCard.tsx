import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"


export default function PlatformCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col transition-all duration-200 hover:shadow-lg hover:shadow-black/30 hover:-translate-y-0.5 bg-neutral-900 border-neutral-800">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
              <product.icon className="h-5 w-5 text-neutral-300" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-white">
                {product.name}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-500 mt-0.5">
                {product.tagline}
              </CardDescription>
            </div>
          </div>
          <Badge className="shrink-0 bg-emerald-950 text-emerald-400 border-emerald-800 text-xs font-medium">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-neutral-400 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent border-t border-neutral-800 pt-4">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors group"
        >
          Visit Platform
          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </CardFooter>
    </Card>
  )
}
