import { explorationMission as mission } from '../../content/exploration'

export function ExplorationMission() {
  return (
    <section id="mission" className="exploration-chapter exploration-mission" aria-labelledby="exploration-mission-title">
      <div className="exploration-chapter__inner">
        <p className="exploration-eyebrow">{mission.eyebrow}</p>
        <div className="exploration-mission__layout">
          <h2 id="exploration-mission-title">{mission.title}</h2>
          <div className="exploration-mission__text">
            <p className="exploration-mission__statement">{mission.statement}</p>
            <p className="exploration-chapter__description">{mission.description}</p>
            <p className="exploration-direction">{mission.direction}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
