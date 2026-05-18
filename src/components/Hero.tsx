import FadeIn from "./FadeIn"

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
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[400px] opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">
            WKL Labs
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Tools built for{" "}
            <span className="text-slate-500">modern</span>{" "}
            businesses
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
            We craft focused, practical software products that help businesses
            operate smarter — from bookings to digital menus and beyond.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#platforms"
              className="inline-flex items-center justify-center rounded-full px-8 h-11 text-sm font-medium bg-white text-slate-900 hover:bg-slate-200 transition-colors"
            >
              Explore Platforms
            </a>
            <a
              href="#support"
              className="inline-flex items-center justify-center rounded-full px-8 h-11 text-sm font-medium border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              Get in Touch
            </a>
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
