import type { DevelopmentProject } from '../../content/development'

type DevelopmentProjectEntryProps = {
  project: DevelopmentProject
}

export function DevelopmentProjectEntry({ project }: DevelopmentProjectEntryProps) {
  const active = project.status === 'ACTIVE — IN PRODUCTION'

  return (
    <article className="development-project-entry" data-reveal>
      <div className="development-project-entry__index">
        <span>PROJECT</span>
        <strong>{project.id}</strong>
      </div>
      <div className="development-project-entry__identity">
        <p>{project.category}</p>
        <h3>{project.name}</h3>
      </div>
      <div className="development-project-entry__record">
        <div className={`development-project-entry__status ${active ? 'is-active' : ''}`}>
          <i aria-hidden="true" />
          <span>{project.status}</span>
        </div>
        {project.audience && <p className="development-project-entry__audience"><span>TARGET</span>{project.audience}</p>}
        <p className="development-project-entry__description">{project.description}</p>
      </div>
    </article>
  )
}
