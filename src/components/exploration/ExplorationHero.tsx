import { explorationContent as content } from '../../content/exploration'

export function ExplorationHero() {
  return (
    <section className="exploration-hero" aria-labelledby="exploration-title">
      <p className="exploration-eyebrow">{content.eyebrow}</p>
      <h1 id="exploration-title">{content.headline}</h1>
      <p className="exploration-hero__description">{content.description}</p>
      <a className="exploration-scroll" href="#mission">
        {content.scroll}<span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
