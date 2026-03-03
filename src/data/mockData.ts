// Mock data for Conatus Environmental Technologies Executive Dashboard
// Reference date: March 2026

export const revenueData = {
  mtd: {
    actual: 2_840_000,
    goal: 3_100_000,
    average: 2_950_000,
  },
  ytd: {
    actual: 8_520_000,
    goal: 9_300_000,
    average: 8_100_000,
  },
  monthlyTrend: [
    { month: 'Jan', actual: 2_750_000, goal: 3_100_000 },
    { month: 'Fev', actual: 2_930_000, goal: 3_100_000 },
    { month: 'Mar', actual: 2_840_000, goal: 3_100_000 },
  ],
}

export const topCustomers = [
  { rank: 1, name: 'Petrobras S.A.', revenue: 1_250_000, share: 14.7, trend: 5.2 },
  { rank: 2, name: 'Vale S.A.', revenue: 980_000, share: 11.5, trend: -2.1 },
  { rank: 3, name: 'Suzano Papel e Celulose', revenue: 870_000, share: 10.2, trend: 12.3 },
  { rank: 4, name: 'JBS S.A.', revenue: 720_000, share: 8.5, trend: 3.8 },
  { rank: 5, name: 'BRF S.A.', revenue: 650_000, share: 7.6, trend: -0.5 },
  { rank: 6, name: 'Klabin S.A.', revenue: 580_000, share: 6.8, trend: 8.1 },
  { rank: 7, name: 'CMPC Celulose Riograndense', revenue: 490_000, share: 5.8, trend: 15.4 },
  { rank: 8, name: 'Ambev S.A.', revenue: 420_000, share: 4.9, trend: 1.2 },
  { rank: 9, name: 'Braskem S.A.', revenue: 380_000, share: 4.5, trend: -4.3 },
  { rank: 10, name: 'Raízen Energia', revenue: 340_000, share: 4.0, trend: 7.6 },
]

export const cashPosition = {
  current: 4_350_000,
  previous: 3_980_000,
  history: [
    { date: '01/01', value: 3_200_000 },
    { date: '15/01', value: 3_450_000 },
    { date: '01/02', value: 3_980_000 },
    { date: '15/02', value: 4_120_000 },
    { date: '01/03', value: 4_350_000 },
  ],
}

export const operationalCashflow = {
  mtd: {
    inflows: 3_100_000,
    outflows: 2_650_000,
    net: 450_000,
  },
  ytd: {
    inflows: 9_200_000,
    outflows: 7_850_000,
    net: 1_350_000,
  },
  monthly: [
    { month: 'Jan', inflows: 2_900_000, outflows: 2_500_000, net: 400_000 },
    { month: 'Fev', inflows: 3_200_000, outflows: 2_700_000, net: 500_000 },
    { month: 'Mar', inflows: 3_100_000, outflows: 2_650_000, net: 450_000 },
  ],
}

export const ebitdaData = {
  ytd: 1_920_000,
  margin: 22.5,
  monthly: [
    { month: 'Jan', value: 580_000, margin: 21.1 },
    { month: 'Fev', value: 690_000, margin: 23.5 },
    { month: 'Mar', value: 650_000, margin: 22.9 },
  ],
  accumulated: [
    { month: 'Jan', value: 580_000 },
    { month: 'Fev', value: 1_270_000 },
    { month: 'Mar', value: 1_920_000 },
  ],
}

