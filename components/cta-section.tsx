"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/15 px-4 py-2 mb-6">
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm font-medium">Ready to Transform?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Ready to Transform Your IT?</h2>
        <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
          Let's discuss how CodeWings can help you achieve your digital transformation goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group gap-2">
            <Link href="/contact">Get in Touch Today</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="backdrop-blur-xl bg-black/40 border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20 bg-transparent"
          >
            <Link href="/services">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
