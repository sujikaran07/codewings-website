import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Globe, Trophy, Users, Star } from "lucide-react"

import { getSettings, getAboutPage } from "@/lib/sanity"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, vision, and the team behind CodeWings Technologies.",
}

export default async function AboutPage() {
  const [settings, aboutData] = await Promise.all([
    getSettings(),
    getAboutPage()
  ])

  // Fallbacks
  const title = aboutData?.title || "We Are CodeWings"
  const subtitle = aboutData?.subtitle || "A team of visionary developers, designers, and strategists dedicated to crafting exceptional digital experiences. We don't just build software; we engineer growth."
  const storyTitle = aboutData?.storyTitle || "Our Story"
  const stats = aboutData?.stats || [
    { label: "Global Clients", value: "50+", icon: "Globe" },
    { label: "Projects Delivered", value: "100+", icon: "Trophy" },
    { label: "Expert Developers", value: "20+", icon: "Users" },
    { label: "Client Retention", value: "98%", icon: "Star" },
  ]
  const values = aboutData?.values || [
    { title: "Mission", description: "To empower businesses by building innovative digital products that solve real-world problems and delight users." },
    { title: "Innovation", description: "We stay ahead of technological trends and continuously adapt our services to meet evolving client needs in the digital landscape." },
    { title: "Integrity", description: "Transparency and ethical practices form the foundation of all our business relationships and client partnerships." },
  ]

  const IconMap: any = { Globe, Trophy, Users, Star }

  return (
    <div className="min-h-screen bg-background">
      <Header siteName={settings?.siteName} />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-0 -left-60 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 -right-60 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="container px-4 relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Defining the Future of Tech</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            {title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">{storyTitle}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CodeWings was founded with a bold vision: to simplify the complex world of software development for startups
                and enterprises alike. We saw a need for a partner who doesn't just write code, but builds solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team represents the convergence of creativity and technical expertise. We specialize in transforming
                abstract ideas into robust, user-centric web and mobile applications that drive real business growth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat: any, i: number) => {
                const Icon = IconMap[stat.icon] || Trophy
                return (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-accent/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">Our Core Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Driven by principles allowing us to deliver excellence in every line of code.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value: any, i: number) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-accent/50 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With CodeWings</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {(aboutData?.whyChooseUs || [
              "Mastery of Advanced & Modern Technology Stacks",
              "Agile Development & Rapid Prototyping",
              "Enterprise-Grade Scalable & Secure Architecture",
              "Intuitive & Engaging User-Centric Design",
              "Full-Cycle Development: From Concept to Deployment",
              "Reliable Post-Launch Support & Maintenance",
            ]).map((reason: string, i: number) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/90">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
