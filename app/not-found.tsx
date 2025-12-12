import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-background text-foreground space-y-6 text-center px-4">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] -z-10" />
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse">
                404
            </h1>
            <h2 className="text-3xl font-bold tracking-tight">Lost in Cyberspace?</h2>
            <p className="text-muted-foreground max-w-md text-lg">
                The digital path you are following seems to have disconnected.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/">Return to Base</Link>
            </Button>
        </div>
    )
}
