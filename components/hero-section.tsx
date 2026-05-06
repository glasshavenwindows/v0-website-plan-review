import { Button } from '@/components/ui/button'

const QUOTE_FORM_URL = 'https://forms.gle/4c7HSYKmWhmjq47B6'

interface HeroSectionProps {
  title?: string
  highlight?: string
  description?: string
  showBadge?: boolean
}

export function HeroSection({
  title = 'Crystal Clear Windows,',
  highlight = 'Every Time',
  description = 'Proudly serving the Flathead Valley. Upload a few photos and receive a fast, accurate window cleaning quote for your home or business.',
  showBadge = true,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-primary/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="container-content relative">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20 text-center md:min-h-[calc(100vh-6rem)] lg:py-32">

          {/* Badge */}
          {showBadge && (
            <div className="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm border border-secondary/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              Now Offering Fast Photo Quotes
            </div>
          )}

          {/* Heading */}
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
            <span className="block text-primary">{highlight}</span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-in-up mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '100ms' }}
          >
            {description}
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: '200ms' }}
          >
            <Button
              asChild
              size="lg"
              className="btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90 px-8 font-semibold"
            >
              <a href={QUOTE_FORM_URL}>
                Get Fast Quote
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary px-8 backdrop-blur-sm"
            >
              <a href="/services">View Services</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="animate-fade-in-up mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/30">
              <span>Fully Insured</span>
            </div>

            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/30">
              <span>Eco-Friendly</span>
            </div>

            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/30">
              <span>100% Satisfaction</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
