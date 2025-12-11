import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { getSettings, getServices } from "@/lib/sanity"
import { ArrowRight } from "lucide-react"
import { ServicesGrid } from "@/components/services/ServicesGrid"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our wide range of services including Web Development, Mobile Apps, and Enterprise Solutions.",
}

export default async function ServicesPage() {
  const [settings, services] = await Promise.all([
    getSettings(),
    getServices()
  ])

  return (
    <div className="min-h-screen bg-background">
      <Header siteName={settings?.siteName} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            End-to-end development services for Web, Mobile, and Enterprise IT.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid services={services} />

      {/* CTA */}
      <div className="mt-20 text-center">
        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-medium">
          <Link href="/contact">
            Schedule a Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
        </Button>
      </div>
      {/* Process Section */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">How we deliver excellence for every client</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Understand your unique requirements and business objectives" },
              { num: "02", title: "Analysis", desc: "Deep dive into your IT landscape and identify opportunities" },
              { num: "03", title: "Strategy", desc: "Develop tailored solutions aligned with your goals" },
              { num: "04", title: "Implementation", desc: "Execute with precision and continuous support" },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-5xl font-bold text-white/5 mb-6 group-hover:text-accent/20 transition-colors duration-500">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