// RFM Analysis data
// Recency: 1 = most recent, 5 = least recent
// Frequency: 1 = least frequent, 5 = most frequent
// Monetary: 1 = lowest value, 5 = highest value
export const rfmData = {
  segments: [
    { recency: 5, frequency: 5, monetary: 5, count: 8, label: 'Campeões' },
    { recency: 4, frequency: 5, monetary: 5, count: 5, label: 'Fiéis' },
    { recency: 5, frequency: 4, monetary: 5, count: 6, label: 'Fiéis' },
    { recency: 5, frequency: 5, monetary: 4, count: 4, label: 'Campeões' },
    { recency: 4, frequency: 4, monetary: 4, count: 12, label: 'Fiéis' },
    { recency: 3, frequency: 4, monetary: 4, count: 9, label: 'Potenciais' },
    { recency: 3, frequency: 3, monetary: 3, count: 18, label: 'Precisam Atenção' },
    { recency: 4, frequency: 3, monetary: 3, count: 11, label: 'Potenciais' },
    { recency: 2, frequency: 3, monetary: 3, count: 7, label: 'Precisam Atenção' },
    { recency: 2, frequency: 2, monetary: 2, count: 15, label: 'Em Risco' },
    { recency: 1, frequency: 2, monetary: 2, count: 10, label: 'Em Risco' },
    { recency: 1, frequency: 1, monetary: 1, count: 6, label: 'Perdidos' },
    { recency: 2, frequency: 1, monetary: 1, count: 8, label: 'Hibernando' },
    { recency: 1, frequency: 1, monetary: 2, count: 4, label: 'Perdidos' },
    { recency: 3, frequency: 5, monetary: 3, count: 3, label: 'Potenciais' },
    { recency: 5, frequency: 3, monetary: 4, count: 7, label: 'Novos Valiosos' },
    { recency: 5, frequency: 2, monetary: 3, count: 5, label: 'Novos Recentes' },
    { recency: 4, frequency: 2, monetary: 2, count: 9, label: 'Novos Recentes' },
    { recency: 3, frequency: 2, monetary: 4, count: 6, label: 'Precisam Atenção' },
    { recency: 2, frequency: 4, monetary: 3, count: 4, label: 'Em Risco' },
    { recency: 1, frequency: 3, monetary: 4, count: 3, label: 'Perdidos' },
    { recency: 4, frequency: 4, monetary: 5, count: 7, label: 'Fiéis' },
    { recency: 3, frequency: 3, monetary: 5, count: 5, label: 'Potenciais' },
    { recency: 2, frequency: 2, monetary: 4, count: 8, label: 'Em Risco' },
    { recency: 1, frequency: 2, monetary: 3, count: 6, label: 'Perdidos' },
  ],
  summary: [
    { segment: 'Campeões', count: 12, revenue: 2_800_000, color: '#34d399' },
    { segment: 'Fiéis', count: 30, revenue: 3_200_000, color: '#36b5ce' },
    { segment: 'Potenciais', count: 23, revenue: 1_450_000, color: '#2563c1' },
    { segment: 'Novos Valiosos', count: 7, revenue: 420_000, color: '#4abe04' },
    { segment: 'Novos Recentes', count: 14, revenue: 380_000, color: '#C7c3fe' },
    { segment: 'Precisam Atenção', count: 31, revenue: 890_000, color: '#FBBF24' },
    { segment: 'Em Risco', count: 37, revenue: 650_000, color: '#fb7185' },
    { segment: 'Hibernando', count: 8, revenue: 120_000, color: '#8b41b2' },
    { segment: 'Perdidos', count: 19, revenue: 210_000, color: '#8f9da7' },
  ],
}

// Revenue by segment (additional card)
export const revenueBySegment = [
  { segment: 'Tratamento de Efluentes', value: 3_200_000, percent: 37.6 },
  { segment: 'Gestão de Resíduos', value: 2_100_000, percent: 24.6 },
  { segment: 'Consultoria Ambiental', value: 1_500_000, percent: 17.6 },
  { segment: 'Monitoramento', value: 980_000, percent: 11.5 },
  { segment: 'Outros Serviços', value: 740_000, percent: 8.7 },
]

// Contracts pipeline (additional card)
export const contractsPipeline = {
  active: 47,
  renewing: 12,
  newProposals: 8,
  atRisk: 3,
  totalValue: 15_600_000,
  avgContractValue: 331_915,
}

// Monthly revenue trend (12 months for context)
export const monthlyRevenueTrend = [
  { month: 'Abr/25', revenue: 2_450_000, goal: 2_800_000 },
  { month: 'Mai/25', revenue: 2_600_000, goal: 2_800_000 },
  { month: 'Jun/25', revenue: 2_780_000, goal: 2_900_000 },
  { month: 'Jul/25', revenue: 2_550_000, goal: 2_900_000 },
  { month: 'Ago/25', revenue: 2_900_000, goal: 2_900_000 },
  { month: 'Set/25', revenue: 3_050_000, goal: 3_000_000 },
  { month: 'Out/25', revenue: 2_870_000, goal: 3_000_000 },
  { month: 'Nov/25', revenue: 3_120_000, goal: 3_000_000 },
  { month: 'Dez/25', revenue: 2_680_000, goal: 3_100_000 },
  { month: 'Jan/26', revenue: 2_750_000, goal: 3_100_000 },
  { month: 'Fev/26', revenue: 2_930_000, goal: 3_100_000 },
  { month: 'Mar/26', revenue: 2_840_000, goal: 3_100_000 },
]
