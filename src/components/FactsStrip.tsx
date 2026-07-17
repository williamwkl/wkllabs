const facts = [
  {
    title: "Built end to end",
    body: "Design, code, and support handled by the same small team.",
  },
  {
    title: "Two markets",
    body: "Products live in the US and the Philippines, built for each.",
  },
  {
    title: "Here to stay",
    body: "Independent and profitable minded. No exit-chasing.",
  },
]

export default function FactsStrip() {
  return (
    <section id="about" className="border-y border-border bg-[#0f0f12]">
      <div className="mx-auto grid max-w-4xl gap-8 px-5 py-14 sm:grid-cols-3 sm:px-8">
        {facts.map((fact) => (
          <div key={fact.title}>
            <h3 className="mb-2 font-mono text-xs tracking-[0.1em] text-subtle uppercase">
              {fact.title}
            </h3>
            <p className="text-sm text-muted-foreground">{fact.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
