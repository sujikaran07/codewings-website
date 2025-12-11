import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getSettings, getProjects } from "@/lib/sanity"
import { ArrowUpRight } from "lucide-react"

export default async function PortfolioPage() {
  const [settings, projects] = await Promise.all([
    getSettings(),
    getProjects()
  ])

  return (
    <div className="min-h-screen bg-background">
      <Header siteName={settings?.siteName} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Proven success across diverse industries and complex technology domains.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((study: any, i: number) => (
              <div
                key={i}
                className="group bg-white/5 rounded-xl border border-white/10 p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{study.title}</h3>
                    <p className="text-sm text-muted-foreground">{study.client || "Client Project"}</p>
                  </div>
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                    <ArrowUpRight
                      size={20}
                      className="text-white group-hover:text-accent transition-colors"
                    />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{study.description}</p>

                <div className="mb-6 pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-white/90">
                    <span className="text-accent mr-2">Result:</span>
                    {study.result || "Outcome confidential"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.technologies && study.technologies.map((tech: any, j: number) => (
                    <span key={j} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/80 border border-white/5">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground">Deep domain expertise across key sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Financial Services",
              "E-commerce & Retail",
              "Healthcare & Pharma",
              "Manufacturing",
              "Telecommunications",
              "Media & Entertainment",
              "Government & Defense",
              "Education",
            ].map((industry, i) => (
              <div key={i} className="py-4 px-6 bg-white/5 border border-white/10 rounded-lg text-center hover:border-accent/50 transition-colors cursor-default">
                <p className="font-medium text-white/90">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
