import { developmentCore } from '../../content/development'

export function DevelopmentOverview() {
  return (
    <section id="overview" className="development-section development-overview" aria-labelledby="development-overview-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 01 / DEVELOPMENT CORE ]</p>
        <h2 id="development-overview-title">DEVELOPMENT CORE</h2>
        <p>Four areas define the current direction of NOLBVIA Development.</p>
      </div>

      <div className="development-core-grid">
        {developmentCore.map((area) => (
          <article className="development-core-entry" data-reveal key={area.index}>
            <div className="development-core-entry__top"><span>{area.index}</span><i aria-hidden="true" /></div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
