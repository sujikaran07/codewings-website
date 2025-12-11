"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { toast } from "sonner"

import { submitContactForm } from "@/app/actions"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formPayload = new FormData()
        formPayload.append("name", formData.name)
        formPayload.append("email", formData.email)
        formPayload.append("company", formData.company)
        formPayload.append("service", formData.service || "")
        formPayload.append("message", formData.message)

        const promise = submitContactForm(null, formPayload)

        toast.promise(promise, {
            loading: 'Sending message...',
            success: (data) => {
                if (data.status === 'success') {
                    setFormData({ name: "", email: "", company: "", message: "", service: "" })
                    return `Thanks ${formData.name}! Message sent.`
                } else {
                    throw new Error(data.message)
                }
            },
            error: (err) => {
                return err.message || 'Failed to send message'
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl transition-colors duration-500 pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all hover:bg-white/5"
                        placeholder="Emily Carter"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all hover:bg-white/5"
                        placeholder="emily.carter@gmail.com"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all hover:bg-white/5"
                        placeholder="Company Ltd"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Service Interested In</label>
                    <select
                        name="service"
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all hover:bg-white/5 appearance-none cursor-pointer"
                    >
                        <option className="bg-zinc-900" value="">Select a service...</option>
                        <option className="bg-zinc-900" value="web">Web Application</option>
                        <option className="bg-zinc-900" value="mobile">Mobile App</option>
                        <option className="bg-zinc-900" value="custom">Custom Software</option>
                        <option className="bg-zinc-900" value="ecommerce">E-Commerce</option>
                        <option className="bg-zinc-900" value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="mb-8 space-y-2">
                <label className="text-sm font-medium text-white/80 ml-1">Project Details</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all hover:bg-white/5 resize-none"
                    placeholder="Tell us a bit about your project goals and timeline..."
                />
            </div>



            <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-200 font-bold h-14 text-base rounded-xl transition-transform active:scale-[0.98]">
                Send Message
            </Button>
        </form>
    )
}
