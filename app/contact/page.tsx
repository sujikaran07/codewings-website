import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { getSettings } from "@/lib/sanity"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CodeWings Technologies for your web and mobile app development needs.",
}

export default async function ContactPage() {
  const settings = await getSettings()

  // Fallbacks
  const email = settings?.email || "info@codewings.tech"
  const phone = settings?.phone || "+94 77 636 0319"
  const address = settings?.address || "CodeWings Technologies,\nUdaiyarkaddu, Mullaitivu"

  return (
    <div className="min-h-screen bg-transparent text-foreground relative overflow-hidden selection:bg-accent/30">
      <Header siteName={settings?.siteName} />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-medium text-accent uppercase tracking-wider">Open for New Projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            Let's Build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Something Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Have a game-changing idea? We help businesses transform vision into reality with cutting-edge digital solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Contact Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-6">
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-start gap-4 text-muted-foreground hover:text-white transition-all"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/50 mb-1">Email Us</p>
                      <span className="text-lg font-medium group-hover:underline decoration-accent underline-offset-4">{email}</span>
                    </div>
                  </a>

                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="group flex items-start gap-4 text-muted-foreground hover:text-white transition-all">
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/50 mb-1">Call Us</p>
                      <span className="text-lg font-medium group-hover:underline decoration-accent underline-offset-4">{phone}</span>
                    </div>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=CodeWings+Technologies,+Udaiyarkaddu,+Mullaitivu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 text-muted-foreground hover:text-white transition-all"
                  >
                    <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/50 mb-1">Visit Us</p>
                      <div className="text-base leading-relaxed whitespace-pre-line group-hover:text-accent transition-colors">
                        {address}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent border border-accent/10">
                <h3 className="text-lg font-bold mb-2 text-white flex items-center gap-2">
                  <MessageSquare size={18} className="text-accent" /> Why Choose Us?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We don't just write code; we build business assets. From initial strategy to final deployment, we are your partners in growth.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
