import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coffee, Leaf, Clock, Zap, Recycle, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const benefits = [
  {
    icon: Clock,
    title: "Quick & Easy",
    description: "Brew championship-quality coffee in just 2-3 minutes. No equipment, no mess, no hassle.",
  },
  {
    icon: Coffee,
    title: "Specialty Grade",
    description: "Every bag contains freshly ground, specialty-grade coffee from award-winning roasters.",
  },
  {
    icon: Leaf,
    title: "100% Eco-Friendly",
    description: "Biodegradable materials and compostable packaging. Great coffee, zero guilt.",
  },
  {
    icon: Zap,
    title: "Perfect Extraction",
    description: "Pre-measured portions ensure optimal extraction every time. Consistent quality guaranteed.",
  },
  {
    icon: Recycle,
    title: "Zero Waste",
    description: "No plastic pods, no paper filters to throw away. Just pure, sustainable coffee enjoyment.",
  },
  {
    icon: Award,
    title: "Championship Quality",
    description: "Sourced from award-winning farms and roasted to perfection by Brisbane's finest.",
  },
]

const howItWorks = [
  {
    step: "1",
    title: "Open & Position",
    description: "Tear open the drip bag and hook the hangers over the rim of your cup or mug.",
  },
  {
    step: "2",
    title: "Pour Hot Water",
    description: "Slowly pour 200ml of hot water (90-96°C) over the grounds in a circular motion.",
  },
  {
    step: "3",
    title: "Let It Drip",
    description: "Allow the coffee to drip through completely. This takes about 2-3 minutes.",
  },
  {
    step: "4",
    title: "Enjoy & Dispose",
    description: "Remove the bag, stir if desired, and enjoy. Compost the used bag guilt-free.",
  },
]

export default function DripBagExplainedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4" variant="secondary">
                Innovation in Coffee
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-[1.1]">
                What is a Drip Coffee Bag?
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/90 text-pretty leading-relaxed mb-8">
                Discover the revolutionary way to enjoy specialty coffee anywhere, anytime. Our drip bags combine the
                convenience of instant coffee with the quality of pour-over brewing.
              </p>
              <Button size="lg" variant="secondary" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image src="/images/hero-brewing.png" alt="Drip bag coffee brewing" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Drip Bags?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the perfect balance of quality, convenience, and sustainability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Four simple steps to perfect coffee</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Drip Bags vs. Traditional Methods</h2>
            <p className="text-lg text-muted-foreground">See how we compare to other brewing methods</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold">Drip Bags</th>
                        <th className="text-center p-4 font-semibold">Pour Over</th>
                        <th className="text-center p-4 font-semibold">Instant Coffee</th>
                        <th className="text-center p-4 font-semibold">Coffee Pods</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4">Quality</td>
                        <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐</td>
                        <td className="text-center p-4">⭐⭐⭐</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4">Convenience</td>
                        <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐</td>
                        <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="p-4">Eco-Friendly</td>
                        <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐⭐</td>
                        <td className="text-center p-4">⭐</td>
                      </tr>
                      <tr className="bg-muted/30">
                        <td className="p-4">Portability</td>
                        <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐</td>
                        <td className="text-center p-4">⭐⭐⭐⭐</td>
                        <td className="text-center p-4">⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="p-4">Equipment Needed</td>
                        <td className="text-center p-4">None</td>
                        <td className="text-center p-4">Kettle, Filter, Dripper</td>
                        <td className="text-center p-4">None</td>
                        <td className="text-center p-4">Pod Machine</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Try Drip Bags?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the perfect cup of coffee, anywhere you go. Start your journey with our Classic Series.
          </p>
          <Button size="lg" variant="secondary" className="group">
            Shop Classic Series
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
