import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { revenueData, monthlyRevenueTrend } from '@/data/mockData'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts'
import { NEUTRAL, CHART_COLORS } from '@/constants/colors'

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) {
  if (!active || !payload) return null
  return (
    <div className="bg-conatus-950/95 border border-conatus-800 rounded-[6px] px-3 py-2">
      <p className="font-outfit text-[12px] font-medium text-conatus-700 mb-1">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="font-outfit text-[14px] text-conatus-200">
          {entry.dataKey === 'revenue' ? 'Realizado' : 'Meta'}: {formatCurrency(entry.value)}
        </p>
      ))}
    </div>
  )
}

export function RevenueCard() {
  const mtdDelta = ((revenueData.mtd.actual - revenueData.mtd.goal) / revenueData.mtd.goal) * 100
  const ytdDelta = ((revenueData.ytd.actual - revenueData.ytd.goal) / revenueData.ytd.goal) * 100

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardLabel>Receita</CardLabel>
        <CardTitle>Faturamento — Tendência 12 meses</CardTitle>
      </CardHeader>

      {/* KPI row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            MTD (Março)
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
            {formatCurrency(revenueData.mtd.actual, true)}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-outfit text-[14px] text-conatus-700 italic">
              Meta: {formatCurrency(revenueData.mtd.goal, true)}
            </span>
            <Badge variant={mtdDelta >= 0 ? 'success' : 'critical'}>
              {mtdDelta >= 0 ? '+' : ''}{mtdDelta.toFixed(1)}%
            </Badge>
          </div>
        </div>

        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            YTD
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
            {formatCurrency(revenueData.ytd.actual, true)}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="font-outfit text-[14px] text-conatus-700 italic">
              Meta: {formatCurrency(revenueData.ytd.goal, true)}
            </span>
            <Badge variant={ytdDelta >= 0 ? 'success' : 'critical'}>
              {ytdDelta >= 0 ? '+' : ''}{ytdDelta.toFixed(1)}%
            </Badge>
          </div>
        </div>

        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            Média Mensal
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
            {formatCurrency(revenueData.mtd.average, true)}
          </p>
          <span className="font-outfit text-[14px] text-conatus-700 italic">
            Últimos 12 meses
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyRevenueTrend} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.blue} stopOpacity={0.1} />
                <stop offset="100%" stopColor={CHART_COLORS.blue} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="4 4"
              stroke={NEUTRAL[800]}
              strokeOpacity={0.3}
              vertical={false}
            />
            <XAxis
              dataKey="month"
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
            <ReferenceLine
              y={3_100_000}
              stroke={NEUTRAL[700]}
              strokeDasharray="6 3"
              strokeOpacity={0.5}
              label={{
                value: 'Meta',
                position: 'right',
                fill: NEUTRAL[700],
                fontSize: 12,
                fontFamily: 'Outfit',
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke={CHART_COLORS.blue}
              strokeWidth={2}
              fill="url(#revenueGrad)"
              dot={false}
              activeDot={{ r: 4, fill: CHART_COLORS.blue }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] rounded-full" style={{ backgroundColor: CHART_COLORS.blue }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Realizado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] rounded-full border-t border-dashed" style={{ borderColor: NEUTRAL[700] }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Meta Runrate</span>
        </div>
      </div>
    </Card>
  )
}
