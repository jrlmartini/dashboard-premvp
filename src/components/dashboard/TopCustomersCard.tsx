import { Card, CardHeader, CardTitle, CardLabel } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { topCustomers } from '@/data/mockData'

export function TopCustomersCard() {
  return (
    <Card>
      <CardHeader>
        <CardLabel>Clientes</CardLabel>
        <CardTitle>Top 10 Clientes — YTD</CardTitle>
      </CardHeader>

      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-conatus-800/50">
              <th className="text-left px-3 py-2 font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-600 w-8">
                #
              </th>
              <th className="text-left px-3 py-2 font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-600">
                Cliente
              </th>
              <th className="text-right px-3 py-2 font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-600">
                Receita
              </th>
              <th className="text-right px-3 py-2 font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-600">
                Part.
              </th>
              <th className="text-right px-3 py-2 font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-600">
                Var.
              </th>
            </tr>
          </thead>
          <tbody>
            {topCustomers.map((customer) => (
              <tr
                key={customer.rank}
                className="border-t border-conatus-800/20 hover:bg-conatus-800/30 transition-colors duration-150"
              >
                <td className="px-3 py-2.5 font-outfit text-[16px] text-conatus-700 tabular-nums">
                  {customer.rank}
                </td>
                <td className="px-3 py-2.5 font-outfit text-[16px] text-conatus-200">
                  {customer.name}
                </td>
                <td className="px-3 py-2.5 font-outfit text-[16px] text-conatus-200 text-right tabular-nums">
                  {formatCurrency(customer.revenue, true)}
                </td>
                <td className="px-3 py-2.5 font-outfit text-[16px] text-conatus-600 text-right tabular-nums">
                  {customer.share}%
                </td>
                <td className="px-3 py-2.5 text-right">
                  <Badge variant={customer.trend >= 0 ? 'success' : 'critical'}>
                    {customer.trend >= 0 ? '+' : ''}{customer.trend.toFixed(1)}%
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
