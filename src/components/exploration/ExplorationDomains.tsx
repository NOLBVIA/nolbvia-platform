import { explorationDomains as domains } from '../../content/exploration'

export function ExplorationDomains() {
  return (
    <section id="domains" className="exploration-chapter exploration-domains" aria-labelledby="exploration-domains-title">
      <div className="exploration-chapter__inner">
        <p className="exploration-eyebrow">{domains.eyebrow}</p>
        <header className="exploration-chapter__heading">
          <h2 id="exploration-domains-title">{domains.title}</h2>
          <p className="exploration-chapter__description">{domains.introduction}</p>
        </header>
        <ol className="exploration-domains__list">
          {domains.items.map(domain => (
            <li key={domain.number}>
              <span className="exploration-domain__number" aria-hidden="true">{domain.number}</span>
              <h3>{domain.name}</h3>
              <p className="exploration-chapter__description">{domain.description}</p>
              <span className="exploration-state">{domain.status}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
