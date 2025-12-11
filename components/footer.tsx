import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiDiscord,
  SiLinkedin,
  SiGithub
} from "react-icons/si"
import Image from "next/image"
import { getSettings } from "@/lib/sanity"
import { IconType } from "react-icons"

const SocialIconMap: Record<string, IconType> = {
  LinkedIn: SiLinkedin,
  GitHub: SiGithub,
  Twitter: SiX,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  Discord: SiDiscord
}

export async function Footer() {
  const settings = await getSettings()
  const year = new Date().getFullYear()

  // Fallbacks
  const email = settings?.email || "info@codewings.tech"
  const phone = settings?.phone || "+94 77 636 0319"
  const address = settings?.address || "CodeWings Technologies,\nUdaiyarkaddu, Mullaitivu"
  const socials = settings?.socialLinks || [
    { platform: "LinkedIn", url: "https://linkedin.com" },
    { platform: "GitHub", url: "https://github.com" },
    { platform: "Twitter", url: "https://twitter.com" },
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Discord", url: "https://discord.com" }
  ]

  return (
    <footer className="border-t border-white/10 bg-black text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* 1. Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/codewings-logo.png"
                  alt="CodeWings"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">{settings?.siteName || "CodeWings"}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering businesses with next-gen Web & Mobile solutions.
            </p>
          </div>

          {/* 2. Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Web App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Enterprise IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-accent transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              {/* <li><Link href="/portfolio" className="text-muted-foreground hover:text-accent transition-colors">Success Stories</Link></li> */}
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/career" className="text-muted-foreground hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${email}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group">
                  <Mail size={16} className="text-accent/60 group-hover:text-accent" />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group">
                  <Phone size={16} className="text-accent/60 group-hover:text-accent" />
                  <span>{phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=CodeWings+Technologies,+Udaiyarkaddu,+Mullaitivu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <MapPin size={16} className="text-accent/60 mt-0.5 flex-shrink-0 group-hover:text-accent" />
                  <span className="whitespace-pre-line">
                    {address}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Socials */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {year} {settings?.siteName || "CodeWings"}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {socials.map((social: any) => {
              const Icon = SocialIconMap[social.platform] || SiGithub
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors hover:scale-110 transform duration-200"
                  aria-label={social.platform}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
