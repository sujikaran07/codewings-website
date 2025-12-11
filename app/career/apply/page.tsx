import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ApplicationForm } from "@/components/application-form"
import { getSettings } from "@/lib/sanity"
import { ArrowLeft } from "lucide-react"
import Link from 'next/link'

export default async function ApplyPage({ searchParams }: { searchParams: Promise<{ role?: string }> }) {
    const settings = await getSettings()

    // In Next js 15, searchParams is async
    const { role } = await searchParams

    return (
        <div className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-white">
            <Header siteName={settings?.siteName} />

            <main className="pt-24 pb-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link href="/career" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to Careers
                        </Link>
                    </div>

                    <div className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Apply Now
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            {role ? `Applying for: ${role}` : "Join the CodeWings Team"}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 md:p-10 backdrop-blur-sm">
                        <ApplicationForm role={role} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
