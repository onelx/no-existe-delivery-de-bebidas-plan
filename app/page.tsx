import Link from 'next/link'

// Datos embebidos
const businessData = {
  name: "Delivery de Bebidas San Juan",
  model: "ecommerce",
  businessType: "D2C ecommerce con delivery propio + B2B wholesale",
  revenueModel: "Venta transaccional de bebidas con margen bruto del 50%, ticket promedio de $30.000-40.000 en B2C y $100.000+ en B2B",
  scalabilityScore: 6,
  summary: "Este negocio es un ecommerce de delivery de bebidas alcohólicas que opera como primer jugador en el mercado de San Juan, combinando la conveniencia de compra online 24hs con delivery propio en horario extendido."
}

const unitEconomics = {
  cac: 5000,
  ltv: 62500,
  ltvCacRatio: 12.5,
  paybackPeriodMonths: 0.3,
  grossMarginPct: 50,
  churnRatePct: 20
}

const projectionsSummary = {
  breakEvenMonth: 3,
  totalInvestmentNeeded: 1500000,
  month12MRR: 44550000,
  month12Customers: 1188,
  recommendedScenario: "realista"
}

const riskData = {
  overallRisk: "alto",
  biggestThreat: "Que el mercado de San Juan simplemente no tenga el volumen ni el hábito de compra online de bebidas para sostener una operación con $4M de costos fijos mensuales."
}

const canvasSummary = {
  customerSegments: "Particulares 25-45 años + Restaurantes/Bares B2B",
  valueProposition: "Único delivery de bebidas alcohólicas 24hs con packs promocionales",
  channels: "Instagram + WhatsApp + Web",
  revenue: "Margen 50% sobre ventas, ticket $25K-150K"
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}

function getRiskColor(risk: string): string {
  switch (risk) {
    case 'bajo': return 'bg-green-100 text-green-800'
    case 'medio': return 'bg-yellow-100 text-yellow-800'
    case 'alto': return 'bg-red-100 text-red-800'
    case 'crítico': return 'bg-red-200 text-red-900'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{businessData.name}</h1>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                {businessData.model}
              </span>
            </div>
            <p className="text-gray-600">{businessData.businessType}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Nivel de riesgo:</span>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full uppercase ${getRiskColor(riskData.overallRisk)}`}>
              {riskData.overallRisk}
            </span>
          </div>
        </div>
      </div>

      {/* Métricas clave */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">CAC</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(unitEconomics.cac)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">LTV</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(unitEconomics.ltv)}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">LTV/CAC</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">{unitEconomics.ltvCacRatio}x</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Margen Bruto</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{unitEconomics.grossMarginPct}%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Break-even</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">Mes {projectionsSummary.breakEvenMonth}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Inversión Inicial</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{formatCurrency(projectionsSummary.totalInvestmentNeeded)}</p>
        </div>
      </div>

      {/* Resumen ejecutivo */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Resumen Ejecutivo</h2>
        <p className="text-gray-700 leading-relaxed">{businessData.summary}</p>
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm font-medium text-amber-800">⚠️ Mayor amenaza identificada:</p>
          <p className="text-sm text-amber-700 mt-1">{riskData.biggestThreat}</p>
        </div>
      </div>

      {/* Canvas summary cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600">👥</span>
            </div>
            <h3 className="font-semibold text-gray-900">Clientes</h3>
          </div>
          <p className="text-sm text-gray-600">{canvasSummary.customerSegments}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
              <span className="text-emerald-600">💎</span>
            </div>
            <h3 className="font-semibold text-gray-900">Propuesta</h3>
          </div>
          <p className="text-sm text-gray-600">{canvasSummary.valueProposition}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-purple-600">📢</span>
            </div>
            <h3 className="font-semibold text-gray-900">Canales</h3>
          </div>
          <p className="text-sm text-gray-600">{canvasSummary.channels}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600">💰</span>
            </div>
            <h3 className="font-semibold text-gray-900">Ingresos</h3>
          </div>
          <p className="text-sm text-gray-600">{canvasSummary.revenue}</p>
        </div>
      </div>

      {/* Proyecciones destacadas */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-lg font-semibold mb-4">Proyección a 12 meses (Escenario {projectionsSummary.recommendedScenario})</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-emerald-100 text-sm">Facturación Mensual (Mes 12)</p>
            <p className="text-3xl font-bold">{formatCurrency(projectionsSummary.month12MRR)}</p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">Clientes Activos (Mes 12)</p>
            <p className="text-3xl font-bold">{projectionsSummary.month12Customers.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-emerald-100 text-sm">Escalabilidad</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-3 bg-emerald-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white rounded-full" 
                  style={{ width: `${businessData.scalabilityScore * 10}%` }}
                />
              </div>
              <span className="text-xl font-bold">{businessData.scalabilityScore}/10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Links a secciones */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link 
          href="/canvas" 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Business Model Canvas
              </h3>
              <p className="text-sm text-gray-500 mt-1">Visualización completa de los 9 bloques</p>
            </div>
            <span className="text-2xl">📋</span>
          </div>
        </Link>
        <Link 
          href="/projections" 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Proyecciones Financieras
              </h3>
              <p className="text-sm text-gray-500 mt-1">3 escenarios a 12 meses con unit economics</p>
            </div>
            <span className="text-2xl">📊</span>
          </div>
        </Link>
        <Link 
          href="/validation" 
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:border-emerald-300 hover:shadow-md transition-all group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Checklist de Validación
              </h3>
              <p className="text-sm text-gray-500 mt-1">Hipótesis, riesgos y plan de acción</p>
            </div>
            <span className="text-2xl">✅</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
