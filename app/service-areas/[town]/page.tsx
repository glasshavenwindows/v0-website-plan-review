import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CTABlock } from '@/components/cta-block'
import { ServiceCard } from '@/components/service-card'
import { StarRating } from '@/components/testimonial-card'
import { serviceAreas, getServiceArea } from '@/lib/service-areas'
import { getTownTestimonial } from '@/lib/testimonials'

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'
const PHONE_NUMBER = '(406) 607-5279'
const PHONE_LINK = 'tel:+14066075279'

const services = [
  {
    title: 'Residential Window Cleaning',
    description:
      'Interior and exterior window cleaning, screen removal and cleaning, window track and sill cleaning, and hard-to-reach window access for homes of every size.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    features: ['Interior & exterior cleaning', 'Screen cleaning included', 'Flexible scheduling'],
  },
  {
    title: 'Commercial Window Cleaning',
    description:
      'Regular maintenance contracts and after-hours service for storefronts, offices, and other commercial buildings that need to keep a professional appearance.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    features: ['Storefronts & offices', 'After-hours service available', 'Maintenance contracts'],
  },
  {
    title: 'Specialty Services',
    description:
      'Hard water stain removal and other tough jobs, handled by a trained team with the right equipment and eco-friendly products.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    features: ['Hard water stain removal', 'Solar panel cleaning', 'Fully insured team'],
  },
]

const trustPoints = [
  { title: 'Fully Insured & Bonded', description: 'Complete liability coverage and workers compensation means you never have to worry.' },
  { title: 'Background-Checked Team', description: 'Every team member passes thorough background checks before entering your home or business.' },
  { title: 'Satisfaction Guarantee', description: 'Not 100% happy? We come back and make it right, no questions asked.' },
  { title: 'Eco-Friendly Approach', description: 'Our biodegradable cleaning solutions are safe for your family, pets, and the planet.' },
]

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ town: area.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ town: string }> }): Promise<Metadata> {
  const { town } = await params
  const area = getServiceArea(town)
  if (!area) return {}

  const title = `Window Cleaning in ${area.name}, MT`
  const description = `Professional residential and commercial window cleaning in ${area.name}, MT from Glass Haven Windows. 5.0-star rated, fully insured, satisfaction guaranteed. Get a free quote today.`
  const path = `/service-areas/${area.slug}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Glass Haven Windows`,
      description,
      url: path,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Glass Haven Windows`,
      description,
    },
  }
}

export default async function TownPage({ params }: { params: Promise<{ town: string }> }) {
  const { town } = await params
  const area = getServiceArea(town)
  if (!area) notFound()

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug)
  const townTestimonial = getTownTestimonial(area.slug)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Window Cleaning',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Glass Haven Window Cleaning',
      telephone: '+14066075279',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bigfork',
        addressRegion: 'MT',
        addressCountry: 'US',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '17',
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${area.name}, MT`,
    },
    url: `https://www.glasshavenwindows.com/service-areas/${area.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <section className="hero-gradient section-padding pattern-bg">
        <div className="container-content text-center">
          <p className="text-sm font-medium text-primary animate-fade-in-up">
            <Link href="/service-areas" className="hover:underline">
              Service Areas
            </Link>{' '}
            / {area.name}, MT
          </p>

          <h1 className="mt-2 text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Window Cleaning in <span className="text-primary">{area.name}</span>, MT
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Glass Haven Windows serves {area.blurb} with professional residential and commercial
            window cleaning. 5.0-star rated, fully insured, satisfaction guaranteed.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              asChild
              size="lg"
              className="btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href={QUOTE_FORM_URL}>Get Free Quote</a>
            </Button>

            <a
              href={PHONE_LINK}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              or call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Town Photo */}
      <section className="container-content -mt-6 md:-mt-10 relative z-10">
        <div className="glass-card rounded-2xl overflow-hidden aspect-[21/9] relative">
          <Image
            src={area.image}
            alt={`View of ${area.name}, Montana`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Services in {area.name}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From cozy homes to commercial properties, we deliver spotless results tailored to your needs.
            </p>
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

      {/* Local Context — genuine, town-specific content (not a reused template) */}
      <section className="section-padding">
        <div className="container-content max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl text-center">
            Window Cleaning in {area.name}, Montana
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-center">
            {area.localDetail}
          </p>
        </div>
      </section>

      {/* Local Testimonial — only renders for towns with a verified, town-specific review */}
      {townTestimonial && (
        <section className="section-padding bg-muted/50">
          <div className="container-content max-w-2xl">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="flex justify-center">
                <StarRating />
              </div>
              <p className="mt-4 text-lg italic text-foreground">
                &ldquo;{townTestimonial.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {townTestimonial.author}
                {townTestimonial.business ? ` · ${townTestimonial.business}` : ''}
              </p>
              <p className="text-xs text-muted-foreground">Google Review</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTABlock
        variant="glass"
        heading={`Ready for Crystal Clear Windows in ${area.name}?`}
        description="Book your free estimate today and experience the Glass Haven difference."
        buttonText="Schedule Your Estimate"
      />

      {/* Why Trust Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Why {area.name} Trusts Glass Haven
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 text-center card-hover animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas We Serve */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Also Serving the Flathead Valley
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/service-areas/${other.slug}`}
                className="rounded-full border border-border/50 bg-white px-4 py-2 text-sm font-medium text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
              >
                {other.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABlock
        heading="Let&apos;s Get Started"
        description={`Your ${area.name} home or business deserves better. Book your free estimate now.`}
        buttonText="Book Free Estimate"
      />
    </>
  )
}
