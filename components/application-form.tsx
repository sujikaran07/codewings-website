"use client"

import { Button } from "@/components/ui/button"
import { Send, User, Mail as MailIcon, Briefcase, Paperclip, ChevronLeft, FileText } from "lucide-react"
import { useState } from "react"
import Link from 'next/link'

import { submitApplication } from "@/app/actions"
import { toast } from "sonner"

interface ApplicationFormProps {
    role?: string
}

export function ApplicationForm({ role }: ApplicationFormProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('submitting')

        const formData = new FormData(e.currentTarget)
        const promise = submitApplication(null, formData)
        const result = await promise

        if (result.status === 'success') {
            setStatus('success')
            toast.success("Application Submitted Successfully!")
        } else {
            setStatus('error')
            toast.error(result.message || "Failed to submit application")
        }
    }

    if (status === 'success') {
        return (
            <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                    <Send size={40} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Application Sent!</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
                    Thank you for your interest in joining CodeWings. Our team will review your application and get back to you shortly.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
                        <Link href="/career">Back to Careers</Link>
                    </Button>
                    <Button asChild className="bg-white text-black hover:bg-white/90">
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <User size={16} /> Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20"
                        placeholder="Sarah Connor"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <MailIcon size={16} /> Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20"
                        placeholder="sarah.connor@gmail.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Briefcase size={16} /> Position
                </label>
                <input
                    type="text"
                    id="role"
                    name="role"
                    defaultValue={role}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20"
                    placeholder="Preferred Role"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="portfolio" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Paperclip size={16} /> Portfolio Link <span className="text-xs text-muted-foreground ml-auto">(Optional)</span>
                </label>
                <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20"
                    placeholder="https://linkedin.com/in/..."
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="resume" className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <FileText size={16} /> Resume / CV <span className="text-xs text-red-400 ml-auto">*Required</span>
                </label>
                <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-black hover:file:bg-accent/80 transition-all cursor-pointer"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Why do you want to join us?
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20 resize-none"
                    placeholder="Tell us a bit about yourself..."
                ></textarea>
            </div>

            <Button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-6 text-lg"
            >
                {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        Sending...
                    </span>
                ) : (
                    "Submit Application"
                )}
            </Button>
        </form>
    )
}
