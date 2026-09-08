import { developmentProjects } from '../../content/development'
import { DevelopmentProjectEntry } from './DevelopmentProjectEntry'

export function DevelopmentProjectCatalog() {
  return (
    <section id="projects" className="development-section development-projects" aria-labelledby="development-projects-title">
      <div className="development-section__header development-section__header--split" data-reveal>
        <div>
          <p className="development-section__index">[ 02 / PROJECT REGISTER ]</p>
          <h2 id="development-projects-title">PROJECTS</h2>
        </div>
        <p>Selected systems currently forming the NOLBVIA development portfolio.</p>
      </div>
      <div className="development-project-register">
        <div className="development-project-register__legend" aria-hidden="true">
          <span>IDENTIFIER</span><span>PROJECT / CATEGORY</span><span>STATUS / DESCRIPTION</span>
        </div>
        {developmentProjects.map((project) => <DevelopmentProjectEntry project={project} key={project.id} />)}
      </div>
    </section>
  )
}
