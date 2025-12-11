import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

import { getSettings, getPosts } from "@/lib/sanity"

import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog",
    description: "Latest insights, tutorials, and news from the CodeWings Technologies team.",
}

export default async function BlogPage() {
    const [settings, posts] = await Promise.all([
        getSettings(),
        getPosts()
    ])

    return (
        <div className="min-h-screen bg-black text-foreground">
            <Header siteName={settings?.siteName} />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Latest Insights</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Thoughts, tutorials, and trends from the world of web and mobile development.
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12 md:py-20 border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any, i: number) => (
                            <article key={i} className="group flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-accent/50 transition-all duration-300">
                                <div className="aspect-video bg-white/10 relative overflow-hidden">
                                    {post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700">No Image</div>
                                    )}
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User size={12} /> {post.author || "CodeWings"}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colorsLine">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-white justify-start">
                                        <Link href={`/blog/${post.slug}`}>Read Article <ArrowRight size={16} className="ml-2" /></Link>
                                    </Button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
