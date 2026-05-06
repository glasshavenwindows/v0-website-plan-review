import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
  delay?: number
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group rounded-xl bg-white p-6 shadow-sm border border-border/50 card-hover animate-fade-in-up opacity-0 hover:border-primary/30 transition-colors',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
