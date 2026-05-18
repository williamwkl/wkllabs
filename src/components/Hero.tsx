import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #f9fafb 0%, #ffffff 60%), radial-gradient(circle at 50% 0%, #e5e7eb 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
          WKL Labs
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight mb-6">
          Tools built for{" "}
          <span className="text-neutral-400">modern</span>{" "}
          businesses
        </h1>

        <p className="text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed">
          We craft focused, practical software products that help businesses
          operate smarter — from bookings to digital menus and beyond.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#platforms"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full px-8 bg-neutral-900 text-white hover:bg-neutral-700"
            )}
          >
            Explore Platforms
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-8 border-neutral-200 text-neutral-600 hover:bg-neutral-50"
            )}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-300">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-neutral-200" />
      </div>
    </section>
  )
}
