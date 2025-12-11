import { getPostBySlug, getSettings } from "@/lib/sanity"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { PortableText } from "next-sanity"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    if (!post) return { title: "Post Not Found" }
    return {
        title: `${post.title} | CodeWings`,
    }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const [post, settings] = await Promise.all([
        getPostBySlug(slug),
        getSettings()
    ])

    if (!post) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black text-foreground">
            <Header siteName={settings?.siteName} />

            <main className="pt-24 pb-16">
                <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    {/* Back Link */}
                    <div className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Blog
                        </Link>
                    </div>

                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                            <span className="text-xs font-medium text-accent uppercase tracking-wider">Article</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} /> {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={16} /> {post.author || 'CodeWings Team'}
                            </span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.image && (
                        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-white/5 border border-white/10">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="max-w-none prose prose-invert prose-lg text-muted-foreground">
                        <PortableText value={post.body} />
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    )
}
