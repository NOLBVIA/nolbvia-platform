import { explorationFrontiers as frontiers } from '../../content/exploration'

export function ExplorationFrontiers() {
  return (
    <section id="frontiers" className="exploration-chapter exploration-frontiers" aria-labelledby="exploration-frontiers-title">
      <div className="exploration-chapter__inner">
        <p className="exploration-eyebrow">{frontiers.eyebrow}</p>
        <header className="exploration-chapter__heading">
          <h2 id="exploration-frontiers-title">{frontiers.title}</h2>
          <p className="exploration-chapter__description">{frontiers.introduction}</p>
        </header>
        <ol className="exploration-frontiers__list">
          {frontiers.items.map(frontier => (
            <li key={frontier.number}>
              <span className="exploration-frontier__number" aria-hidden="true">{frontier.number}</span>
              <div className="exploration-frontier__text">
                <h3>{frontier.name}</h3>
                <p className="exploration-chapter__description">{frontier.description}</p>
              </div>
              <span className="exploration-state">{frontier.status}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
