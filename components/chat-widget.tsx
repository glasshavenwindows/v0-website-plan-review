'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
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

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a1f8016b2d4c061bc720089"
      data-source="WEB_USER"
      strategy="afterInteractive"
    />
  )
}
