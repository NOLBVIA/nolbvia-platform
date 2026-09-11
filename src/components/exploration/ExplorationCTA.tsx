import { explorationCTA as cta } from '../../content/exploration'

export function ExplorationCTA() {
  return (
    <section id="exploration-next" className="exploration-chapter exploration-cta" aria-labelledby="exploration-cta-title">
      <div className="exploration-chapter__inner">
        <p className="exploration-eyebrow">{cta.eyebrow}</p>
        <div className="exploration-closing-heading">
          <h2 id="exploration-cta-title">{cta.title}</h2>
        </div>
        <div className="exploration-cta__links">
          {cta.links.map(link => (
            <a key={link.href} href={link.href}>{link.label}<span aria-hidden="true">→</span></a>
          ))}
        </div>
      </div>
    </section>
  )
}
