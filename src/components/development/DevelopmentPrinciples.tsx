import { developmentPrinciples } from '../../content/development'

export function DevelopmentPrinciples() {
  return (
    <section id="principles" className="development-section development-principles" aria-labelledby="development-principles-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 07 / ESTÁNDARES TÉCNICOS ]</p>
        <h2 id="development-principles-title">PRINCIPIOS DE INGENIERÍA</h2>
        <p>Criterios metodológicos no negociables aplicados a cada línea de código construida en NOLBVIA.</p>
      </div>

      <div className="development-principles-grid">
        {developmentPrinciples.map((principle) => (
          <article className="development-principle-card" data-reveal key={principle.number}>
            <span className="principle-number">{principle.number}</span>
            <h3 className="principle-title">{principle.title}</h3>
            <p className="principle-desc">{principle.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

