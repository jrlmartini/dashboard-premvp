import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { rfmData } from '@/data/mockData'
import { formatCurrency } from '@/lib/utils'

// Build a 5x5 matrix: rows = Frequency (5→1 top to bottom), cols = Recency (1→5 left to right)
// Each cell aggregates count from matching R,F pairs
function buildHeatmapMatrix() {
  const matrix: number[][] = Array.from({ length: 5 }, () => Array(5).fill(0) as number[])

  for (const item of rfmData.segments) {
    const row = 5 - item.frequency // F=5 is row 0 (top), F=1 is row 4 (bottom)
    const col = item.recency - 1 // R=1 is col 0 (left), R=5 is col 4 (right)
    matrix[row][col] += item.count
  }

  return matrix
}

// Cell labels for RFM segments
const segmentLabels: Record<string, string> = {
  '5-5': 'Campeões',
  '5-4': 'Campeões',
  '4-5': 'Fiéis',
  '4-4': 'Fiéis',
  '5-3': 'Novos Valiosos',
  '4-3': 'Potenciais',
  '3-5': 'Potenciais',
  '3-4': 'Potenciais',
  '3-3': 'Precisam Atenção',
  '5-2': 'Novos Recentes',
  '4-2': 'Novos Recentes',
  '2-5': 'Em Risco',
  '2-4': 'Em Risco',
  '2-3': 'Precisam Atenção',
  '2-2': 'Hibernando',
  '1-5': 'Não Perder',
  '1-4': 'Não Perder',
  '1-3': 'Em Risco',
  '1-2': 'Hibernando',
  '1-1': 'Perdidos',
  '2-1': 'Perdidos',
  '3-2': 'Precisam Atenção',
  '3-1': 'Hibernando',
  '5-1': 'Novos',
  '4-1': 'Novos',
}

function getCellColor(count: number): string {
  if (count === 0) return 'rgba(59, 94, 115, 0.15)'
  if (count <= 3) return 'rgba(37, 99, 193, 0.25)'
  if (count <= 6) return 'rgba(37, 99, 193, 0.45)'
  if (count <= 10) return 'rgba(52, 211, 153, 0.4)'
  if (count <= 15) return 'rgba(52, 211, 153, 0.6)'
  return 'rgba(52, 211, 153, 0.8)'
}

function getTextColor(count: number): string {
  if (count <= 3) return '#8f9da7'
  return '#f2f2f2'
}

export function RfmHeatmap() {
  const matrix = buildHeatmapMatrix()
  const recencyLabels = ['1', '2', '3', '4', '5']
  const frequencyLabels = ['5', '4', '3', '2', '1']

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardLabel>Análise de Clientes</CardLabel>
        <CardTitle>Análise RFM — Recência × Frequência</CardTitle>
      </CardHeader>

      <div className="flex gap-6">
        {/* Heatmap grid */}
        <div className="flex-1">
          <div className="flex">
            {/* Y axis label */}
            <div className="flex flex-col justify-center mr-2 -mt-6">
              <span
                className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Frequência
              </span>
            </div>

            <div className="flex-1">
              {/* Y axis labels */}
              <div className="flex">
                <div className="w-8" />
                {recencyLabels.map((label) => (
                  <div
                    key={`r-${label}`}
                    className="flex-1 text-center font-outfit text-[12px] font-medium tracking-[0.04em] text-conatus-700 pb-2"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Grid rows */}
              {matrix.map((row, rowIdx) => (
                <div key={`row-${frequencyLabels[rowIdx]}`} className="flex">
                  <div className="w-8 flex items-center justify-center font-outfit text-[12px] font-medium text-conatus-700">
                    {frequencyLabels[rowIdx]}
                  </div>
                  {row.map((count, colIdx) => {
                    const fScore = 5 - rowIdx
                    const rScore = colIdx + 1
                    const label = segmentLabels[`${fScore}-${rScore}`] || ''
                    return (
                      <div
                        key={`cell-${rowIdx}-${colIdx}`}
                        className="flex-1 aspect-square m-[2px] rounded-[4px] flex flex-col items-center justify-center cursor-default transition-colors duration-150 hover:opacity-80"
                        style={{ backgroundColor: getCellColor(count) }}
                        title={`R:${rScore} F:${fScore} — ${count} clientes — ${label}`}
                      >
                        <span
                          className="font-outfit text-[16px] font-bold tabular-nums"
                          style={{ color: getTextColor(count) }}
                        >
                          {count || '—'}
                        </span>
                        <span
                          className="font-outfit text-[9px] font-medium tracking-[0.02em] mt-0.5 text-center leading-tight px-1"
                          style={{ color: getTextColor(count), opacity: 0.8 }}
                        >
                          {label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              ))}

              {/* X axis label */}
              <div className="text-center mt-2">
                <span className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700">
                  Recência
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary sidebar */}
        <div className="w-[260px] space-y-2">
          <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-3">
            Segmentos
          </p>
          {rfmData.summary.map((seg) => (
            <div
              key={seg.segment}
              className="flex items-center justify-between py-1.5 border-b border-conatus-800/20"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-[2px]"
                  style={{ backgroundColor: seg.color }}
                />
                <span className="font-outfit text-[14px] text-conatus-200">
                  {seg.segment}
                </span>
              </div>
              <div className="text-right">
                <span className="font-outfit text-[14px] text-conatus-200 tabular-nums">
                  {seg.count}
                </span>
                <span className="font-outfit text-[12px] text-conatus-700 ml-2">
                  {formatCurrency(seg.revenue, true)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
