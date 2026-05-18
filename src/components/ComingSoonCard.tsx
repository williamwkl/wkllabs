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
    <Card className="flex flex-col opacity-50 bg-slate-900 border-slate-800 border-dashed">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
              <product.icon className="h-5 w-5 text-slate-600" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-slate-500">
                {product.name}
              </CardTitle>
              <CardDescription className="text-xs text-slate-600 mt-0.5">
                {product.tagline}
              </CardDescription>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 bg-slate-800 text-slate-500 border-slate-700 text-xs font-medium"
          >
            Coming Soon
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-slate-600 leading-relaxed">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="bg-transparent border-t border-slate-800 pt-4">
        <Button
          disabled
          variant="outline"
          size="sm"
          className="w-full rounded-lg border-slate-700 text-slate-600 cursor-not-allowed"
        >
          Stay Tuned
        </Button>
      </CardFooter>
    </Card>
  )
}
