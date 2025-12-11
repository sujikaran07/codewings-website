import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SpotlightEffect } from "@/components/spotlight-effect"
import { Toaster } from "sonner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.codewings.tech'),
  title: {
    default: "CodeWings Technologies | Premier Web & Mobile App Development",
    template: "%s | CodeWings Technologies",
  },
  description: "CodeWings Technologies: We build high-performance web applications, mobile apps, and enterprise software solutions. Transform your business with our expert engineering team in Sri Lanka.",
  keywords: [
    "CodeWings", "CodeWings Technologies", "Code Wings",
    "Web Development Sri Lanka", "Mobile App Development",
    "Software Company", "React Developers", "Next.js Experts",
    "Enterprise IT Solutions", "UI/UX Design"
  ],
  authors: [{ name: "CodeWings Team" }],
  creator: "CodeWings Technologies",
  publisher: "CodeWings Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.codewings.tech",
    title: "CodeWings Technologies | Build the Future",
    description: "Premium Web & Mobile App Development services. We turn complex ideas into elegant digital reality.",
    siteName: "CodeWings Technologies",
    images: [
      {
        url: "/og-image.png", // We will make sure this exists or is a placeholder
        width: 1200,
        height: 630,
        alt: "CodeWings Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWings Technologies",
    description: "Premium Web & Mobile Development.",
    images: ["/og-image.png"], // consistent with OG
    creator: "@Codewings_Tech",
  },
  icons: {
    icon: "/codewings-logo.png",
    apple: "/codewings-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SpotlightEffect />
        {children}
        <Analytics />
        <Toaster position="top-right" theme="dark" richColors closeButton />
      </body>
    </html>
  )
}
