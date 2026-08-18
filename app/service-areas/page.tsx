import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CTABlock } from '@/components/cta-block'
import { serviceAreas } from '@/lib/service-areas'

export const metadata: Metadata = {
  title: 'Service Areas',
  description:
    'Glass Haven Windows provides professional window cleaning throughout the Flathead Valley, including Bigfork, Kalispell, Whitefish, Lakeside, Woods Bay, Polson, Kila, Columbia Falls, and Ferndale, MT.',
}

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'

export default function ServiceAreasPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient section-padding pattern-bg">
        <div className="container-content text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Where We <span className="text-primary">Clean</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Professional window cleaning throughout the Flathead Valley, based in Bigfork, MT.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={QUOTE_FORM_URL}>Get Free Quote</a>
          </Button>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="glass-card rounded-xl p-6 card-hover animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'forwards' }}
              >
                <h2 className="text-xl font-semibold text-foreground">
                  Window Cleaning in {area.name}, MT
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Serving {area.blurb}.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View Details
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        variant="glass"
        heading="Don't See Your Town Listed?"
        description="Give us a call — we may still be able to help."
        buttonText="Get Free Quote"
      />
    </>
  )
}
