import { PageShell } from '@/components/layout/PageShell'
import { RevenueCard } from '@/components/dashboard/RevenueCard'
import { TopCustomersCard } from '@/components/dashboard/TopCustomersCard'
import { CashPositionCard } from '@/components/dashboard/CashPositionCard'
import { OperationalCashflowCard } from '@/components/dashboard/OperationalCashflowCard'
import { EbitdaCard } from '@/components/dashboard/EbitdaCard'
import { RfmHeatmap } from '@/components/dashboard/RfmHeatmap'
import { RevenueBySegmentCard } from '@/components/dashboard/RevenueBySegmentCard'
import { ContractsPipelineCard } from '@/components/dashboard/ContractsPipelineCard'
import { KpiCard } from '@/components/dashboard/KpiCard'
import { DollarSign, Wallet, TrendingUp, Target } from 'lucide-react'
import { revenueData, cashPosition, operationalCashflow, ebitdaData } from '@/data/mockData'
import { formatCurrency } from '@/lib/utils'

function App() {
  return (
    <PageShell>
      {/* Page header */}
      <div className="mb-8">
        <h1 className="font-outfit text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-conatus-200">
          Painel Executivo
        </h1>
        <p className="font-outfit text-[14px] italic text-conatus-700 leading-[1.4] tracking-[0.01em] mt-1">
          Março 2026 — Dados atualizados em 03/03/2026 às 09:00
        </p>
      </div>

      {/* KPI Summary Row */}
      <div className="grid grid-cols-4 gap-5 mb-5">
        <KpiCard
          label="Receita MTD"
          value={formatCurrency(revenueData.mtd.actual, true)}
          delta={((revenueData.mtd.actual - revenueData.mtd.goal) / revenueData.mtd.goal) * 100}
          deltaLabel="vs meta"
          subtitle="Meta: R$ 3,1M"
          icon={DollarSign}
          style={{ animationDelay: '0ms' }}
        />
        <KpiCard
          label="Caixa Disponível"
          value={formatCurrency(cashPosition.current, true)}
          delta={((cashPosition.current - cashPosition.previous) / cashPosition.previous) * 100}
          deltaLabel="vs mês ant."
          icon={Wallet}
          style={{ animationDelay: '50ms' }}
        />
        <KpiCard
          label="Geração Caixa Op. YTD"
          value={formatCurrency(operationalCashflow.ytd.net, true)}
          delta={(operationalCashflow.ytd.net / operationalCashflow.ytd.inflows) * 100}
          deltaLabel="margem"
          icon={TrendingUp}
          style={{ animationDelay: '100ms' }}
        />
        <KpiCard
          label="EBITDA YTD"
          value={formatCurrency(ebitdaData.ytd, true)}
          delta={ebitdaData.margin}
          deltaLabel="margem"
          subtitle="Acumulado 3 meses"
          icon={Target}
          style={{ animationDelay: '150ms' }}
        />
      </div>

      {/* Revenue chart (wide) + Cash Position */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        <RevenueCard />
        <CashPositionCard />
      </div>

      {/* EBITDA + Operational Cashflow */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        <EbitdaCard />
        <OperationalCashflowCard />
      </div>

      {/* Top Customers + Segment + Contracts */}
      <div className="grid grid-cols-3 gap-5 mb-5">
        <TopCustomersCard />
        <RevenueBySegmentCard />
        <ContractsPipelineCard />
      </div>

      {/* RFM Heatmap (full width) */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        <RfmHeatmap />
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-conatus-800/20">
        <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700">
          Conatus Environmental Technologies — Painel Executivo v0.1.0 — Mockup com dados simulados
        </p>
      </div>
    </PageShell>
  )
}

export default App
