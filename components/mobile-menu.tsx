'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'

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
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
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
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white border-l border-black/10 shadow-2xl transition-transform duration-300 ease-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full w-full bg-white flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-white px-6 py-4">
            <span className="text-lg font-bold text-black">Menu</span>

            <button
              type="button"
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={onClose}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 bg-white px-6 py-6">
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  className="opacity-100"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      currentPath === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-black hover:bg-gray-100'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="border-t border-border bg-white px-6 py-6">
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <a href={QUOTE_FORM_URL}>
                Get Free Quote
              </a>
            </Button>

            <p className="mt-4 text-center text-sm text-gray-500">
              Open 8:00am - 6:30pm Daily
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
