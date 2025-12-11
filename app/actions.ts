'use server'

import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env"
import { sendAutoReply } from "@/lib/mail"

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token: process.env.SANITY_API_TOKEN, // Protected token for writes
})

export async function submitContactForm(prevState: any, formData: FormData) {
    try {
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const company = formData.get("company") as string
        const service = formData.get("service") as string
        const message = formData.get("message") as string

        if (!name || !email || !message) {
            return { status: "error", message: "Missing required fields" }
        }

        await client.create({
            _type: "contactSubmission",
            name,
            email,
            company,
            service,
            message,
            submittedAt: new Date().toISOString(),
            status: "new"
        })

        // Send Auto-Reply
        await sendAutoReply('contact', { to: email, name })

        return { status: "success", message: "Message sent successfully!" }
    } catch (error) {
        console.error("Contact Submission Error:", error)
        return { status: "error", message: "Failed to send message. Please try again." }
    }
}

export async function submitApplication(prevState: any, formData: FormData) {
    try {
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const role = formData.get("role") as string
        const portfolio = formData.get("portfolio") as string
        const message = formData.get("message") as string
        const resumeFile = formData.get("resume") as File

        if (!name || !email || !role || !resumeFile) {
            return { status: "error", message: "Missing required fields" }
        }

        // 1. Upload Resume
        let resumeAssetId = null
        if (resumeFile && resumeFile.size > 0) {
            // Convert file to buffer or stream for Sanity upload
            // Sanity 'upload' accepts File, Buffer, or Stream. 
            // In Server Actions, File is a Blob.
            // valid options: 'image' | 'file'
            const asset = await client.assets.upload('file', resumeFile, {
                filename: resumeFile.name
            })
            resumeAssetId = asset._id
        }

        // 2. Create Document
        await client.create({
            _type: "applicationSubmission",
            name,
            email,
            role,
            portfolio,
            message,
            resume: resumeAssetId ? { _type: 'file', asset: { _type: "reference", _ref: resumeAssetId } } : undefined,
            submittedAt: new Date().toISOString(),
            status: "new"
        })

        // Send Auto-Reply
        await sendAutoReply('application', { to: email, name })

        return { status: "success", message: "Application submitted successfully!" }
    } catch (error) {
        console.error("Application Submission Error:", error)
        return { status: "error", message: "Failed to submit application. Please try again." }
    }
}
