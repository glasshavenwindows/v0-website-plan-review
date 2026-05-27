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

      {/* Background - Brand mesh gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 0% 0%,   rgba(92, 225, 230, 0.22) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 100% 5%,  rgba(240, 217, 69, 0.14) 0%, transparent 55%),
            radial-gradient(ellipse 80% 70% at 100% 100%, rgba(92, 225, 230, 0.16) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 10% 100%,  rgba(240, 217, 69, 0.09) 0%, transparent 50%),
            #f8f9fa
          `,
        }}
      />

      {/* Decorative soft orbs — add depth to the mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-secondary/18 blur-3xl" />
        <div className="absolute top-1/3 right-1/4  h-72  w-72  rounded-full bg-primary/12  blur-2xl" />
        <div className="absolute bottom-1/4 left-1/3 h-56  w-56  rounded-full bg-secondary/10 blur-2xl" />
      </div>

      {/* Montana — distant mountain range */}
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        aria-hidden="true"
      >
        <path d="M0,180 L0,125 L90,65 L180,105 L300,40 L420,90 L540,30 L660,80 L780,22 L900,75 L1020,38 L1140,82 L1260,48 L1380,70 L1440,50 L1440,180 Z" fill="rgba(92,225,230,0.06)" />
        <path d="M0,180 L0,158 L110,108 L220,142 L340,95 L460,130 L580,102 L700,145 L820,108 L940,142 L1060,115 L1180,148 L1300,118 L1440,135 L1440,180 Z" fill="rgba(92,225,230,0.10)" />
      </svg>

      {/* Montana — left pine trees */}
      <div className="absolute bottom-0 left-0 w-48 h-36 md:w-72 md:h-52 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 210 155" className="w-full h-full" fill="rgba(92,225,230,0.18)">
          <polygon points="32,8  46,38  18,38" />
          <polygon points="32,28 50,60  14,60" />
          <polygon points="32,50 54,88  10,88" />
          <polygon points="32,74 57,116  7,116" />
          <rect x="28" y="116" width="8" height="32" />
          <polygon points="88,35  100,58  76,58" />
          <polygon points="88,52  103,78  73,78" />
          <polygon points="88,70  106,102 70,102" />
          <rect x="85" y="102" width="6" height="46" />
          <polygon points="152,18 165,48 139,48" />
          <polygon points="152,38 168,70 136,70" />
          <polygon points="152,60 170,96 134,96" />
          <polygon points="152,83 173,124 131,124" />
          <rect x="148" y="124" width="8" height="24" />
        </svg>
      </div>

      {/* Montana — right pine trees */}
      <div className="absolute bottom-0 right-0 w-44 h-32 md:w-60 md:h-44 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 190 145" className="w-full h-full" fill="rgba(92,225,230,0.16)">
          <polygon points="40,24  53,50  27,50" />
          <polygon points="40,42  56,72  24,72" />
          <polygon points="40,62  60,96  20,96" />
          <rect x="36" y="96" width="8" height="42" />
          <polygon points="102,5  118,38  86,38" />
          <polygon points="102,28 122,65  82,65" />
          <polygon points="102,52 125,93  79,93" />
          <polygon points="102,78 128,122 76,122" />
          <rect x="98" y="122" width="8" height="16" />
          <polygon points="152,44 164,66 140,66" />
          <polygon points="152,58 166,84 138,84" />
          <polygon points="152,74 169,106 135,106" />
          <rect x="149" y="106" width="6" height="32" />
        </svg>
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

