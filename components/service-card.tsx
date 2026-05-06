import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const CALENDLY_URL = 'https://calendly.com/glasshavenwindows/estimate?back=1&month=2026-05'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features?: string[]
  className?: string
  delay?: number
  showCTA?: boolean
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  className,
  delay = 0,
  showCTA = false,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 md:p-8 card-hover animate-fade-in-up opacity-0 border-l-4 border-l-primary',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Icon */}
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mt-4 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>

      {/* Features List */}
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg
                className="h-4 w-4 text-primary shrink-0"
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
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Optional CTA */}
      {showCTA && (
        <Button
          asChild
          variant="outline"
          className="mt-6 w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Get Estimate
          </a>
        </Button>
      )}
    </div>
  )
}
