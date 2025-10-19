import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Instagram } from "lucide-react"

const products = [
  {
    name: "Classic Black Box",
    description: "Premium drip coffee bags in elegant black packaging",
    image: "/images/product-black-boxes.jpeg",
  },
  {
    name: "Mango Madness",
    description: "Fruity blend with mango, pineapple, and toffee notes",
    image: "/images/product-mango-madness.jpeg",
  },
  {
    name: "Classic Series",
    description: "Our signature collection of championship-quality coffee",
    image: "/images/product-black-boxes.jpeg",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-balance">Our Collection</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Carefully curated coffee experiences, ready when you are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>
                <div className="pt-2">
                  <Button variant="default" className="w-full" asChild>
                    <a href="https://www.instagram.com/dribagcoffee/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-4 w-4" />
                      Enquire on Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-base font-medium bg-transparent" asChild>
            <a href="/shop">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
