import { useState } from 'react'
import type { DigitalProduct, ProductTier } from '../../types/products'
import { createCheckoutSession } from '../../services/paymentService'

type PurchaseModalProps = {
  product: DigitalProduct
  tier: ProductTier
  onClose: () => void
}

export function PurchaseModal({ product, tier, onClose }: PurchaseModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ message: string; success: boolean } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubmitting(true)
    setFeedback(null)

    const numericAmount: number = typeof tier.price === 'number' ? tier.price : 0

    const result = await createCheckoutSession({
      productId: product.id,
      productName: product.name,
      tierId: tier.id,
      tierName: tier.name,
      amount: numericAmount,
      currency: tier.currency || 'USD',
      customerEmail: email.trim(),
      customerName: name.trim() || undefined,
      organization: org.trim() || undefined,
    })

    setIsSubmitting(false)
    setFeedback({
      success: result.success,
      message: result.message,
    })
  }

  return (
    <div className="purchase-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="purchase-modal-dialog">
        <div className="purchase-modal__header">
          <div className="purchase-modal__badge">
            <span className="badge-category">{product.category}</span>
          </div>
          <button className="purchase-modal__close" onClick={onClose} aria-label="Cerrar modal" type="button">
            ✕
          </button>
        </div>

        <div className="purchase-modal__body">
          <div className="purchase-modal__intro">
            <div className="purchase-modal__icon-wrap" aria-hidden="true">
              {product.icon}
            </div>
            <div>
              <span className="purchase-modal__kicker">{tier.name}</span>
              <h3 id="modal-title" className="purchase-modal__title">
                {product.name}
              </h3>
            </div>
          </div>
          <p className="purchase-modal__desc">{product.tagline}</p>

          <div className="purchase-modal__price-box">
            <div>
              <span className="price-label">Inversión / Modelo:</span>
              <div className="price-value">
                {typeof tier.price === 'number' ? (
                  <>
                    <span className="currency">{tier.currency}</span>
                    <span className="amount">${tier.price}</span>
                    {tier.billingPeriod && <span className="period">/{tier.billingPeriod}</span>}
                  </>
                ) : (
                  <span className="special-price">{tier.price}</span>
                )}
              </div>
            </div>
            <span className="availability-tag">{product.availabilityLabel}</span>
          </div>

          {feedback ? (
            <div className={`purchase-modal__feedback ${feedback.success ? 'is-success' : 'is-notice'}`}>
              <p>{feedback.message}</p>
              <button type="button" className="development-button development-button--primary" onClick={onClose} style={{ marginTop: '1rem', width: '100%' }}>
                <span>ENTENDIDO // CONTINUAR</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="purchase-modal__form">
              <div className="form-field">
                <label htmlFor="customer-email">Correo Institucional / Profesional *</label>
                <input
                  id="customer-email"
                  type="email"
                  required
                  placeholder="ejemplo@universidad.edu.co o tu@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="customer-name">Nombre Completo</label>
                  <input
                    id="customer-name"
                    type="text"
                    placeholder="Tu nombre o alias"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="customer-org">Universidad / Organización</label>
                  <input
                    id="customer-org"
                    type="text"
                    placeholder="Facultad o Compañía"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                  />
                </div>
              </div>

              <div className="purchase-modal__security-note">
                <i aria-hidden="true">🔒</i>
                <span>
                  Transacción protegida con arquitectura de entrega autenticada. No almacenamos datos bancarios en el navegador.
                </span>
              </div>

              <div className="purchase-modal__actions">
                <button type="button" className="development-button development-button--secondary" onClick={onClose}>
                  CANCELAR
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="development-button development-button--primary"
                >
                  {isSubmitting ? 'PROCESANDO...' : tier.ctaLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
