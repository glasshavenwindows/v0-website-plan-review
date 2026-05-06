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
        'py-16 md:py-20',
        variant === 'glass' && 'bg-primary/5',
        variant === 'minimal' && 'bg-transparent',
        variant === 'default' && 'bg-muted',
        className
      )}
    >
      <div className="container-content text-center">
        {variant === 'glass' ? (
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              {heading}
            </h2>
            <p className="mt-3 text-muted-foreground">{description}</p>
            <Button
              asChild
              size="lg"
              className="mt-6 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
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
              className="mt-6 btn-lift cta-glow bg-primary text-primary-foreground hover:bg-primary/90"
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
