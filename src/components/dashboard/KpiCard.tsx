import { Card, CardHeader, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface KpiCardProps {
  label: string
  value: string
  delta?: number
  deltaLabel?: string
  subtitle?: string
  icon?: LucideIcon
  className?: string
  style?: React.CSSProperties
}

export function KpiCard({
  label,
  value,
  delta,
  deltaLabel,
  subtitle,
  icon: Icon,
  className,
  style,
}: KpiCardProps) {
  const deltaVariant = delta !== undefined
    ? delta >= 0 ? 'success' : 'critical'
    : 'neutral'

  return (
    <Card className={cn('flex flex-col justify-between min-h-[160px]', className)} style={style}>
      <CardHeader className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-[18px] h-[18px] text-conatus-700" strokeWidth={1.5} />}
          <CardLabel>{label}</CardLabel>
        </div>
      </CardHeader>

      <div className="flex-1 flex items-center">
        <span className="font-outfit text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
          {value}
        </span>
      </div>

      <div className="flex items-center justify-between mt-3">
        {subtitle && (
          <span className="font-outfit text-[14px] italic text-conatus-700 leading-[1.4] tracking-[0.01em]">
            {subtitle}
          </span>
        )}
        {delta !== undefined && (
          <Badge variant={deltaVariant}>
            {delta >= 0 ? '+' : ''}{delta.toFixed(1)}%{deltaLabel ? ` ${deltaLabel}` : ''}
          </Badge>
        )}
      </div>
    </Card>
  )
}
