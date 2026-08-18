'use client'

import { useRef, useState } from 'react'
import { StarRating, TestimonialCard } from '@/components/testimonial-card'
import { testimonials } from '@/lib/testimonials'

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/place/Glass+Haven+Window+Cleaning/@48.07739,-114.235436,9z/data=!3m1!4b1!4m6!3m5!1s0x6eb8308526de2629:0xc2ae3d3c15c6b5a8!8m2!3d48.07739!4d-114.235436!16s%2Fg%2F11zbt4dzdb'

const CARD_GAP_PX = 24 // matches the `gap-6` on the scroll track below

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const total = featured.length

  const cardStep = () => {
    const el = scrollRef.current
    const card = el?.children[0] as HTMLElement | undefined
    return card ? card.getBoundingClientRect().width + CARD_GAP_PX : el?.clientWidth ?? 0
  }

  const goTo = (target: number) => {
    const el = scrollRef.current
    if (!el) return
    const wrapped = ((target % total) + total) % total
    el.scrollTo({ left: wrapped * cardStep(), behavior: 'smooth' })
    setIndex(wrapped)
  }

  const handleScroll = () => {
    const el = scrollRef.current
    const step = cardStep()
    if (!el || !step) return
    setIndex(Math.round(el.scrollLeft / step))
  }

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

        <div className="relative mt-12">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {featured.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.author}
                author={testimonial.author}
                text={testimonial.text}
                business={testimonial.business}
                delay={i * 100}
                className="snap-start shrink-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Read all 17 reviews on Google
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
