import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact-form'

const TITLE = 'Contact Us | Flathead Valley, MT'
const DESCRIPTION =
  'Get in touch with Glass Haven Windows, serving the Flathead Valley, MT. Schedule your free estimate or ask us any questions. Open 8am-6:30pm daily.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${TITLE} | Glass Haven Windows`,
    description: DESCRIPTION,
    url: '/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Glass Haven Windows`,
    description: DESCRIPTION,
  },
}

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'

const contactInfo = [
  {
    title: 'Phone',
    value: '(406) 607-5279',
    href: 'tel:+14066075279',
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
    value: 'glasshavenwindows@gmail.com',
    href: 'mailto:glasshavenwindows@gmail.com',
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
      {/* Header */}
      <section className="hero-gradient section-padding pattern-bg">
        <div className="container-content text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl animate-fade-in-up">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Ready for crystal clear windows? Schedule your free estimate or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>

              <div className="mt-8 space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    className="glass-card rounded-xl p-5 card-hover animate-fade-in-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {item.icon}
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>

                        {item.href ? (
                          <a href={item.href} className="text-primary hover:underline font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}

                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule CTA */}
              <div className="mt-8 glass-card rounded-xl p-6 bg-primary/5">
                <h3 className="text-lg font-semibold">Prefer to Schedule Online?</h3>
                <p className="mt-2 text-muted-foreground">
                  Book your free estimate using our quick form.
                </p>

                <Button asChild className="mt-4 w-full btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer">
                    Schedule Free Estimate
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold">Send Us a Message</h2>
              <p className="mt-3 text-muted-foreground">
                We will get back to you within 24 hours.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-primary">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Let&apos;s Get Started
          </h2>

          <div className="mt-8">
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <a href={QUOTE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Book Free Estimate
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
