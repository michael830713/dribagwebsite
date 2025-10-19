import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Ready to Experience Premium Coffee?
          </h2>

          <p className="text-xl text-accent-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join hundreds of coffee lovers who've discovered the perfect balance of quality and convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-base font-medium group" asChild>
              <Link href="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-medium bg-transparent border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
              asChild
            >
              <a href="https://www.instagram.com/dribagcoffee/" target="_blank" rel="noopener noreferrer">
                Order on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
