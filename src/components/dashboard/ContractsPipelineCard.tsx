import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { contractsPipeline } from '@/data/mockData'
import { FileText, RefreshCw, PlusCircle, AlertTriangle } from 'lucide-react'

interface MetricRowProps {
  icon: React.ElementType
  label: string
  value: string | number
  variant?: 'success' | 'warning' | 'critical' | 'neutral'
}

function MetricRow({ icon: Icon, label, value, variant = 'neutral' }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-conatus-800/20">
      <div className="flex items-center gap-3">
        <Icon className="w-[18px] h-[18px] text-conatus-700" strokeWidth={1.5} />
        <span className="font-outfit text-[16px] text-conatus-200">{label}</span>
      </div>
      <Badge variant={variant}>
        {value}
      </Badge>
    </div>
  )
}

export function ContractsPipelineCard() {
  return (
    <Card>
      <CardHeader>
        <CardLabel>Pipeline</CardLabel>
        <CardTitle>Contratos</CardTitle>
      </CardHeader>

      <div className="mb-4">
        <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700 mb-1">
          Valor total ativo
        </p>
        <p className="font-outfit text-[28px] font-bold leading-[1.1] tracking-[-0.02em] text-conatus-200 tabular-nums">
          {formatCurrency(contractsPipeline.totalValue, true)}
        </p>
        <span className="font-outfit text-[14px] text-conatus-700 italic">
          Ticket médio: {formatCurrency(contractsPipeline.avgContractValue, true)}
        </span>
      </div>

      <div>
        <MetricRow
          icon={FileText}
          label="Contratos ativos"
          value={contractsPipeline.active}
          variant="success"
        />
        <MetricRow
          icon={RefreshCw}
          label="Em renovação"
          value={contractsPipeline.renewing}
          variant="warning"
        />
        <MetricRow
          icon={PlusCircle}
          label="Novas propostas"
          value={contractsPipeline.newProposals}
          variant="neutral"
        />
        <MetricRow
          icon={AlertTriangle}
          label="Em risco"
          value={contractsPipeline.atRisk}
          variant="critical"
        />
      </div>
    </Card>
  )
}
