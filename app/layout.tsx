import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ChatWidget } from '@/components/chat-widget'

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
      <head>
        {/* GHL scanner detection — browser won't execute this */}
        <script
          type="text/plain"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a1f8016b2d4c061bc720089"
          data-source="WEB_USER"
        />
        {/* Actual widget load after React hydration */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a1f8016b2d4c061bc720089"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />

        {/* Meta Pixel Base Code */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2143457473120173');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Enhanced Global Click Listener */}
        <Script id="fb-pixel-lead-listener" strategy="afterInteractive">
          {`
            (function() {
              document.addEventListener('click', function(e) {
                const target = e.target.closest('a');
                if (target && target.href.includes('forms.gle/4c7HSYKmWhmjq47B6')) {
                  console.log('Lead Triggered: Redirecting to Google Form');
                  if (typeof fbq !== 'undefined') {
                    fbq('track', 'Lead');
                  }
                }
              }, { capture: true });
            })();
          `}
        </Script>
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2143457473120173&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <ChatWidget />
      </body>
    </html>
  )
}
