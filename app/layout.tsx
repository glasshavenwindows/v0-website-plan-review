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
  metadataBase: new URL('https://www.glasshavenwindows.com'),
  title: {
    default: 'Glass Haven Windows | Window Cleaning in the Flathead Valley, MT',
    template: '%s | Glass Haven Windows',
  },
  description:
    'Expert residential and commercial window cleaning throughout the Flathead Valley, MT. Crystal-clear results, professional service, eco-friendly solutions. Free estimates available. Open 8am-6:30pm daily.',
  keywords: [
    'window cleaning',
    'professional window cleaning',
    'residential window cleaning',
    'commercial window cleaning',
    'glass cleaning',
    'window washing',
    'Flathead Valley window cleaning',
    'Bigfork MT window cleaning',
  ],
  authors: [{ name: 'Glass Haven Windows' }],
  creator: 'Glass Haven Windows',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Glass Haven Windows',
    title: 'Glass Haven Windows | Window Cleaning in the Flathead Valley, MT',
    description:
      'Expert residential and commercial window cleaning throughout the Flathead Valley, MT. Crystal-clear results every time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glass Haven Windows | Window Cleaning in the Flathead Valley, MT',
    description:
      'Expert residential and commercial window cleaning throughout the Flathead Valley, MT. Crystal-clear results every time.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'GQAGlIc8AkH12Vo2KXsG3BEh-L7b9n4AAx2lPjg6i4g',
  },
}

export const viewport: Viewport = {
  themeColor: '#5ce1e6',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Glass Haven Window Cleaning',
  image: 'https://www.glasshavenwindows.com/images/glass-haven-logo.png',
  url: 'https://www.glasshavenwindows.com',
  telephone: '+14066075279',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bigfork',
    addressRegion: 'MT',
    addressCountry: 'US',
  },
  areaServed: [
    'Bigfork, MT',
    'Kalispell, MT',
    'Whitefish, MT',
    'Lakeside, MT',
    'Woods Bay, MT',
    'Polson, MT',
    'Kila, MT',
    'Columbia Falls, MT',
    'Ferndale, MT',
  ],
  sameAs: ['https://www.facebook.com/214382179183619'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '18:30',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '17',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* GoHighLevel chat widget */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a1fb7c92b348da0f7692fd9"
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
            fbq('init', '1693183235165089');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18137932366"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18137932366');
            gtag('config', 'G-Y18NM312YC');
          `}
        </Script>

        {/* Enhanced Global Click Listener — fires Meta Lead + Google Ads "Schedule Estimate Click" conversion */}
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
                  if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {'send_to': 'AW-18137932366/539HCLumn80cEM7E68hD'});
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
            src="https://www.facebook.com/tr?id=1693183235165089&ev=PageView&noscript=1"
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
