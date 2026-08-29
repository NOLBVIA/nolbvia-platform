import { projects } from '../content/site'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <SectionHeader
        eyebrow="[ 03 // PROJECT ARCHIVE ]"
        title="Future case studies, ready for real work."
      >
        <p>Clearly identified placeholders prepared to become confirmed NOLBVIA project stories.</p>
      </SectionHeader>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className={`project-card glass-card project-${project.accent}`} data-reveal key={project.name}>
            <div className="project-header">
              <div className="project-id-group">
                <span className="project-index">0{index + 1}</span>
                <span className="project-code">{project.code}</span>
              </div>
              <span className="project-status-badge">{project.status}</span>
            </div>

            <div className="project-visual-hud" aria-hidden="true">
              <div className="hud-grid-lines" />
              <div className="hud-orbital-ring" />
              <div className="hud-core-marker" />
              <div className="hud-metric-readout">
                <span className="hud-label">RECORD:</span>
                <span className="hud-val">{project.note}</span>
              </div>
            </div>

            <div className="project-body">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-footer">
                <span className="project-link">
                  <span>PROJECT PLACEHOLDER</span>
                  <span className="arrow-glyph">↗</span>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
