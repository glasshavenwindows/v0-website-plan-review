'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const CALENDLY_URL = 'https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: { name: string; href: string }[]
  currentPath: string
}

export function MobileMenu({
  isOpen,
  onClose,
  navigation,
  currentPath,
}: MobileMenuProps) {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <span className="text-lg font-bold text-foreground">Menu</span>
            <button
              type="button"
              className="rounded-md p-2 text-muted-foreground hover:text-foreground"
              onClick={onClose}
              aria-label="Close menu"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  className="animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      currentPath === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Section */}
          <div className="border-t border-border px-6 py-6">
            <Button
              asChild
              className="w-full btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Get Free Estimate
              </a>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Open 8:00am - 6:30pm Daily
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
