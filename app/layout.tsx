import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Glass Haven Windows | Professional Window Cleaning Services',
    template: '%s | Glass Haven Windows',
  },
  description:
    'Expert residential and commercial window cleaning services. Crystal-clear results, professional service, eco-friendly solutions. Free estimates available. Open 8am-6:30pm daily.',
  keywords: [
    'window cleaning',
    'professional window cleaning',
    'residential window cleaning',
    'commercial window cleaning',
    'glass cleaning',
    'window washing',
  ],
  authors: [{ name: 'Glass Haven Windows' }],
  creator: 'Glass Haven Windows',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Glass Haven Windows',
    title: 'Glass Haven Windows | Professional Window Cleaning Services',
    description:
      'Expert residential and commercial window cleaning services. Crystal-clear results every time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Haven Windows | Professional Window Cleaning Services',
    description:
      'Expert residential and commercial window cleaning services. Crystal-clear results every time.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#5ce1e6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
