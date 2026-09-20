import { intelligenceCTA as cta } from '../../content/intelligence'

export function IntelligenceCTA() {
  return (
    <section className="intelligence-section intelligence-cta" aria-labelledby="intelligence-cta-title">
      <div className="intelligence-section__inner">
        <p className="intelligence-eyebrow">{cta.eyebrow}</p>
        <div className="intelligence-cta__layout">
          <h2 id="intelligence-cta-title">{cta.headline}</h2>
          <div className="intelligence-cta__links">
            {cta.links.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
