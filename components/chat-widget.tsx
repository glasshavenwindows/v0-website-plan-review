'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function ChatWidget() {
  const pathname = usePathname()

  useEffect(() => {
    const toggle = () => {
      const widget = document.querySelector('chat-widget') as HTMLElement | null
      if (widget) {
        widget.style.display = pathname === '/contact' ? 'none' : ''
      }
    }

    toggle()
    const timer = setTimeout(toggle, 800)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
