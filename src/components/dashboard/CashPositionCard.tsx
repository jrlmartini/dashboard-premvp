import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { cashPosition } from '@/data/mockData'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { NEUTRAL, CHART_COLORS } from '@/constants/colors'

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-conatus-950/95 border border-conatus-800 rounded-[6px] px-3 py-2">
      <p className="font-outfit text-[12px] font-medium text-conatus-700 mb-1">{label}</p>
      <p className="font-outfit text-[14px] text-conatus-200">
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  )
}

export function CashPositionCard() {
  const delta = ((cashPosition.current - cashPosition.previous) / cashPosition.previous) * 100

  return (
    <Card>
      <CardHeader>
        <CardLabel>Caixa</CardLabel>
        <CardTitle>Posição de Caixa (BRL)</CardTitle>
      </CardHeader>

      <div className="mb-3">
        <p className="font-outfit text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
          {formatCurrency(cashPosition.current, true)}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-outfit text-[14px] text-conatus-700 italic">
            Mês anterior: {formatCurrency(cashPosition.previous, true)}
          </span>
          <Badge variant={delta >= 0 ? 'success' : 'critical'}>
            {delta >= 0 ? '+' : ''}{delta.toFixed(1)}%
          </Badge>
        </div>
      </div>

      <div className="h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={cashPosition.history} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="cashGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.teal} stopOpacity={0.1} />
                <stop offset="100%" stopColor={CHART_COLORS.teal} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke={NEUTRAL[800]}
              strokeOpacity={0.3}
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tick={{ fill: NEUTRAL[700], fontSize: 12, fontFamily: 'Outfit' }}
              axisLine={{ stroke: NEUTRAL[800], strokeOpacity: 0.5 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: NEUTRAL[700], fontSize: 12, fontFamily: 'Outfit' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={CHART_COLORS.teal}
              strokeWidth={2}
              fill="url(#cashGrad)"
              dot={false}
              activeDot={{ r: 4, fill: CHART_COLORS.teal }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
