import FadeIn from "./FadeIn"
import AppButton from "./ui/AppButton"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #070d1a 0%, #070d1a 60%), radial-gradient(circle at 50% 0%, #0f1e3d 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#1e3a5f 1px, transparent 1px), linear-gradient(90deg, #1e3a5f 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[400px] opacity-15"
        style={{
          background: "radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">
            WKL Labs · Product Studio
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            We build software that{" "}
            <span className="text-blue-400">works.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            A small studio crafting focused tools for modern businesses —
            booking, menus, marketplaces, and more.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <AppButton href="#platforms" variant="primary">
              Explore products
            </AppButton>
            <AppButton href="#support" variant="secondary">
              Get in touch
            </AppButton>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-600">
            <span>3 products live</span>
            <span className="text-slate-700">·</span>
            <span>Built in the Philippines</span>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-slate-700" />
      </div>
    </section>
  )
}
