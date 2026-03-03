import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Card({ children, className, style }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[8px] bg-conatus-900 p-4 animate-fade-in-up',
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-3', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('font-outfit text-[20px] font-bold leading-[1.3] tracking-[-0.01em] text-conatus-200', className)}>
      {children}
    </h3>
  )
}

interface CardLabelProps {
  children: ReactNode
  className?: string
}

export function CardLabel({ children, className }: CardLabelProps) {
  return (
    <span className={cn('font-outfit text-[12px] font-medium leading-[1.3] tracking-[0.04em] uppercase text-conatus-700', className)}>
      {children}
    </span>
  )
}
