import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Sparkles, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getHomepageData, getServices, getTechnologies, getSettings } from "@/lib/sanity"
import { IconMap } from "@/components/icon-map"
import { ServicesSection } from "@/components/home/ServicesSection"

export default async function HomePage() {
  const [homeData, services, technologies, settings] = await Promise.all([
    getHomepageData(),
    getServices(),
    getTechnologies(),
    getSettings()
  ])

  // Fallback defaults if Sanity is empty
  const heroHeading = homeData?.heroHeading || "Building the Future of"
  const heroSubHeading = homeData?.heroSubHeading || "Web & Mobile Innovation"
  const heroDesc = homeData?.heroDescription || "We turn your vision into reality. Specializing in high-performance Web Applications, Cross-Platform Mobile Apps, and Scalable IT Solutions for modern businesses."
  const stats = homeData?.stats || [
    { value: "100%", label: "Innovation" },
    { value: "24/7", label: "Support" },
    { value: "Agile", label: "Development" }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeWings Technologies",
    "url": "https://www.codewings.tech",
    "logo": "https://www.codewings.tech/codewings-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+94 77 636 0319",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/in/codewings-technologies-57baa5393/",
      "https://github.com/CodeWings-Technologies",
      "https://x.com/Codewings_Tech",
      "https://web.facebook.com/profile.php?id=61584816725238",
      "https://www.instagram.com/codewings.tech/"
    ]
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header siteName={settings?.siteName} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute top-0 -right-40 w-80 h-80 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute -bottom-8 left-20 w-80 h-80 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Text */}
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/15">
                <Sparkles size={16} className="text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Next-Gen IT Solutions</span>
              </div>

              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-forwards">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance tracking-tight">
                  {heroHeading}
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-white">
                    {heroSubHeading}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
                  {heroDesc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-forwards">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Link href="/contact">
                    Start Your Transformation <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-white/5 gap-2 bg-transparent"
                >
                  <Link href="/services">
                    Explore Solutions <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-forwards">
                {stats.map((stat: any, idx: number) => (
                  <div key={idx} className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-xl p-6 min-w-[140px] hover:bg-white/10 transition-colors cursor-default">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection highlightedServices={homeData?.services || []} allServices={services || []} />

      {/* Technologies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Technologies We Master</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Expertise across a comprehensive range of modern frameworks, languages, and tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {(technologies.length > 0 ? technologies : [
              { name: "Setup Sanity", icon: "SiReact", color: "text-blue-500" }
            ]).map((tech: any) => {
              const TechIcon = IconMap[tech.icon] || Code2
              return (
                <div
                  key={tech.name}
                  className="backdrop-blur-xl bg-white/5 border border-white/15 rounded-xl p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/25"
                >
                  <TechIcon className={`text-5xl ${tech.color || "text-foreground"} transition-transform duration-300 hover:scale-110`} />
                  <span className="text-sm font-medium text-muted-foreground transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/15 mb-6">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium">Ready to Innovate?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Let's Build Your Vision</h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            From concept to launch, we are your partners in digital success.
            Start your project with CodeWings today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group gap-2">
              <Link href="/contact">Get in Touch Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-white/5 gap-2 bg-transparent">
              <Link href="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
