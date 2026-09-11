import { explorationVision as vision } from '../../content/exploration'

export function ExplorationVision() {
  return (
    <section id="vision" className="exploration-chapter exploration-vision" aria-labelledby="exploration-vision-title">
      <div className="exploration-chapter__inner">
        <p className="exploration-eyebrow">{vision.eyebrow}</p>
        <header className="exploration-closing-heading">
          <h2 id="exploration-vision-title">{vision.title}</h2>
          <p className="exploration-chapter__description">{vision.description}</p>
        </header>
        <ol className="exploration-vision__trajectory">
          {vision.stages.map((stage, index) => (
            <li key={stage}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p>{stage}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
