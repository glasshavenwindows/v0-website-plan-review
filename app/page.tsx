import type { Metadata } from 'next'
import { HeroSection } from '@/components/hero-section'
import { ServiceCard } from '@/components/service-card'
import { FeatureCard } from '@/components/feature-card'
import { CTABlock } from '@/components/cta-block'
import { TestimonialsSection } from '@/components/testimonials-section'

const TITLE = 'Window Cleaning in the Flathead Valley, MT'
const DESCRIPTION =
  'Expert residential and commercial window cleaning throughout the Flathead Valley — Bigfork, Kalispell, Whitefish, and more. Crystal-clear results, eco-friendly solutions, free estimates. Open 8am-6:30pm daily.'
const OG_DESCRIPTION =
  'Expert residential and commercial window cleaning throughout the Flathead Valley. Crystal-clear results every time.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: `Glass Haven Windows | ${TITLE}`,
    description: OG_DESCRIPTION,
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Glass Haven Windows | ${TITLE}`,
    description: OG_DESCRIPTION,
  },
}

const services = [
  {
    title: 'Residential Cleaning',
    description:
      'Transform your home with spotless windows. We handle everything from single-story homes to multi-level properties with care.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    features: ['Interior & exterior cleaning', 'Screen cleaning included', 'Flexible scheduling'],
  },
  {
    title: 'Commercial Cleaning',
    description:
      'Keep your business looking professional with regular window maintenance. First impressions matter.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
    features: ['Storefronts & offices', 'After-hours service available', 'Maintenance contracts'],
  },
  {
    title: 'Specialty Services',
    description:
      'From hard water stain removal to post-construction cleanup, we handle the tough jobs others avoid.',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    features: ['Hard water stain removal', 'Post-construction cleanup', 'High-rise capabilities'],
  },
]

// What we clean items with icons
const cleaningItems = [
  {
    title: 'Windows',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="12" y1="3" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Screen Cleaning',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="2" y1="8" x2="22" y2="8" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="16" x2="22" y2="16" />
        <line x1="6" y1="4" x2="6" y2="20" />
        <line x1="10" y1="4" x2="10" y2="20" />
        <line x1="14" y1="4" x2="14" y2="20" />
        <line x1="18" y1="4" x2="18" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Track Cleaning',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path d="M4 20h16" />
        <path d="M4 20v-4h16v4" />
        <path d="M6 16v-2h4v2" />
        <path d="M14 16v-2h4v2" />
        <path d="M8 14V8a4 4 0 018 0v6" />
      </svg>
    ),
  },
]

const features = [
  {
    title: 'Experienced Team',
    description: 'Trained professionals who take pride in every pane.',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly Products',
    description: 'Safe for your family, pets, and the environment.',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Fully Insured',
    description: 'Complete coverage for your peace of mind.',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: 'Same-Day Service',
    description: 'Quick response when you need us most.',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees. Know exactly what you pay.',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    title: 'Satisfaction Guaranteed',
    description: 'Not happy? We make it right, no questions asked.',
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H3.75"
        />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="section-padding bg-muted/50 pattern-bg">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              What We Clean
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From cozy homes to sprawling commercial properties, we deliver spotless results tailored to your needs.
            </p>
          </div>

          {/* Cleaning Items Icons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {cleaningItems.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-primary border-2 border-secondary/30">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABlock
        variant="glass"
        heading="Ready to See the Difference?"
        description="Book your free estimate today and experience the Glass Haven difference. Crystal clear views are just one call away."
        buttonText="Schedule Your Estimate"
      />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Why Choose <span className="text-primary">Glass</span> <span className="text-secondary">Haven</span>?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              We combine professional expertise with genuine care for your property.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Our Simple Process
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Getting crystal clear windows is easier than you think.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Book Your Estimate',
                description: 'Schedule online or give us a call. We offer flexible times that work for your schedule.',
              },
              {
                step: '02',
                title: 'We Get to Work',
                description: 'Our trained professionals arrive on time with all the right equipment and eco-friendly products.',
              },
              {
                step: '03',
                title: 'Enjoy the View',
                description: 'Sit back and enjoy your sparkling clean windows. We guarantee your satisfaction.',
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative animate-fade-in-up opacity-0 glass-card rounded-xl p-6 card-hover"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <div className="text-5xl font-bold text-secondary">{item.step}</div>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABlock
        heading="Let&apos;s Get Started"
        description="Your view deserves better. Book your free estimate now."
        buttonText="Book Free Estimate"
      />
    </>
  )
}
