import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type BadgeVariant = 'success' | 'warning' | 'critical' | 'neutral'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-accent-teal/15 text-accent-teal',
  warning: 'bg-accent-amber/15 text-accent-amber',
  critical: 'bg-accent-pink/15 text-accent-pink',
  neutral: 'bg-conatus-800 text-conatus-600',
}

export function Badge({ children, variant = 'neutral', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-[4px] font-outfit text-[12px] font-medium leading-[1.3] tracking-[0.04em]',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
