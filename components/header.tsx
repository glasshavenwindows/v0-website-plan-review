'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'
const PHONE_NUMBER = '(406) 607-5279'
const PHONE_LINK = 'tel:+14066075279'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/80 backdrop-blur-md">
      <nav className="container-content">
        <div className="flex h-16 items-center justify-between md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/glass-haven-logo.png"
              alt="Glass Haven Windows"
              width={140}
              height={56}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Phone */}
          <div className="hidden items-center gap-4 md:flex">

            <a
              href={PHONE_LINK}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {PHONE_NUMBER}
            </a>

            <Button
              asChild
              className="btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={QUOTE_FORM_URL}>
                Get Free Quote
              </a>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        currentPath={pathname}
      />
    </header>
  )
}
