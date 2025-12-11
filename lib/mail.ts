import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

// Brand Colors
const colors = {
    background: '#000000',
    card: '#111111',
    text: '#ffffff',
    subtext: '#a1a1aa',
    accent: '#22c55e', // Brand Green
    border: '#27272a'
}

type EmailType = 'contact' | 'application' | 'default'

interface EmailData {
    to: string
    name: string
    subject?: string
}

function getTemplate(type: EmailType, name: string) {
    const header = `
        <div style="background-color: ${colors.background}; padding: 20px; text-align: center;">
            <h1 style="color: ${colors.text}; margin: 0; font-family: sans-serif;">CodeWings</h1>
            <p style="color: ${colors.accent}; margin: 5px 0 0; font-family: sans-serif; font-size: 14px;">Building Future Tech</p>
        </div>
    `

    const footer = `
        <div style="background-color: ${colors.background}; padding: 20px; text-align: center; border-top: 1px solid ${colors.border};">
            <p style="color: ${colors.subtext}; font-size: 12px; font-family: sans-serif; margin: 0;">
                © ${new Date().getFullYear()} CodeWings Technologies. All rights reserved.<br>
                Udaiyarkaddu, Mullaitivu
            </p>
            <div style="margin-top: 10px;">
                <a href="https://codewings.tech" style="color: ${colors.accent}; text-decoration: none; font-size: 12px; margin: 0 10px;">Website</a>
                <a href="https://linkedin.com" style="color: ${colors.accent}; text-decoration: none; font-size: 12px; margin: 0 10px;">LinkedIn</a>
            </div>
        </div>
    `

    let content = ''
    let subject = ''

    switch (type) {
        case 'application':
            subject = 'Application Received - CodeWings'
            content = `
                <h2 style="color: ${colors.text}; margin-bottom: 16px;">Application Received</h2>
                <p style="color: ${colors.subtext}; margin-bottom: 24px; line-height: 1.6;">
                    Hi <strong>${name}</strong>,<br><br>
                    Thank you for applying to CodeWings. We have received your application and our team is currently reviewing your resume and portfolio.
                </p>
                <div style="background-color: ${colors.background}; border: 1px solid ${colors.border}; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <p style="color: ${colors.text}; margin: 0;"><strong>What's Next?</strong></p>
                    <p style="color: ${colors.subtext}; margin-top: 8px; font-size: 14px;">
                        If your profile matches our requirements, we will reach out to schedule an interview within the next 3-5 business days.
                    </p>
                </div>
                <p style="color: ${colors.subtext};">
                    Best regards,<br>
                    The CodeWings Recruitment Team
                </p>
            `
            break

        case 'contact':
            subject = 'We Received Your Message - CodeWings'
            content = `
                <h2 style="color: ${colors.text}; margin-bottom: 16px;">Thanks for Reaching Out!</h2>
                <p style="color: ${colors.subtext}; margin-bottom: 24px; line-height: 1.6;">
                    Hi <strong>${name}</strong>,<br><br>
                    Thanks for contacting CodeWings. We have received your inquiry and one of our experts will get back to you shortly.
                </p>
                <div style="background-color: ${colors.background}; border: 1px solid ${colors.border}; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <p style="color: ${colors.text}; margin: 0;"><strong>Our Commitment</strong></p>
                    <p style="color: ${colors.subtext}; margin-top: 8px; font-size: 14px;">
                        We strive to respond to all inquiries within 24 hours. In the meantime, feel free to browse our <a href="https://codewings.tech/services" style="color: ${colors.accent};">services</a>.
                    </p>
                </div>
                <p style="color: ${colors.subtext};">
                    Best regards,<br>
                    CodeWings Support
                </p>
            `
            break

        default:
            subject = 'Message Received - CodeWings'
            content = `
                <h2 style="color: ${colors.text}; margin-bottom: 16px;">Hello!</h2>
                <p style="color: ${colors.subtext}; margin-bottom: 24px; line-height: 1.6;">
                    Hi <strong>${name}</strong>,<br><br>
                    Thank you for connecting with CodeWings. We have received your message and will be in touch soon.
                </p>
                <p style="color: ${colors.subtext};">
                    Cheers,<br>
                    Team CodeWings
                </p>
            `
            break
    }

    return {
        subject,
        text: content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(), // Simple HTML-to-Text strip
        html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; background-color: ${colors.background}; font-family: sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; background-color: ${colors.card};">
                    ${header}
                    <div style="padding: 32px 24px;">
                        ${content}
                    </div>
                    ${footer}
                </div>
            </body>
            </html>
        `
    }
}

export async function sendAutoReply(type: EmailType, data: EmailData) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('⚠️ SMTP credentials not found. Skipping auto-reply email.')
        return false
    }

    try {
        const template = getTemplate(type, data.name)

        await transporter.sendMail({
            from: `"CodeWings Team" <${process.env.SMTP_USER}>`, // Explicit sender name
            to: data.to,
            subject: data.subject || template.subject,
            text: template.text, // Plain text version for better deliverability
            html: template.html,
        })

        console.log(`✅ Auto-reply sent to ${data.to} [${type}]`)
        return true
    } catch (error) {
        console.error('❌ Failed to send auto-reply:', error)
        return false
    }
}
