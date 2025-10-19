const steps = [
  {
    number: "01",
    title: "Open & Hang",
    description: "Tear open the pouch and hang the drip bag over your favorite mug.",
  },
  {
    number: "02",
    title: "Pour Hot Water",
    description: "Slowly pour 200ml of hot water (92-94°C) over the grounds.",
  },
  {
    number: "03",
    title: "Enjoy",
    description: "Wait 2-3 minutes for the perfect brew, then savor your coffee.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">Brewing Made Simple</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Three easy steps to specialty coffee perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-6">
                <span className="text-6xl font-bold text-accent/20">{step.number}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
