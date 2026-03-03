import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { operationalCashflow } from '@/data/mockData'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
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
        const labels: Record<string, string> = { inflows: 'Entradas', outflows: 'Saídas', net: 'Líquido' }
        return (
          <p key={entry.dataKey} className="font-outfit text-[14px] text-conatus-200">
            {labels[entry.dataKey]}: {formatCurrency(entry.value)}
          </p>
        )
      })}
    </div>
  )
}

export function OperationalCashflowCard() {
  return (
    <Card>
      <CardHeader>
        <CardLabel>Fluxo de caixa</CardLabel>
        <CardTitle>Geração de Caixa Operacional</CardTitle>
      </CardHeader>

      {/* KPI summary */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            MTD Líquido
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
            {formatCurrency(operationalCashflow.mtd.net, true)}
          </p>
          <Badge variant="success" className="mt-1">
            +{((operationalCashflow.mtd.net / operationalCashflow.mtd.inflows) * 100).toFixed(1)}% margem
          </Badge>
        </div>
        <div>
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
            YTD Líquido
          </p>
          <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
            {formatCurrency(operationalCashflow.ytd.net, true)}
          </p>
          <Badge variant="success" className="mt-1">
            +{((operationalCashflow.ytd.net / operationalCashflow.ytd.inflows) * 100).toFixed(1)}% margem
          </Badge>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={operationalCashflow.monthly} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
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
            <Bar dataKey="inflows" fill={CHART_COLORS.teal} radius={[4, 4, 0, 0]} barSize={24} name="Entradas" />
            <Bar dataKey="outflows" fill={CHART_COLORS.cyan} radius={[4, 4, 0, 0]} barSize={24} name="Saídas" />
            <Bar dataKey="net" fill={CHART_COLORS.blue} radius={[4, 4, 0, 0]} barSize={24} name="Líquido" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: CHART_COLORS.teal }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Entradas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: CHART_COLORS.cyan }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Saídas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: CHART_COLORS.blue }} />
          <span className="font-outfit text-[14px] text-conatus-700 italic">Líquido</span>
        </div>
      </div>
    </Card>
  )
}
