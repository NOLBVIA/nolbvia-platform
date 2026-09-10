import { explorationContent, explorationFooter as footer, explorationNavigation } from '../../content/exploration'
import { BrandLogo } from '../BrandLogo'

export function ExplorationFooter() {
  return (
    <footer className="exploration-footer">
      <div className="exploration-footer__top">
        <div className="exploration-footer__brand">
          <BrandLogo size="md" showDescriptor={false} />
          <p className="exploration-footer__division">{footer.division}</p>
          <p className="exploration-footer__direction">{footer.direction}</p>
        </div>
        <nav aria-label={footer.navigationLabel}>
          <p>{footer.navigate}</p>
          {footer.links.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <nav aria-label={footer.ecosystem}>
          <p>{footer.ecosystem}</p>
          {explorationNavigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
      </div>
      <div className="exploration-footer__bottom">
        <span>© {new Date().getFullYear()} {explorationContent.brand} {footer.division}</span>
        <span>{footer.direction}</span>
      </div>
    </footer>
  )
}
