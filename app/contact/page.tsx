import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Glass Haven Windows. Schedule your free estimate or ask us any questions. Open 8am-6:30pm daily.',
}

const CALENDLY_URL = 'https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05'

const contactInfo = [
  {
    title: 'Phone',
    value: '(123) 456-7890',
    href: 'tel:+1234567890',
    description: 'Call or text anytime',
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@glasshavenwindows.com',
    href: 'mailto:info@glasshavenwindows.com',
    description: 'We reply within 24 hours',
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: 'Hours',
    value: '8:00am - 6:30pm',
    href: null,
    description: 'Open 7 days a week',
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
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient section-padding">
        <div className="container-content text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Get In Touch
          </h1>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            Ready for crystal clear windows? Schedule your free estimate or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="mt-3 text-muted-foreground">
                We are here to help. Reach out through any of these channels or use our scheduling tool to book your estimate directly.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass-card rounded-xl p-5 card-hover animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-primary hover:underline font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Schedule CTA */}
              <div className="mt-8 glass-card rounded-xl p-6 bg-primary/5">
                <h3 className="text-lg font-semibold text-foreground">
                  Prefer to Schedule Online?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Use our online scheduling tool to book your free estimate at a time that works for you.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-4 w-full btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Free Estimate
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-3 text-muted-foreground">
                Have a question or want more information? Fill out the form and we will get back to you within 24 hours.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-muted/50">
        <div className="container-content">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Service Area
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              We proudly serve homes and businesses throughout the area. Not sure if we cover your location? Just ask!
            </p>
          </div>

          <div className="mt-12 glass-card rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Serving Your Community
            </h3>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              We provide window cleaning services to residential and commercial properties throughout the local area. Contact us to confirm service availability in your neighborhood.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Check Availability
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Let&apos;s Get Started
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            Your crystal clear windows are just one call away. Schedule your free estimate today.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="btn-lift bg-white text-primary hover:bg-white/90"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book Free Estimate
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <a href="tel:+1234567890">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
