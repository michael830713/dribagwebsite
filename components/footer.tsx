import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">DRIBAG</div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Championship-quality coffee in convenient drip bags. Brisbane born, globally inspired.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/all-products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dribagcoffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Order on Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/how-to-brew"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  How to Brew
                </Link>
              </li>
              <li>
                <Link
                  href="/drip-bag-explained"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Drip Bag Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info.dribag@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dribagcoffee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/70">© 2025 Dribag Coffee. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/dribagcoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
