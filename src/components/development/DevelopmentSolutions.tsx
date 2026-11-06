import { developmentSolutions } from '../../content/development'

export function DevelopmentSolutions() {
  return (
    <section id="solutions" className="development-section development-solutions" aria-labelledby="development-solutions-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 02 / TIPOS DE SOLUCIÓN ]</p>
        <h2 id="development-solutions-title">ARQUITECTURA PARA CADA NECESIDAD</h2>
        <p>Modelos de desarrollo y servicios adaptados a la naturaleza y escala de cada proyecto tecnológico.</p>
      </div>

      <div className="development-solutions-grid">
        {developmentSolutions.map((solution) => (
          <article className="development-solution-card" data-reveal key={solution.id}>
            <div className="solution-card__header">
              <span className="solution-card__index">{solution.id}</span>
              <span className="solution-card__subtitle">{solution.subtitle}</span>
            </div>
            <h3 className="solution-card__title">{solution.title}</h3>
            <p className="solution-card__desc">{solution.description}</p>
            <ul className="solution-card__features">
              {solution.features.map((feat) => (
                <li key={feat}>
                  <i aria-hidden="true" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
