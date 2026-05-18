import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

export default function ComingSoonCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col opacity-60 bg-neutral-50 border-neutral-100 border-dashed">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl grayscale">{product.icon}</span>
            <div>
              <CardTitle className="text-lg font-semibold text-neutral-400">
                {product.name}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400 mt-0.5">
                {product.tagline}
              </CardDescription>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 bg-neutral-100 text-neutral-400 border-neutral-200 text-xs font-medium"
          >
            Coming Soon
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-neutral-400 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent border-t border-neutral-100 pt-4">
        <Button
          disabled
          variant="outline"
          size="sm"
          className="w-full rounded-lg border-neutral-200 text-neutral-300 cursor-not-allowed"
        >
          Stay Tuned
        </Button>
      </CardFooter>
    </Card>
  )
}
