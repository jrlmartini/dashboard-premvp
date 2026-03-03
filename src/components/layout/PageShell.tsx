import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

interface PageShellProps {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-conatus-950">
      <Sidebar />
      <main className="ml-[240px] p-8">
        {children}
      </main>
    </div>
  )
}
