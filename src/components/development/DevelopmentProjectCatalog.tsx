import { developmentProjects } from '../../content/development'
import { DevelopmentProjectEntry } from './DevelopmentProjectEntry'

export function DevelopmentProjectCatalog() {
  return (
    <section id="projects" className="development-section development-projects" aria-labelledby="development-projects-title">
      <div className="development-section__header development-section__header--split" data-reveal>
        <div>
          <p className="development-section__index">[ 03 / PORTAFOLIO TÉCNICO ]</p>
          <h2 id="development-projects-title">SISTEMAS EN DESARROLLO</h2>
        </div>
        <p>Plataformas e iniciativas que demuestran la capacidad técnica y el enfoque de ingeniería de NOLBVIA.</p>
      </div>
      <div className="development-project-register">
        <div className="development-project-register__legend" aria-hidden="true">
          <span>IDENTIFICADOR</span><span>PROYECTO / ENFOQUE</span><span>ESTADO / DESCRIPCIÓN</span>
        </div>
        {developmentProjects.map((project) => <DevelopmentProjectEntry project={project} key={project.id} />)}
      </div>
    </section>
  )
}
