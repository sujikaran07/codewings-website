'use client'

import { useState } from 'react'
import { Code2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { IconMap } from '@/components/icon-map'
import { Button } from '@/components/ui/button'

interface ServicesSectionProps {
    highlightedServices: any[]
    allServices: any[]
}

export function ServicesSection({ highlightedServices, allServices }: ServicesSectionProps) {
    const [showAll, setShowAll] = useState(false)

    // 1. Determine "Highlight" Services
    // Use the manually selected ones if available, otherwise default to first 6
    let top6 = highlightedServices?.length > 0 ? highlightedServices : allServices.slice(0, 6)

    // Fallback if completely empty
    if (top6.length === 0) {
        top6 = [
            { title: "Web Apps", description: "Scalable web solutions.", icon: "Code2" },
            { title: "Mobile Apps", description: "Native & Cross-platform.", icon: "Zap" },
            { title: "Consulting", description: "Strategic IT guidance.", icon: "Shield" },
            { title: "E-Commerce", description: "Online stores.", icon: "TrendingUp" },
            { title: "Cloud", description: "AWS & Azure solutions.", icon: "GitBranch" },
            { title: "AI", description: "Intelligent automation.", icon: "Brain" },
        ]
    }

    // 2. Identify "Remaining" Services
    // Filter out any service that is already in top6 (by title is safest approx if IDs are lost, or just objects)
    // Actually, we can just filter by ID if available. Sanity docs usually have _id. 
    // But passed objects might be projected. Checking title uniqueness is reasonable for this scale.
    const topTitles = new Set(top6.map((s: any) => s.title))
    const remainingServices = allServices.filter((s: any) => !topTitles.has(s.title))
    const hasMore = remainingServices.length > 0

    const row1 = top6.slice(0, 3)
    const row2 = top6.slice(3, 6)

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-balance">What We Deliver</h2>
                    <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to your enterprise needs
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Row 1: Ratio 2:1:1 */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {row1.map((service: any, i: number) => {
                            const Icon = IconMap[service.icon] || Code2
                            const colSpan = i === 0 ? "md:col-span-6" : "md:col-span-3"
                            return (
                                <ServiceCard key={i} service={service} colSpan={colSpan} Icon={Icon} />
                            )
                        })}
                    </div>

                    {/* Row 2: Ratio 1.2:1.2:1.6 */}
                    {row2.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
                            {row2.map((service: any, i: number) => {
                                const Icon = IconMap[service.icon] || Code2
                                const colSpan = i === 2 ? "md:col-span-4" : "md:col-span-3"
                                return (
                                    <ServiceCard key={i} service={service} colSpan={colSpan} Icon={Icon} />
                                )
                            })}
                        </div>
                    )}


                </div>
            </div>
        </section>
    )
}

function ServiceCard({ service, colSpan, Icon }: any) {
    return (
        <div className={`bg-white/5 rounded-xl border border-white/10 p-8 hover:border-accent/50 transition-all duration-300 group ${colSpan}`}>
            <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <Icon size={24} className="text-white group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
        </div>
    )
}
