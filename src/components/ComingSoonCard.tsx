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
    <Card className="flex flex-col opacity-50 bg-neutral-900 border-neutral-800 border-dashed">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800">
              <product.icon className="h-5 w-5 text-neutral-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-neutral-500">
                {product.name}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-600 mt-0.5">
                {product.tagline}
              </CardDescription>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 bg-neutral-800 text-neutral-500 border-neutral-700 text-xs font-medium"
          >
            Coming Soon
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-neutral-600 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent border-t border-neutral-800 pt-4">
        <Button
          disabled
          variant="outline"
          size="sm"
          className="w-full rounded-lg border-neutral-700 text-neutral-600 cursor-not-allowed"
        >
          Stay Tuned
        </Button>
      </CardFooter>
    </Card>
  )
}
