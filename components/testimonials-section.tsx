import { StarRating, TestimonialCard } from '@/components/testimonial-card'
import { testimonials } from '@/lib/testimonials'

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Glass+Haven+Window+Cleaning/@48.07739,-114.235436,9z/data=!3m1!4b1!4m6!3m5!1s0x6eb8308526de2629:0xc2ae3d3c15c6b5a8!8m2!3d48.07739!4d-114.235436!16s%2Fg%2F11zbt4dzdb'

const featured = testimonials.filter((t) => t.featured)

// Mirrors the exact reviews rendered below, on this same page, so the
// review markup reflects real, visible on-page content per Google's
// structured data guidelines (rather than a self-referencing rating alone).
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Glass Haven Window Cleaning',
  review: featured.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.author },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: t.text,
  })),
}

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/50 pattern-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container-content">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground border border-secondary/40 shadow-sm">
            <StarRating />
            5.0 on Google · 17 Reviews
          </div>

          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
            What the Flathead Valley is Saying
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Real reviews from real customers across Bigfork, Kalispell, Whitefish, and beyond.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              author={testimonial.author}
              text={testimonial.text}
              business={testimonial.business}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Read all 17 reviews on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
