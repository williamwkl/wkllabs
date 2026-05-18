"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  children: React.ReactNode
  className?: string
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContext = {
  open: null as string | null,
  toggle: (_: string) => {},
}

import { createContext, useContext } from "react"

const Ctx = createContext<{ open: string | null; toggle: (v: string) => void }>({
  open: null,
  toggle: () => {},
})

const ItemCtx = createContext<string>("")

function Accordion({ children, className }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(null)
  const toggle = (v: string) => setOpen((prev) => (prev === v ? null : v))
  return (
    <Ctx.Provider value={{ open, toggle }}>
      <div className={cn("w-full", className)}>{children}</div>
    </Ctx.Provider>
  )
}

function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <ItemCtx.Provider value={value}>
      <div className={cn("border-b border-neutral-800 last:border-0", className)}>
        {children}
      </div>
    </ItemCtx.Provider>
  )
}

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { open, toggle } = useContext(Ctx)
  const value = useContext(ItemCtx)
  const isOpen = open === value
  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left text-sm font-medium text-neutral-300 transition-colors hover:text-white",
        className
      )}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-neutral-600 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
}

function AccordionContent({ children, className }: AccordionContentProps) {
  const { open } = useContext(Ctx)
  const value = useContext(ItemCtx)
  const isOpen = open === value
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 pb-4" : "max-h-0"
      )}
    >
      <div className={cn("text-sm text-neutral-500 leading-relaxed", className)}>
        {children}
      </div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
