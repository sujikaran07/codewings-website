'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

interface BlogSectionProps {
    posts: any[]
}

export function BlogSection({ posts }: BlogSectionProps) {
    const [showAll, setShowAll] = useState(false)

    // Show 3 initially
    const visiblePosts = showAll ? posts : posts.slice(0, 3)
    const hasMore = posts.length > 3

    if (posts.length === 0) return null

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-balance">Latest Insights</h2>
                        <p className="text-lg text-muted-foreground">
                            Thoughts, strategies, and industry trends from our experts.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {visiblePosts.map((post: any) => (
                        <article
                            key={post.slug}
                            className="group flex flex-col bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="aspect-[16/9] bg-white/5 relative overflow-hidden">
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {post.publishedAt ? format(new Date(post.publishedAt), 'MMM d, yyyy') : 'Recent'}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User size={14} />
                                        {post.author || 'Team'}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                                    <Link href={`/blog/${post.slug}`} className="hover:underline focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {post.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-medium text-accent">
                                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Link to Blog Page */}
                <div className="flex justify-center mt-12">
                    <Button
                        asChild
                        variant="outline"
                        className="min-w-[150px] border-white/10 hover:bg-white/5 hover:text-white gap-2"
                    >
                        <Link href="/blog">
                            Read More Articles <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
