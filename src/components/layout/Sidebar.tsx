import {
  LayoutDashboard,
  DollarSign,
  Users,
  BarChart3,
  FileText,
  Settings,
  TrendingUp,
  Leaf,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  icon: React.ElementType
  label: string
  active?: boolean
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Painel Executivo', active: true },
  { icon: DollarSign, label: 'Financeiro' },
  { icon: TrendingUp, label: 'Receitas' },
  { icon: Users, label: 'Clientes' },
  { icon: BarChart3, label: 'Operações' },
  { icon: FileText, label: 'Contratos' },
  { icon: Settings, label: 'Configurações' },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-conatus-950 flex flex-col z-50">
      {/* Logo */}
      <div className="px-6 py-6 flex items-center gap-2">
        <Leaf className="w-6 h-6 text-accent-teal" strokeWidth={1.5} />
        <span className="font-outfit text-[18px] font-semibold text-conatus-200 tracking-[-0.01em]">
          Conatus
        </span>
      </div>

      {/* Divider */}
      <div className="mx-4 border-t border-conatus-800/20" />

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              'w-full flex items-center gap-3 px-4 py-2 h-10 rounded-[6px] font-outfit text-[16px] leading-[1.5] transition-colors duration-150',
              item.active
                ? 'text-accent-teal border-l-2 border-accent-teal bg-transparent'
                : 'text-conatus-700 hover:bg-conatus-800/30'
            )}
          >
            <item.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mx-4 border-t border-conatus-800/20" />
      <div className="px-6 py-4">
        <p className="font-outfit text-[12px] font-medium tracking-[0.04em] uppercase text-conatus-700">
          Conatus Environmental
        </p>
        <p className="font-outfit text-[14px] text-conatus-600 mt-1">
          v0.1.0 — Mockup
        </p>
      </div>
    </aside>
  )
}
