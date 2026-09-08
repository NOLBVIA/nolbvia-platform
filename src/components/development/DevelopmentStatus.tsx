import { developmentStatus } from '../../content/development'

export function DevelopmentStatus() {
  return (
    <section id="status" className="development-section development-status" aria-labelledby="development-status-title">
      <div className="development-status__panel" data-reveal>
        <div className="development-status__header">
          <div>
            <p className="development-section__index">[ 05 / SYSTEM STATUS ]</p>
            <h2 id="development-status-title">SYSTEM STATUS</h2>
          </div>
          <p className="development-status__focus"><span>CURRENT FOCUS</span><strong>{developmentStatus.currentFocus}</strong></p>
        </div>
        <div className="development-status__records">
          {developmentStatus.projects.map((project) => (
            <div className="development-status__record" key={project.id}>
              <span>{project.id}</span>
              <strong>{project.name}</strong>
              <p><i aria-hidden="true" />{project.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
