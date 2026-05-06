import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { CTABlock } from '@/components/cta-block'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive window cleaning services including residential, commercial, and specialty cleaning. Professional results for every property.',
}

const CALENDLY_URL = 'https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05'

const services = [
  {
    id: 'residential',
    title: 'Residential Window Cleaning',
    subtitle: 'For Homes of Every Size',
    description:
      'Your home deserves sparkling clean windows that let the light pour in. Our residential services cover everything from single-story cottages to multi-level family homes.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
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
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
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
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    features: [
      'Hard water stain removal',
      'Mineral deposit cleaning',
      'Post-construction cleanup',
      'Paint and debris removal',
      'High-rise window cleaning',
      'Solar panel cleaning',
    ],
    pricing: 'Contact us for specialty pricing',
  },
]

const faqs = [
  {
    question: 'How often should I have my windows cleaned?',
    answer:
      'For most homes, we recommend professional cleaning 2-4 times per year. Commercial properties often benefit from monthly or bi-weekly service depending on location and traffic.',
  },
  {
    question: 'Do you clean screens and tracks?',
    answer:
      'Yes! Our standard residential service includes screen removal, cleaning, and reinstallation, as well as window track and sill cleaning at no extra charge.',
  },
  {
    question: 'What cleaning products do you use?',
    answer:
      'We use eco-friendly, biodegradable cleaning solutions that are safe for your family, pets, and plants. Our products are tough on dirt but gentle on the environment.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Absolutely. We carry comprehensive liability insurance and workers compensation coverage for complete peace of mind.',
  },
  {
    question: 'What if it rains after my cleaning?',
    answer:
      'Light rain actually helps keep your windows clean! However, if a storm leaves spots within 48 hours of service, we will come back and touch up affected windows at no charge.',
  },
  {
    question: 'How do I prepare for my appointment?',
    answer:
      'Just make sure we can access all windows. Move any fragile items away from window areas and let us know about any pets. We handle the rest!',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient section-padding pattern-bg">
        <div className="container-content text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Our Services
          </h1>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            Professional window cleaning tailored to your needs. From residential
            homes to commercial buildings, we deliver crystal clear results.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90 animate-fade-in-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Get Free Estimate
            </a>
          </Button>
        </div>
      </section>

      {/* Services Detail */}
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
              {/* Content */}
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
                      <svg
                        className="h-5 w-5 text-primary shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
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
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                      Get Estimate
                    </a>
                  </Button>
                  <span className="text-sm text-muted-foreground">{service.pricing}</span>
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
        description="No problem! Book a free estimate and we will help you determine the best solution for your windows."
        buttonText="Schedule Free Consultation"
      />

      {/* FAQ Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Got questions? We have answers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="glass-card rounded-xl p-6 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABlock
        heading="Ready to Get Started?"
        description="Schedule your free estimate today and experience the Glass Haven difference."
        buttonText="Book Your Estimate"
      />
    </>
  )
}
