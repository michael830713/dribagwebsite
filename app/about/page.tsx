import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Target, Leaf, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Award,
    title: "Championship Quality",
    description:
      "We source only the finest specialty-grade beans from award-winning farms and roast them to perfection in Brisbane.",
  },
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "100% biodegradable materials, eco-friendly packaging, and a commitment to reducing waste in every cup.",
  },
  {
    icon: Heart,
    title: "Student-Focused",
    description: "Born at UQ, we understand student life. Quality coffee shouldn't be complicated or expensive.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We're building a community of coffee lovers who value convenience without compromising on quality.",
  },
]

const milestones = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Founded by UQ students with a vision to revolutionize portable coffee",
  },
  {
    year: "2024",
    title: "First Launch",
    description: "Introduced our Classic Series to the UQ campus community",
  },
  {
    year: "2024",
    title: "Growing Fast",
    description: "Expanded to multiple campus locations and online sales",
  },
  {
    year: "2025",
    title: "The Future",
    description: "Bringing championship-quality coffee to students across Australia",
  },
]

const team = [
  {
    name: "Michael Lee",
    role: "Co-Founder & CEO",
    image: "/images/michael-lee-professional.png",
    bio: "Coffee enthusiast and UQ business student passionate about sustainable innovation",
  },
  {
    name: "Peter Wei",
    role: "Co-Founder & CTO",
    image: "/images/peter-wei-cofounder.png",
    bio: "UQ student and operations specialist focused on scaling quality coffee solutions",
  },
  {
    name: "Anthony Tang",
    role: "Co-Founder & COO",
    image: "/images/anthony-tang-cofounder.png",
    bio: "Creative strategist and UQ student driving brand growth and community engagement",
  },
  {
    name: "Ridwan Amsal",
    role: "Co-Founder & CMO",
    image: "/images/ridwan-amsal-cofounder.png",
    bio: "Tech innovator and UQ student building scalable solutions for coffee excellence",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 leading-[1.1]">
              Bringing Championship Coffee to Your Everyday
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 text-pretty leading-relaxed">
              We're a group of UQ students who believe great coffee should be accessible, sustainable, and simple.
              That's why we created Dribag Coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Making Specialty Coffee Accessible to Everyone</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2024 at the University of Queensland, Dribag Coffee was born from a simple observation:
                  students and young professionals deserve better coffee options that fit their busy lifestyles.
                </p>
                <p>
                  We saw the gap between expensive cafe coffee and low-quality instant alternatives. Our drip bags
                  bridge that gap, delivering championship-quality specialty coffee that's as convenient as it is
                  delicious.
                </p>
                <p>
                  Every bag is carefully crafted with sustainably sourced beans, roasted locally in Brisbane, and
                  packaged in 100% biodegradable materials. Because great coffee shouldn't cost the earth.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
              <Image
                src="/images/team-with-products.jpeg"
                alt="Dribag Coffee co-founders with products"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">From campus startup to specialty coffee innovators</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                      {milestone.year}
                    </div>
                    <Card className="flex-1">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">The passionate students behind Dribag Coffee</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square bg-muted">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Cups Brewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Biodegradable</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Origin Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Be part of the coffee revolution. Try Dribag Coffee today and experience the difference.
          </p>
          <Button size="lg" variant="secondary" className="group">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
