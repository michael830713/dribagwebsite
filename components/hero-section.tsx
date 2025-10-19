import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-primary text-primary-foreground overflow-hidden pb-16 pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Premium Coffee,
              <br />
              Anywhere You Go
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl text-pretty leading-relaxed">
              Experience specialty coffee in minutes with our eco-friendly drip bags. No equipment needed—just hot water
              and great taste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-base font-medium group" asChild>
                <Link href="/shop">
                  Shop Classic Series
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-medium bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/drip-bag-explained">Learn More</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-primary-foreground/70">Eco-Friendly</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/20" />
              <div>
                <div className="text-3xl font-bold">2-3min</div>
                <div className="text-sm text-primary-foreground/70">Brew Time</div>
              </div>
              <div className="h-12 w-px bg-primary-foreground/20" />
              <div>
                <div className="text-3xl font-bold">Brisbane</div>
                <div className="text-sm text-primary-foreground/70">Roasted</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
            <Image
              src="/images/hero-brewing.png"
              alt="Dribag Coffee brewing process"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
