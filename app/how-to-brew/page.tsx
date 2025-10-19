import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Timer, Coffee, AlertCircle, Lightbulb, Play } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const brewingSteps = [
  {
    number: "01",
    title: "Prepare Your Cup",
    description: "Choose a cup or mug that can hold at least 250ml. Place it on a stable surface.",
    tip: "Use a pre-warmed cup for better temperature retention",
  },
  {
    number: "02",
    title: "Open the Drip Bag",
    description: "Carefully tear open the drip bag along the perforated line. Unfold the hangers on both sides.",
    tip: "Handle gently to avoid tearing the filter",
  },
  {
    number: "03",
    title: "Position Over Cup",
    description: "Hook the hangers over the rim of your cup, ensuring the bag is centered and stable.",
    tip: "Make sure the bag doesn't touch the bottom of the cup",
  },
  {
    number: "04",
    title: "Heat Water to 90-96°C",
    description: "Boil water and let it cool for 30 seconds to reach the optimal temperature range.",
    tip: "Too hot water can over-extract and create bitterness",
  },
  {
    number: "05",
    title: "First Pour - Bloom",
    description: "Pour 30ml of hot water in a circular motion to wet all the grounds. Wait 30 seconds.",
    tip: "This 'bloom' releases CO2 and enhances flavor extraction",
  },
  {
    number: "06",
    title: "Continue Pouring",
    description: "Slowly pour the remaining 170ml in a steady circular motion. Total water: 200ml.",
    tip: "Pour slowly and steadily for optimal extraction",
  },
  {
    number: "07",
    title: "Let It Drip",
    description: "Allow the coffee to drip through completely. This should take 2-3 minutes total.",
    tip: "Don't rush - good things take time",
  },
  {
    number: "08",
    title: "Remove & Enjoy",
    description: "Carefully remove the drip bag, give your coffee a gentle stir, and enjoy!",
    tip: "Compost the used bag - it's 100% biodegradable",
  },
]

const proTips = [
  {
    icon: Thermometer,
    title: "Water Temperature",
    description: "90-96°C is ideal. Too hot extracts bitterness, too cool results in weak coffee.",
  },
  {
    icon: Droplets,
    title: "Water Quality",
    description: "Use filtered water for the best taste. Tap water minerals can affect flavor.",
  },
  {
    icon: Timer,
    title: "Brew Time",
    description: "Aim for 2-3 minutes total. Adjust pour speed to control extraction time.",
  },
  {
    icon: Coffee,
    title: "Cup Size",
    description: "200ml is optimal. For stronger coffee, use less water (150ml).",
  },
]

export default function HowToBrewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Brewing Guide
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
              How to Brew the Perfect Cup
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Master the art of drip bag coffee with our step-by-step guide. From water temperature to pour technique,
              we'll help you brew like a pro.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Reference</h3>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Water Amount:</span> 200ml
                      </div>
                      <div>
                        <span className="font-medium">Temperature:</span> 90-96°C
                      </div>
                      <div>
                        <span className="font-medium">Brew Time:</span> 2-3 minutes
                      </div>
                      <div>
                        <span className="font-medium">Difficulty:</span> Beginner-friendly
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brewing Steps */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Step-by-Step Instructions</h2>
            <p className="text-lg text-muted-foreground">Follow these simple steps for the perfect brew every time</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {brewingSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{step.description}</p>
                      <div className="flex items-start gap-2 bg-muted/50 p-3 rounded-lg">
                        <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <span className="font-medium">Pro Tip: </span>
                          <span className="text-muted-foreground">{step.tip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Pro Brewing Tips</h2>
            <p className="text-lg text-muted-foreground">
              Take your brewing to the next level with these expert recommendations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {proTips.map((tip, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Troubleshooting</h2>
            <p className="text-lg text-muted-foreground">Common issues and how to fix them</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Coffee tastes bitter?</h3>
                <p className="text-muted-foreground">
                  Your water might be too hot or you're over-extracting. Try lowering the temperature to 90°C and
                  pouring a bit faster.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Coffee tastes weak or sour?</h3>
                <p className="text-muted-foreground">
                  Under-extraction is the culprit. Use hotter water (95-96°C) and pour more slowly to increase contact
                  time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Drip bag overflowing?</h3>
                <p className="text-muted-foreground">
                  You're pouring too fast. Slow down your pour and wait for the water to drip through before adding
                  more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Coffee not hot enough?</h3>
                <p className="text-muted-foreground">
                  Pre-warm your cup with hot water before brewing. This prevents heat loss during the brewing process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Play className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Watch Our Brewing Tutorial</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            See the entire process in action with our step-by-step video guide
          </p>
          <Button size="lg" variant="secondary">
            Watch Video Tutorial
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
