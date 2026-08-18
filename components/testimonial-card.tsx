import { cn } from '@/lib/utils'

export function StarRating({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-0.5 text-secondary', className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.959c.3.92-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.96a1 1 0 00-.363-1.117L2.062 9.386c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.689l1.286-3.958z" />
        </svg>
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  author: string
  text: string
  business?: string
  className?: string
  delay?: number
}

export function TestimonialCard({ author, text, business, className, delay = 0 }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 md:p-7 card-hover animate-fade-in-up opacity-0 flex flex-col',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <StarRating />

      <p className="mt-4 flex-1 text-foreground">&ldquo;{text}&rdquo;</p>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-sm font-semibold text-primary">
          {author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">
            {business ? `${business} · ` : ''}Google Review
          </p>
        </div>
      </div>
    </div>
  )
}
