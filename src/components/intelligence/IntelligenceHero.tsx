import { intelligenceHero as hero } from '../../content/intelligence'

export function IntelligenceHero() {
  return (
    <section className="intelligence-hero" aria-labelledby="intelligence-title">
      <div className="intelligence-hero__stage">
        <div className="intelligence-hero__copy">
          <p className="intelligence-eyebrow">{hero.eyebrow}</p>
          <h1 id="intelligence-title">{hero.headline}</h1>
          <p className="intelligence-hero__supporting">{hero.supporting}</p>
          <a className="intelligence-scroll-cue" href="#purpose">
            CONTINUE <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
