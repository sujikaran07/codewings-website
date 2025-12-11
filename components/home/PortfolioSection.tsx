'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PortfolioSectionProps {
    projects: any[]
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
    const [showAll, setShowAll] = useState(false)

    // Show 6 initially, or all if toggled
    const visibleProjects = showAll ? projects : projects.slice(0, 6)
    const hasMore = projects.length > 6

    if (projects.length === 0) return null

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-white/5">
            <div className="absolute inset-0 bg-grid-white/[0.02]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Work</h2>
                        <p className="text-lg text-muted-foreground max-w-xl">
                            A showcase of our recent projects and the impact we've created for our clients.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project: any, i: number) => (
                        <div
                            key={project.slug || i}
                            className="group relative bg-black/40 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors"
                        >
                            {/* Image Placeholder (replace with real image if available) */}
                            <div className="aspect-video bg-white/5 relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground/30">
                                        <Code2 size={48} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                    <Link
                                        href={project.link || "#"}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                    >
                                        View Case Study <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags?.map((tag: string) => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                                </div>
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm">
                                    <span className="text-accent font-medium">{project.result}</span>
                                    <span className="text-muted-foreground">{project.client}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Link to Portfolio Page */}
                <div className="flex justify-center mt-12">
                    <Button
                        asChild
                        variant="secondary"
                        className="min-w-[150px] gap-2"
                    >
                        <Link href="/portfolio">
                            View All Projects <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
