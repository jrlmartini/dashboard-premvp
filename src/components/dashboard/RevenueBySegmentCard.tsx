import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { formatCurrency } from '@/lib/utils'
import { revenueBySegment } from '@/data/mockData'
import { CHART_SERIES } from '@/constants/colors'

export function RevenueBySegmentCard() {
  const maxValue = Math.max(...revenueBySegment.map((s) => s.value))

  return (
    <Card>
      <CardHeader>
        <CardLabel>Segmentos</CardLabel>
        <CardTitle>Receita por Segmento — YTD</CardTitle>
      </CardHeader>

      <div className="space-y-3">
        {revenueBySegment.map((segment, i) => (
          <div key={segment.segment}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-outfit text-[14px] text-conatus-200">
                {segment.segment}
              </span>
              <div className="flex items-center gap-3">
                <span className="font-outfit text-[14px] text-conatus-600 tabular-nums">
                  {segment.percent}%
                </span>
                <span className="font-outfit text-[14px] font-medium text-conatus-200 tabular-nums w-[80px] text-right">
                  {formatCurrency(segment.value, true)}
                </span>
              </div>
            </div>
            <div className="h-2 bg-conatus-800/30 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${(segment.value / maxValue) * 100}%`,
                  backgroundColor: CHART_SERIES[i % CHART_SERIES.length],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
