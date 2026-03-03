import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { ebitdaData } from '@/data/mockData'
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { NEUTRAL, CHART_COLORS } from '@/constants/colors'

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }>; label?: string }) {
  if (!active || !payload) return null
  return (
    <div className="bg-conatus-950/95 border border-conatus-800 rounded-[6px] px-3 py-2">
      <p className="font-outfit text-[12px] font-medium text-conatus-700 mb-1">{label}</p>
      {payload.map((entry) => {
        const labels: Record<string, string> = { value: 'Mensal', accumulated: 'Acumulado', margin: 'Margem' }
        const format = entry.dataKey === 'margin'
          ? `${entry.value.toFixed(1)}%`
          : formatCurrency(entry.value)
        return (
          <p key={entry.dataKey} className="font-outfit text-[14px] text-conatus-200">
            {labels[entry.dataKey]}: {format}
          </p>
        )
      })}
    </div>
  )
}

// Merge monthly with accumulated for chart
const chartData = ebitdaData.monthly.map((m, i) => ({
  ...m,
  accumulated: ebitdaData.accumulated[i].value,
}))

export function EbitdaCard() {
  return (
    <Card>
      <CardHeader>
        <CardLabel>Lucratividade</CardLabel>
        <CardTitle>EBITDA — Acumulado YTD</CardTitle>
      </CardHeader>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            EBITDA YTD
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
            {formatCurrency(ebitdaData.ytd, true)}
          </p>
        </div>
        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            Margem EBITDA
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-accent-teal tabular-nums">
            {ebitdaData.margin}%
          </p>
          <Badge variant="success" className="mt-1">Saudável</Badge>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
              yAxisId="value"
              tick={{ fill: NEUTRAL[700], fontSize: 12, fontFamily: 'Outfit' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
            />
            <YAxis
              yAxisId="margin"
              orientation="right"
              tick={{ fill: NEUTRAL[700], fontSize: 12, fontFamily: 'Outfit' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
              domain={[0, 30]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              yAxisId="value"
              dataKey="value"
              fill={CHART_COLORS.blue}
              radius={[4, 4, 0, 0]}
              barSize={32}
              name="Mensal"
            />
            <Line
              yAxisId="value"
              type="monotone"
              dataKey="accumulated"
              stroke={CHART_COLORS.teal}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: CHART_COLORS.teal }}
              name="Acumulado"
            />
            <Line
              yAxisId="margin"
              type="monotone"
              dataKey="margin"
              stroke={CHART_COLORS.cyan}
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{ r: 4, fill: CHART_COLORS.cyan }}
              name="Margem %"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: CHART_COLORS.blue }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Mensal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px]" style={{ backgroundColor: CHART_COLORS.teal }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Acumulado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-[2px] border-t border-dashed" style={{ borderColor: CHART_COLORS.cyan }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Margem %</span>
        </div>
      </div>
    </Card>
  )
}
