import { useState } from 'react'
import { officialDigitalProducts } from '../../content/products'
import type { DigitalProduct, ProductTier } from '../../types/products'
import { PurchaseModal } from './PurchaseModal'

export function DevelopmentProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<{ product: DigitalProduct; tier: ProductTier } | null>(null)
  const [activeTab, setActiveTab] = useState<'ALL' | 'PRODUCTION' | 'DEVELOPMENT'>('ALL')

  const filteredProducts = officialDigitalProducts.filter((p) => {
    if (activeTab === 'PRODUCTION') return p.availability === 'PRODUCTION_AVAILABLE'
    if (activeTab === 'DEVELOPMENT') return p.availability !== 'PRODUCTION_AVAILABLE'
    return true
  })

  return (
    <section id="products" className="development-section development-products" aria-labelledby="development-products-title">
      <div className="development-section__header development-section__header--split" data-reveal>
        <div>
          <p className="development-section__index">[ 03 / CATÁLOGO DE PRODUCTOS DIGITALES ]</p>
          <h2 id="development-products-title">PRODUCTOS DE INGENIERÍA</h2>
        </div>
        <p>
          Soluciones de software propias diseñadas y construidas por NOLBVIA con estándares de alta ingeniería, disponibles para la comunidad y organizaciones.
        </p>
      </div>

      <div className="development-products__filter" data-reveal>
        <button
          type="button"
          className={`filter-btn ${activeTab === 'ALL' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('ALL')}
        >
          TODOS LOS PRODUCTOS ({officialDigitalProducts.length})
        </button>
        <button
          type="button"
          className={`filter-btn ${activeTab === 'PRODUCTION' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('PRODUCTION')}
        >
          DISPONIBLES EN PRODUCCIÓN
        </button>
        <button
          type="button"
          className={`filter-btn ${activeTab === 'DEVELOPMENT' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('DEVELOPMENT')}
        >
          EN DESARROLLO / ACCESO TEMPRANO
        </button>
      </div>

      <div className="development-products-grid">
        {filteredProducts.map((prod) => (
          <article className="digital-product-card" data-reveal key={prod.id}>
            <div className="product-card__top">
              <div className="product-card__icon" aria-hidden="true">
                {prod.icon}
              </div>
              <div className="product-card__badges">
                <span className="product-version">{prod.version}</span>
                <span className={`product-status status--${prod.availability.toLowerCase()}`}>
                  {prod.availabilityLabel}
                </span>
              </div>
            </div>

            <div className="product-card__body">
              <p className="product-category">{prod.category}</p>
              <h3 className="product-name">{prod.name}</h3>
              <p className="product-tagline">{prod.tagline}</p>

              <div className="product-detail-box">
                <div className="detail-item">
                  <span className="detail-label">PROBLEMA QUE RESUELVE:</span>
                  <p>{prod.problemStatement}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-label">SOLUCIÓN DE INGENIERÍA:</span>
                  <p>{prod.solutionStatement}</p>
                </div>
              </div>

              <div className="product-features-block">
                <span className="block-title">CARACTERÍSTICAS PRINCIPALES</span>
                <ul className="product-features-list">
                  {prod.keyFeatures.map((feat) => (
                    <li key={feat}>
                      <span className="bullet-point">▸</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-audience-block">
                <span className="block-title">DIRIGIDO A:</span>
                <div className="audience-tags">
                  {prod.targetAudience.map((aud) => (
                    <span key={aud} className="audience-tag">{aud}</span>
                  ))}
                </div>
              </div>

              <div className="product-stack-block">
                <span className="block-title">STACK TÉCNICO:</span>
                <div className="stack-pills">
                  {prod.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-card__footer">
              <div className="product-tiers-list">
                {prod.pricing.map((tier) => (
                  <div key={tier.id} className={`product-tier-row ${tier.isPopular ? 'tier--highlight' : ''}`}>
                    <div className="tier-info">
                      <strong className="tier-name">{tier.name}</strong>
                      <span className="tier-price">
                        {typeof tier.price === 'number' ? `$${tier.price} ${tier.currency}` : tier.price}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="development-button development-button--primary btn-product-action"
                      onClick={() => setSelectedProduct({ product: prod, tier })}
                    >
                      <span className="btn-label">{tier.ctaLabel}</span>
                      <span className="btn-icon" aria-hidden="true">→</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="product-links">
                {prod.repoUrl && (
                  <a href={prod.repoUrl} target="_blank" rel="noopener noreferrer" className="product-link">
                    <span>REPOSITORIO GITHUB</span> ↗
                  </a>
                )}
                {prod.demoUrl && (
                  <a href={prod.demoUrl} target="_blank" rel="noopener noreferrer" className="product-link">
                    <span>VER EN VIVO</span> ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct.product}
          tier={selectedProduct.tier}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}

