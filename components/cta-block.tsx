import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CALENDLY_URL = 'https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05'

interface CTABlockProps {
  heading?: string
  description?: string
  buttonText?: string
  variant?: 'default' | 'glass' | 'minimal'
  className?: string
}

export function CTABlock({
  heading = 'Ready to See the Difference?',
  description = 'Schedule your free estimate today.',
  buttonText = 'Get Free Estimate',
  variant = 'default',
  className,
}: CTABlockProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-20 relative overflow-hidden',
        variant === 'glass' && 'bg-gradient-to-br from-primary/10 via-background to-secondary/10',
        variant === 'minimal' && 'bg-transparent',
        variant === 'default' && 'bg-muted pattern-bg',
        className
      )}
    >
      {/* Decorative elements */}
      {variant === 'glass' && (
        <>
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary/20 blur-3xl" />
        </>
      )}

      <div className="container-content text-center relative">
        {variant === 'glass' ? (
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border-2 border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -mr-16 -mt-16" />
            <h2 className="text-2xl font-bold text-foreground md:text-3xl relative">
              {heading}
            </h2>
            <p className="mt-3 text-muted-foreground relative">{description}</p>
            <Button
              asChild
              size="lg"
              className="mt-6 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold relative"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            </Button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              {description}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            </Button>
          </>
        )}
      </div>
    </section>
  )
}
