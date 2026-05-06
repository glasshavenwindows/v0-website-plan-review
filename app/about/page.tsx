import type { Metadata } from 'next'
import { CTABlock } from '@/components/cta-block'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Glass Haven Windows - our story, values, and commitment to delivering crystal clear results for every customer.',
}

const values = [
  {
    title: 'Quality First',
    description:
      'We never cut corners. Every window gets our full attention and expertise.',
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
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    description:
      'We show up on time, every time. Your schedule matters to us.',
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description:
      'No hidden fees, no surprises. Just honest pricing and clear communication.',
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
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Customer Care',
    description:
      'Your satisfaction is our success. We treat every home like our own.',
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '5,000+', label: 'Windows Cleaned' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '7', label: 'Days a Week' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient section-padding pattern-bg">
        <div className="container-content text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            About Glass Haven
          </h1>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            More than just window cleaners. We are your partners in maintaining a beautiful, bright space.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Story Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Glass Haven Windows was founded with a simple belief: everyone deserves to enjoy crystal clear views. What started as a one-person operation has grown into a trusted local business serving homes and businesses throughout the area.
                </p>
                <p>
                  Our founder, Will, noticed that too many window cleaning services were either overpriced, unreliable, or both. He set out to create something different. A company that combines professional expertise with genuine care for every customer.
                </p>
                <p>
                  Today, Glass Haven Windows continues to operate on those founding principles. We invest in the best equipment, use eco-friendly products, and train our team to deliver results that exceed expectations.
                </p>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="glass-card rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <p className="mt-6 text-xl font-semibold text-foreground">Will</p>
                <p className="text-muted-foreground">Founder & Lead Technician</p>
                <p className="mt-4 text-sm text-muted-foreground max-w-xs mx-auto">
                  Professional photo coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary">
        <div className="container-content">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <p className="text-4xl font-bold text-primary-foreground md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Values</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card rounded-xl p-6 text-center card-hover animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Why Customers Trust Us</h2>
              <div className="mt-6 space-y-6">
                {[
                  {
                    title: 'Fully Insured & Bonded',
                    description:
                      'Complete liability coverage and workers compensation means you never have to worry.',
                  },
                  {
                    title: 'Background-Checked Team',
                    description:
                      'Every team member passes thorough background checks before entering your home or business.',
                  },
                  {
                    title: 'Satisfaction Guarantee',
                    description:
                      'Not 100% happy? We come back and make it right, no questions asked.',
                  },
                  {
                    title: 'Eco-Friendly Approach',
                    description:
                      'Our biodegradable cleaning solutions are safe for your family, pets, and the planet.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                          className="h-4 w-4"
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
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <blockquote className="text-lg italic text-foreground">
                &ldquo;Our mission is simple: to bring clarity to your view and a smile to your face. Every window we clean is an opportunity to make someone&apos;s day a little brighter.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Will</p>
                  <p className="text-sm text-muted-foreground">Founder, Glass Haven Windows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock
        variant="glass"
        heading="Ready to Experience the Difference?"
        description="Join hundreds of satisfied customers who trust Glass Haven Windows for crystal clear results."
        buttonText="Get Your Free Estimate"
      />
    </>
  )
}
