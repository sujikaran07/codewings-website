import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, Code2, Palette, Terminal, Users, Globe, ChevronRight } from "lucide-react"
import { getSettings, client, getAboutPage } from "@/lib/sanity"
import { groq } from "next-sanity"
import { IconMap } from "@/components/icon-map"

async function getCareers() {
    return client.fetch(groq`*[_type == "career" && isActive == true]`)
}

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Careers",
    description: "Join our team of visionaries. Check out open positions at CodeWings Technologies.",
}

export default async function CareerPage() {
    const [settings, careers, aboutData] = await Promise.all([
        getSettings(),
        getCareers(),
        getAboutPage()
    ])

    const benefits = aboutData?.careerBenefits || [
        { title: "Remote First", desc: "Work from anywhere. We value autonomy and trust you to manage your own schedule.", icon: "Globe" },
        { title: "Mentorship", desc: "Direct access to experienced founders and leaders who are invested in your personal growth.", icon: "Users" },
        { title: "Real Impact", desc: "Don't just be a cog in the machine. Your contributions will directly shape our products and future.", icon: "Code2" },
        { title: "Future Growth", desc: "Join us at the ground level. High performers have the opportunity for future equity and leadership roles.", icon: "Terminal" },
    ]

    return (
        <div className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-white">
            <Header siteName={settings?.siteName} />

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
                        <span className="text-xs font-medium text-accent uppercase tracking-wider">We are hiring</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-tight">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Revolution</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                        We are a team of visionaries, builders, and dreamers. Help us shape the future of digital experiences.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                            <a href="#openings">View Open Roles</a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 bg-transparent">
                            <Link href="/about">Our Culture</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 border-t border-white/5 bg-white/[0.02]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why CodeWings?</h2>
                        <p className="text-muted-foreground">More than just a job. It's a lifestyle.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((item: any, i: number) => {
                            const BenefitIcon = IconMap[item.icon] || Code2
                            return (
                                <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-colors group">
                                    <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                        <BenefitIcon size={24} className="text-accent" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section id="openings" className="py-24 border-t border-white/5">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Current Openings</h2>
                        <p className="text-lg text-muted-foreground">Find your place in our growing team.</p>
                    </div>

                    <div className="space-y-4">
                        {careers.map((job: any, i: number) => {
                            const Icon = IconMap[job.icon] || Code2
                            return (
                                <div key={i} className="group relative bg-zinc-900/50 hover:bg-zinc-900 border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-accent/50 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex gap-6">
                                            <div className="hidden md:flex h-16 w-16 bg-white/5 rounded-xl items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/20 transition-colors">
                                                <Icon size={32} className="text-white/50 group-hover:text-accent transition-colors" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{job.department}</span>
                                                    <span className="h-1 w-1 rounded-full bg-white/20"></span>
                                                    <span className="text-xs text-muted-foreground">{job.type}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{job.role}</h3>
                                                <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">{job.description}</p>
                                            </div>
                                        </div>

                                        <div className="shrink-0">
                                            <Button asChild variant="outline" className="w-full md:w-auto border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all">
                                                <Link href={`/career/apply?role=${encodeURIComponent(job.role)}`}>
                                                    Apply Now <ChevronRight size={16} className="ml-2" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-16 bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Don't see your role?</h3>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We are always looking for exceptional talent. If you think you'd be a great fit, send us your resume and a brief intro.
                        </p>
                        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                            <a href="mailto:info@codewings.tech">Email Us</a>
                        </Button>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}
