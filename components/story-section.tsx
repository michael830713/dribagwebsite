import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function StorySection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/team-market-stall.jpeg"
              alt="Dribag Coffee team at UQ market"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-sm font-medium tracking-wider uppercase text-accent">Our Story</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Born at UQ, Brewed for Everyone
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Dribag Coffee started in 2024 when three coffee-loving students at the University of Queensland realized
                there had to be a better way to enjoy specialty coffee between classes.
              </p>
              <p>
                We partnered with Brisbane's finest roasters to bring championship-quality coffee to a convenient,
                eco-friendly format. No expensive equipment, no complicated techniques—just exceptional coffee, ready in
                minutes.
              </p>
              <p>
                Today, we're proud to serve students, professionals, and coffee lovers across Brisbane and beyond,
                making specialty coffee accessible to everyone, everywhere.
              </p>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button size="lg" variant="default" className="text-base font-medium">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
