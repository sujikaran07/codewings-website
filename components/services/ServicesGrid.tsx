'use client'

import { useState } from 'react'
import { ArrowRight, Code, Smartphone, Building2, Cloud, ShoppingCart, CreditCard, Zap, Shield, GitBranch, Brain, TrendingUp, Code2, Figma } from 'lucide-react'
import { Button } from '@/components/ui/button'

const IconMap: any = {
    Code, Smartphone, Building2, Cloud, ShoppingCart, CreditCard, Zap, Shield, GitBranch, Brain, TrendingUp, Code2, Figma,
    "Web Application Development": Code,
    "Mobile App Development": Smartphone
}

interface ServicesGridProps {
    services: any[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
    const [showAll, setShowAll] = useState(false)

    // Show only 6 initially, or all if toggled
    const visibleServices = showAll ? services : services.slice(0, 6)
    const hasMore = services.length > 6

    return (
        <section className="py-16 md:py-24 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleServices.map((service: any, i: number) => {
                        // Map icon string to component, or use a default
                        const Icon = IconMap[service.icon] || Code2
                        return (
                            <div
                                key={i}
                                className="bg-white/5 rounded-xl border border-white/10 p-8 hover:border-accent/50 transition-all duration-300 group"
                            >
                                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <Icon size={24} className="text-white group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                            </div>
                        )
                    })}
                </div>

                {hasMore && (
                    <div className="flex justify-center mt-16">
                        <Button
                            variant="outline"
                            onClick={() => setShowAll(!showAll)}
                            className="border-white/10 hover:bg-white/5 min-w-[150px] gap-2"
                        >
                            {showAll ? "View Less" : "View All Services"} <ArrowRight size={16} className={showAll ? "rotate-180 transition-transform" : "transition-transform"} />
                        </Button>
                    </div>
                )}

            </div>
        </section>
    )
}
