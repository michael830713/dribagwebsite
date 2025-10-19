"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/dribag-logo.png" alt="Dribag Coffee" width={120} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/all-products"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-to-brew"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              How to Brew
            </Link>
            <Link
              href="/drip-bag-explained"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Drip Bag Explained
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/dribagcoffee/"
                target="_blank"
                rel="noopener noreferrer"
                title="Order on Instagram"
              >
                <ShoppingCart className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col gap-4">
              <Link
                href="/shop"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Shop
              </Link>
              <Link
                href="/all-products"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                All Products
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/how-to-brew"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                How to Brew
              </Link>
              <Link
                href="/drip-bag-explained"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Drip Bag Explained
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
