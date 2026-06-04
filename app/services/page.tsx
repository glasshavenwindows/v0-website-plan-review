import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { CTABlock } from '@/components/cta-block'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive window cleaning services including residential, commercial, and specialty cleaning. Professional results for every property.',
}

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'

const services = [
  {
    id: 'residential',
    title: 'Residential Window Cleaning',
    subtitle: 'For Homes of Every Size',
    description:
      'Your home deserves sparkling clean windows that let the light pour in. Our residential services cover everything from single-story cottages to multi-level family homes.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    features: [
      'Interior and exterior window cleaning',
      'Screen removal, cleaning, and reinstallation',
      'Window track and sill cleaning',
      'Hard-to-reach window access',
      'Skylight cleaning',
      'Storm window cleaning',
    ],
    pricing: 'Starting at $150 for standard homes',
  },
  {
    id: 'commercial',
    title: 'Commercial Window Cleaning',
    subtitle: 'Professional Appearance, Professional Service',
    description:
      'First impressions matter for your business. Keep your storefront, office, or commercial building looking its best with our reliable commercial cleaning services.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    features: [
      'Storefronts and retail spaces',
      'Office buildings and complexes',
      'Restaurants and hospitality',
      'Medical and professional facilities',
      'After-hours cleaning available',
      'Regular maintenance contracts',
    ],
    pricing: 'Custom quotes based on building size',
  },
  {
    id: 'specialty',
    title: 'Specialty Services',
    subtitle: 'The Tough Jobs Others Avoid',
    description:
      'Some windows need extra attention. Whether it is stubborn hard water stains, post-construction cleanup, or high-rise access, we have the expertise and equipment to handle it.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    features: [
      'Hard water stain removal',
      'Paint removal',
      'Solar panel cleaning',
    ],
    pricing: 'Contact us for specialty pricing',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="hero-gradient section-padding pattern-bg">
        <div className="container-content text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Our <span className="text-primary">Services</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Professional window cleaning tailored to your needs.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={QUOTE_FORM_URL}>
              Get Free Quote
            </a>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-content space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <div className="flex-1">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {service.icon}
                </div>

                <p className="mt-4 text-sm font-medium text-primary">{service.subtitle}</p>
                <h2 className="mt-1 text-3xl font-bold text-foreground">{service.title}</h2>
                <p className="mt-4 text-muted-foreground">{service.description}</p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <svg className="h-5 w-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    asChild
                    className="btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={QUOTE_FORM_URL}>
                      Get Free Quote
                    </a>
                  </Button>

                  <span className="text-sm text-muted-foreground">
                    {service.pricing}
                  </span>
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 flex items-center justify-center">
                <div className="glass-card w-full aspect-[4/3] rounded-2xl flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary mx-auto">
                      {service.icon}
                    </div>
                    <p className="mt-4 text-lg font-semibold text-foreground">{service.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Professional Service</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        variant="glass"
        heading="Not Sure Which Service You Need?"
        description="Book a free quote and we will help you choose."
        buttonText="Get Free Quote"
      />

      {/* Final CTA */}
      <CTABlock
        heading="Ready to Get Started?"
        description="Get your free quote today."
        buttonText="Get Free Quote"
      />
    </>
  )
}
