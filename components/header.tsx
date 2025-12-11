"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

import Image from "next/image"

interface HeaderProps {
  siteName?: string
}

export function Header({ siteName = "CodeWings" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/codewings-logo.png"
              alt="CodeWings"
              width={32}
              height={32}
              className="object-contain" // Ensures the logo isn't distorted
            />
            <span className="hidden font-bold text-foreground sm:inline">{siteName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            {/* <Link
              href="/portfolio"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link> */}
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/career" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-border py-4 md:hidden bg-background">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary">
                About
              </Link>
              <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary">
                Services
              </Link>
              {/* <Link href="/portfolio" className="text-sm font-medium text-foreground hover:text-primary">
                Portfolio
              </Link> */}
              <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary">
                Blog
              </Link>
              <Link href="/career" className="text-sm font-medium text-foreground hover:text-primary">
                Careers
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
                Contact
              </Link>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
