const canvasData = {
  customerSegments: {
    primary: "Particulares de San Juan entre 25-45 años que organizan eventos sociales (cumpleaños, asados, reuniones, previas) y valoran la comodidad de recibir bebidas en su domicilio sin tener que ir a comprar",
    secondary: [
      "Restaurantes, bares y locales gastronómicos de San Juan que necesitan reposición de stock de bebidas con delivery",
      "Organizadores de eventos corporativos y catering que requieren pedidos en volumen con diversidad de opciones",
      "Vinotecas y comercios minoristas que buscan acceso a bodegas locales sin intermediarios"
    ],
    characteristics: [
      "Conectados digitalmente - usan Instagram y compran online con frecuencia",
      "Valoran la inmediatez y la conveniencia sobre el precio más bajo",
      "Consumen productos locales con orgullo regional (vinos y cervezas sanjuaninas)",
      "Picos de demanda en fines de semana, feriados y fechas especiales"
    ]
  },
  valuePropositions: {
    main: "El único servicio de delivery de bebidas alcohólicas en San Juan que te permite armar tu pedido online las 24hs y recibirlo en tu casa con packs promocionales que no encontrás en ningún otro lado",
    secondary: [
      "Packs armados con combinaciones inteligentes (asado completo, fiesta, picada premium) con 15-20% de ahorro vs compra individual",
      "Acceso a bodegas y cervecerías artesanales locales que no tienen distribución en supermercados",
      "Delivery extendido hasta las 2am viernes a domingo para resolver la urgencia de última hora"
    ],
    jobsToBeDone: [
      "Conseguir bebidas para mi evento sin perder tiempo yendo a comprar, cargando peso y haciendo filas",
      "Impresionar a mis invitados con opciones de calidad y variedad que ellos no conocían",
      "Como restaurante, tener un proveedor confiable que me entregue sin tener que ir a buscar"
    ]
  },
  channels: {
    awareness: [
      "Instagram como canal principal de discovery con contenido de lifestyle y momentos de consumo",
      "Recomendación boca a boca post-evento (el que llevó las bebidas queda bien)",
      "Publicidad geolocalizada en Facebook/Instagram para San Juan",
      "Alianzas con bodegas locales que mencionan el servicio en sus redes"
    ],
    evaluation: [
      "Catálogo web con fotos, descripciones y reviews de productos",
      "Packs sugeridos según tipo de evento (calculadora de bebidas por persona)",
      "Stories de Instagram mostrando entregas y testimonios",
      "WhatsApp para consultas y armado de pedidos personalizados"
    ],
    purchase: [
      "Plataforma web con sistema de cuentas, carrito y checkout",
      "WhatsApp para pedidos rápidos y repetición de pedidos anteriores",
      "Llamada telefónica para clientes B2B con cuenta corriente"
    ],
    delivery: [
      "Flota propia de vehículos con cobertura en toda la provincia",
      "Ventana de delivery de 2-3 horas seleccionable por el cliente",
      "Tracking básico vía WhatsApp (salió tu pedido, estamos llegando)"
    ],
    afterSales: [
      "WhatsApp para reclamos y cambios de productos defectuosos",
      "Sistema de puntos o descuento para próxima compra",
      "Encuesta post-compra para mejorar el servicio"
    ]
  },
  customerRelationships: {
    type: "personal",
    description: "Relación híbrida: autoservicio en la web para descubrir y comprar, pero con atención personalizada vía WhatsApp para pedidos especiales, consultas y seguimiento. Para B2B se asigna un ejecutivo de cuenta que gestiona la relación y las condiciones comerciales.",
    retentionMechanisms: [
      "Sistema de cuentas que guarda historial de pedidos para repetición rápida",
      "Programa de lealtad con puntos canjeables por productos o descuentos",
      "Recordatorios automáticos antes de fechas especiales (cumpleaños, aniversarios)",
      "Precios preferenciales y cuenta corriente para clientes B2B frecuentes"
    ]
  },
  revenueStreams: {
    primary: "Venta de bebidas alcohólicas y packs promocionales con margen bruto del 50% sobre costo de compra",
    type: "transactional",
    pricing: "Markup del 100% sobre costo (equivale a 50% de margen bruto). Ticket promedio estimado: $25.000-40.000 para particulares, $80.000-150.000 para B2B. Packs con precio cerrado que incluye ahorro percibido del 15-20%",
    secondary: [
      "Costo de envío para pedidos menores a $30.000 (envío gratis arriba de ese monto)",
      "Venta de hielo, vasos descartables y accesorios con margen mayor",
      "Comisión por referidos de bodegas para degustaciones y eventos privados"
    ]
  },
  keyResources: {
    physical: [
      "Flota de vehículos propios refrigerados para delivery (3-5 unidades)",
      "Depósito con capacidad de almacenamiento de +500 SKUs con control de temperatura",
      "Infraestructura de embalaje (cajas, relleno protector, bolsas térmicas)"
    ],
    intellectual: [
      "Base de datos de clientes con historial de compras y preferencias",
      "Marca posicionada como el delivery de bebidas de San Juan",
      "Relaciones exclusivas o preferenciales con bodegas y cervecerías locales"
    ],
    human: [
      "Equipo de delivery capacitado en manejo de productos frágiles y atención al cliente",
      "Community manager para gestión de Instagram y WhatsApp",
      "Responsable de compras y relación con proveedores"
    ],
    financial: [
      "Capital de trabajo para mantener stock de $5-8M en productos",
      "Línea de crédito con proveedores (pago a 30-60 días)"
    ]
  },
  keyActivities: [
    "Gestión de compras y relaciones con bodegas y cervecerías para asegurar stock y exclusividad",
    "Operación de delivery 9am-9pm (extendido hasta 2am viernes a domingo) con logística eficiente",
    "Curación de catálogo y armado de packs promocionales con pricing estratégico",
    "Gestión de la plataforma web: catálogo actualizado, sistema de cuentas, checkout funcional",
    "Marketing digital en Instagram: contenido, pauta, respuesta a consultas",
    "Embalaje seguro de productos para evitar roturas en transporte"
  ],
  keyPartners: [
    { partner: "Bodegas de vino de San Juan (Callia, Pyros, Graffigna, etc.)", relationship: "proveedor", value: "Acceso a precios de distribuidor y productos exclusivos no disponibles en retail" },
    { partner: "Cervecerías artesanales locales", relationship: "aliado", value: "Productos diferenciados que generan curiosidad y permiten márgenes más altos" },
    { partner: "Distribuidoras mayoristas de bebidas nacionales e importadas", relationship: "proveedor", value: "Stock de marcas masivas (Fernet, vodka, whisky) con precios competitivos" },
    { partner: "Proveedores de packaging y embalaje", relationship: "proveedor", value: "Materiales para protección de productos en delivery" },
    { partner: "Procesadores de pago (MercadoPago, tarjetas)", relationship: "proveedor", value: "Infraestructura de cobro online y financiación en cuotas" }
  ],
  costStructure: {
    fixedCosts: [
      "Sueldos del equipo: $3.000.000/mes (delivery, administración, community manager)",
      "Impuestos, seguros y gastos administrativos: $1.000.000/mes",
      "Alquiler de depósito y servicios: $300.000-500.000/mes",
      "Mantenimiento y seguro de flota de vehículos: $200.000-400.000/mes",
      "Plataforma web (hosting, dominio, mantenimiento): $50.000-100.000/mes"
    ],
    variableCosts: [
      "Costo de mercadería vendida (50% del precio de venta)",
      "Combustible para delivery (escala con cantidad de pedidos)",
      "Packaging y materiales de embalaje por pedido",
      "Comisiones de procesadores de pago (3-5% del total)",
      "Pauta publicitaria en Instagram/Facebook"
    ],
    biggestCost: "Costo de mercadería vendida - representa el 50% de cada peso facturado, seguido por sueldos como principal costo fijo",
    costDriven: false
  },
  summary: "Este negocio es un ecommerce de delivery de bebidas alcohólicas que opera como primer jugador en el mercado de San Juan, combinando la conveniencia de compra online 24hs con delivery propio en horario extendido. La propuesta de valor se centra en packs promocionales con 50% de margen, diversidad de stock (incluyendo bodegas y cervecerías locales con acceso exclusivo), y la resolución de un dolor claro: no existe otra forma de pedir bebidas a domicilio en la provincia.",
  businessType: "D2C ecommerce con delivery propio + B2B wholesale",
  revenueModel: "Venta transaccional de bebidas con margen bruto del 50%, ticket promedio de $30.000-40.000 en B2C y $100.000+ en B2B, con ingresos adicionales por envío y accesorios.",
  scalabilityScore: 6,
  scalabilityRationale: "Escalabilidad moderada: el modelo depende de logística física propia que requiere inversión lineal para crecer (más vehículos, más personal), pero dentro de San Juan puede capturar market share rápido al ser monopolio; la expansión a otras provincias requeriría replicar toda la operación."
}

