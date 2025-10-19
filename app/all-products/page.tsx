import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const allProducts = [
  {
    id: 1,
    name: "Classic Black Box",
    image: "/images/product-black-boxes.jpeg",
    description:
      "Premium drip coffee bags in elegant black packaging. Made in Brisbane with championship-quality beans.",
  },
  {
    id: 2,
    name: "Mango Madness",
    image: "/images/product-mango-madness.jpeg",
    description: "A crazy mix of mango, pineapple, sticky toffee, red apple, and dates. Colombia Excelso Las Moras.",
  },
  {
    id: 3,
    name: "Classic Series Box",
    image: "/images/product-black-boxes.jpeg",
    description: "Our signature collection featuring premium single-origin beans roasted fresh in Brisbane.",
  },
]

export default function AllProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
              All Products
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              Browse our complete collection of specialty coffee drip bags
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {allProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-semibold text-xl leading-tight">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    <Button className="w-full" asChild>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow us on Instagram for the latest updates, brewing tips, and special offers.
          </p>
          <Button size="lg" variant="default" asChild>
            <a href="https://www.instagram.com/dribagcoffee/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Follow @dribagcoffee
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
