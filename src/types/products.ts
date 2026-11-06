/**
 * Contratos de tipos para el catálogo de productos comerciales de NOLBVIA Development.
 * Diseñado bajo principios estrictos de tipado para e-commerce seguro y escalable.
 */

export type ProductAvailability = 
  | 'PRODUCTION_AVAILABLE' // Producto activo, desplegado y disponible
  | 'ACTIVE_DEVELOPMENT'   // En desarrollo activo de ingeniería
  | 'ENGINEERING_LAB'      // Fase de prototipo e investigación técnica

export type AccessModel =
  | 'SELF_HOSTED'   // Licencia de código abierto / despliegue autónomo
  | 'CLOUD_SAAS'    // Servicio en la nube multi-tenant
  | 'ENTERPRISE'    // Despliegue dedicado o a medida para instituciones
  | 'EARLY_ACCESS'  // Acceso previo para pruebas de integración

export type ProductTier = {
  id: string
  name: string
  price: number | 'GRATUITO' | 'POR COTIZAR'
  currency?: 'USD' | 'COP'
  billingPeriod?: 'mensual' | 'anual' | 'pago único' | 'código abierto' | 'acceso temprano' | 'beta privada'
  features: readonly string[]
  isPopular?: boolean
  ctaLabel: string
}

export type DigitalProduct = {
  id: string
  slug: string
  name: string
  version: string
  tagline: string
  category: string
  icon: string
  problemStatement: string
  solutionStatement: string
  targetAudience: readonly string[]
  keyFeatures: readonly string[]
  techStack: readonly string[]
  availability: ProductAvailability
  availabilityLabel: string
  accessModel: AccessModel
  accessModelLabel: string
  pricing: readonly ProductTier[]
  demoUrl?: string
  docsUrl?: string
  repoUrl?: string
}

export type OrderStatus = 
  | 'INITIATED' 
  | 'PENDING_PAYMENT' 
  | 'PAYMENT_VERIFIED' 
  | 'FULFILLMENT_COMPLETED' 
  | 'FAILED' 
  | 'CANCELLED'

export type PurchaseIntent = {
  productId: string
  productName: string
  tierId: string
  tierName: string
  amount: number | 0
  currency: string
  customerEmail: string
  customerName?: string
  organization?: string
}