export default function CanvasPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business Model Canvas</h1>
          <p className="text-gray-600 mt-1">{canvasData.businessType}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500">Escalabilidad</p>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full" 
                  style={{ width: `${canvasData.scalabilityScore * 10}%` }}
                />
              </div>
              <span className="font-bold text-emerald-600">{canvasData.scalabilityScore}/10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Row 1 */}
        {/* Key Partners */}
        <div className="lg:row-span-2 bg-purple-50 border border-purple-200 rounded-xl p-4">
          <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
            <span className="text-lg">🤝</span> Socios Clave
          </h3>
          <ul className="space-y-3">
            {canvasData.keyPartners.map((partner, i) => (
              <li key={i} className="text-sm">
                <p className="font-medium text-purple-800">{partner.partner}</p>
                <p className="text-purple-600 text-xs mt-0.5">{partner.value}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Activities */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4">
          <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
            <span className="text-lg">⚡</span> Actividades Clave
          </h3>
          <ul className="space-y-2">
            {canvasData.keyActivities.slice(0, 4).map((activity, i) => (
              <li key={i} className="text-xs text-indigo-700 flex items-start gap-1.5">
                <span className="text-indigo-400 mt-0.5">•</span>
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Value Proposition */}
        <div className="lg:row-span-2 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h3 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
            <span className="text-lg">💎</span> Propuesta de Valor
          </h3>
          <p className="text-sm text-emerald-800 font-medium mb-3">{canvasData.valuePropositions.main}</p>
          <div className="space-y-2">
            {canvasData.valuePropositions.secondary.map((prop, i) => (
              <p key={i} className="text-xs text-emerald-700 flex items-start gap-1.5">
                <span className="text-emerald-400 mt-0.5">✓</span>
                {prop}
              </p>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-emerald-200">
            <p className="text-xs font-medium text-emerald-900">Jobs to be Done:</p>
            <ul className="mt-1.5 space-y-1">
              {canvasData.valuePropositions.jobsToBeDone.map((job, i) => (
                <li key={i} className="text-xs text-emerald-700">• {job}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Customer Relationships */}
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
          <h3 className="font-semibold text-pink-900 mb-3 flex items-center gap-2">
            <span className="text-lg">❤️</span> Relación con Clientes
          </h3>
          <p className="text-xs text-pink-700 mb-2">{canvasData.customerRelationships.description}</p>
          <ul className="space-y-1">
            {canvasData.customerRelationships.retentionMechanisms.slice(0, 3).map((mech, i) => (
              <li key={i} className="text-xs text-pink-600 flex items-start gap-1.5">
                <span className="text-pink-400 mt-0.5">•</span>
                {mech}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Segments */}
        <div className="lg:row-span-2 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <span className="text-lg">👥</span> Segmentos de Clientes
          </h3>
          <div className="mb-3">
            <p className="text-xs font-medium text-blue-900">Primario:</p>
            <p className="text-xs text-blue-700 mt-1">{canvasData.customerSegments.primary}</p>
          </div>
          <div className="mb-3">
            <p className="text-xs font-medium text-blue-900">Secundarios:</p>
            <ul className="mt-1 space-y-1">
              {canvasData.customerSegments.secondary.map((seg, i) => (
                <li key={i} className="text-xs text-blue-700">• {seg}</li>
              ))}
            </ul>
          </div>
          <div className="pt-2 border-t border-blue-200">
            <p className="text-xs font-medium text-blue-900">Características:</p>
            <ul className="mt-1 space-y-1">
              {canvasData.customerSegments.characteristics.map((char, i) => (
                <li key={i} className="text-xs text-blue-600">✓ {char}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Resources */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
            <span className="text-lg">🏗️</span> Recursos Clave
          </h3>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium text-orange-800">Físicos:</p>
              <p className="text-xs text-orange-600">{canvasData.keyResources.physical[0]}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-orange-800">Intelectuales:</p>
              <p className="text-xs text-orange-600">{canvasData.keyResources.intellectual[1]}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-orange-800">Humanos:</p>
              <p className="text-xs text-orange-600">{canvasData.keyResources.human[0]}</p>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4">
          <h3 className="font-semibold text-cyan-900 mb-3 flex items-center gap-2">
            <span className="text-lg">📢</span> Canales
          </h3>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium text-cyan-800">Awareness:</p>
              <p className="text-xs text-cyan-600">{canvasData.channels.awareness[0]}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-cyan-800">Compra:</p>
              <p className="text-xs text-cyan-600">{canvasData.channels.purchase[0]}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-cyan-800">Delivery:</p>
              <p className="text-xs text-cyan-600">{canvasData.channels.delivery[0]}</p>
            </div>
          </div>
        </div>

        {/* Row 2 - Cost Structure and Revenue Streams */}
        {/* Cost Structure */}
        <div className="lg:col-span-2 bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
            <span className="text-lg">💸</span> Estructura de Costos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium text-red-800 mb-2">Costos Fijos:</p>
              <ul className="space-y-1">
                {canvasData.costStructure.fixedCosts.slice(0, 3).map((cost, i) => (
                  <li key={i} className="text-xs text-red-600 flex items-start gap-1.5">
                    <span className="text-red-400 mt-0.5">•</span>
                    {cost}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium text-red-800 mb-2">Costos Variables:</p>
              <ul className="space-y-1">
                {canvasData.costStructure.variableCosts.slice(0, 3).map((cost, i) => (
                  <li key={i} className="text-xs text-red-600 flex items-start gap-1.5">
                    <span className="text-red-400 mt-0.5">•</span>
                    {cost}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-red-700 mt-3 pt-2 border-t border-red-200">
            <strong>Mayor costo:</strong> {canvasData.costStructure.biggestCost}
          </p>
        </div>

        {/* Revenue Streams */}
        <div className="lg:col-span-3 bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
            <span className="text-lg">💰</span> Fuentes de Ingresos
          </h3>
          <p className="text-sm text-green-800 font-medium mb-2">{canvasData.revenueStreams.primary}</p>
          <p className="text-xs text-green-700 mb-3">{canvasData.revenueStreams.pricing}</p>
          <div>
            <p className="text-xs font-medium text-green-800 mb-1">Ingresos secundarios:</p>
            <ul className="space-y-1">
              {canvasData.revenueStreams.secondary.map((rev, i) => (
                <li key={i} className="text-xs text-green-600 flex items-start gap-1.5">
                  <span className="text-green-400 mt-0.5">+</span>
                  {rev}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Resumen del Modelo</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{canvasData.summary}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-900">Modelo de Ingresos</p>
            <p className="text-sm text-gray-600 mt-1">{canvasData.revenueModel}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-900">Escalabilidad</p>
            <p className="text-sm text-gray-600 mt-1">{canvasData.scalabilityRationale}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
