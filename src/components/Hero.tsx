import FadeIn from "./FadeIn"

export default function Hero() {
  return (
    <section className="px-5 py-24 text-center sm:px-8 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <span className="mb-7 inline-block rounded-full border border-border px-3.5 py-1.5 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
            Independent software studio
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            We build small, serious software.
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Two products, shipped and maintained end to end. No feature bloat,
            no growth theater.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
