import type { AnchorHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary"

interface AppButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary: "bg-white text-slate-900 hover:bg-slate-200",
  secondary:
    "border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white",
}

export default function AppButton({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: AppButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 h-12 text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
