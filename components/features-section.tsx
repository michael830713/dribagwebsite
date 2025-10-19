import { Zap, Leaf, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Fast & Convenient",
    description: "Enjoy specialty coffee in 2-3 minutes. No equipment, no cleanup, no compromise.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable packaging and nitrogen-flushed bags for maximum freshness with minimal impact.",
  },
  {
    icon: Globe,
    title: "Perfect Anywhere",
    description: "From campus to camping, office to outdoors—great coffee wherever life takes you.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">Why Choose Dribag?</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            We're bringing championship-quality coffee to everyone, everywhere. No barista skills required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-primary text-primary-foreground rounded-lg p-8 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
