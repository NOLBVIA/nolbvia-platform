import { intelligenceDomains as domains } from '../../content/intelligence'

export function IntelligenceDomains() {
  return (
    <section id="domains" className="intelligence-section intelligence-domains" aria-labelledby="intelligence-domains-title">
      <div className="intelligence-section__inner">
        <p className="intelligence-eyebrow">{domains.eyebrow}</p>
        <div className="intelligence-section__heading">
          <h2 id="intelligence-domains-title">{domains.headline}</h2>
          <p>{domains.introduction}</p>
        </div>
        <ol className="intelligence-domains__list">
          {domains.items.map((domain) => (
            <li key={domain.number}>
              <span>{domain.number}</span>
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
              <i aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
