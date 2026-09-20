import { intelligenceResearch as research } from '../../content/intelligence'

export function IntelligenceResearch() {
  return (
    <section id="research" className="intelligence-section intelligence-research" aria-labelledby="intelligence-research-title">
      <div className="intelligence-section__inner">
        <p className="intelligence-eyebrow">{research.eyebrow}</p>
        <div className="intelligence-research__layout">
          <div>
            <h2 id="intelligence-research-title">{research.headline}</h2>
            <p>{research.description}</p>
          </div>
          <dl className="intelligence-relations">
            {research.relationships.map((relationship, index) => (
              <div key={relationship.label}>
                <span aria-hidden="true">0{index + 1}</span>
                <dt>{relationship.label}</dt>
                <dd><span aria-hidden="true">→</span>{relationship.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
