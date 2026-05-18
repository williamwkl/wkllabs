import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/products"

export default function PlatformCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 bg-white border-neutral-100">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{product.icon}</span>
            <div>
              <CardTitle className="text-lg font-semibold text-neutral-900">
                {product.name}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400 mt-0.5">
                {product.tagline}
              </CardDescription>
            </div>
          </div>
          <Badge className="shrink-0 bg-emerald-50 text-emerald-700 border-emerald-100 text-xs font-medium">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-neutral-600 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent border-t border-neutral-50 pt-4">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "w-full rounded-lg border-neutral-200 text-neutral-700 hover:bg-neutral-50 group"
          )}
        >
          Visit Platform
          <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </CardFooter>
    </Card>
  )
}
