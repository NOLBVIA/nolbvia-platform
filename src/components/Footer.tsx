import { navItems } from '../content/site'
import { getActiveSocialLinks } from '../content/socialLinks'
import { BrandLogo } from './BrandLogo'
import { SocialIcon } from './SocialIcon'

export function Footer() {
  const socialLinks = getActiveSocialLinks()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandLogo size="lg" />
            <p className="footer-tagline">
              Ingeniería de sistemas, tecnología y desarrollo digital concebidos para resolver problemas reales con rigor y visión de futuro.
            </p>

            <div className="footer-social-wrapper" aria-label="Canales oficiales de NOLBVIA">
              <span className="footer-social-label">REDES OFICIALES //</span>
              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-btn"
                    aria-label={social.ariaLabel}
                  >
                    <SocialIcon platform={social.platform} size={16} />
                    <span className="social-btn-text">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <span className="footer-col-title">NAVEGACIÓN</span>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="footer-link">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">DIVISIONES</span>
              <a href="/development" className="footer-link">01 / NOLBVIA Development</a>
              <a href="/exploration" className="footer-link">02 / NOLBVIA Exploration</a>
              <a href="/intelligence" className="footer-link">03 / NOLBVIA Intelligence</a>
              <a href="#ecosystem" className="footer-link">04 / Future Divisions</a>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">ESTRUCTURA OPERATIVA</span>
              <span className="footer-telemetry-item">DEVELOPMENT: COMERCIAL &amp; ACTIVO</span>
              <span className="footer-telemetry-item">INTELLIGENCE: CAPA COMPUTACIONAL</span>
              <span className="footer-telemetry-item">EXPLORATION: HORIZONTE DE I+D</span>
              <span className="footer-telemetry-item">FUTURE DIVISIONS: EXPANSIÓN MODULAR</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-legal">
            © {new Date().getFullYear()} NOLBVIA. INGENIERÍA, TECNOLOGÍA &amp; DESARROLLO DIGITAL. TODOS LOS DERECHOS RESERVADOS.
          </span>
          <span className="footer-designed">PRECISIÓN TÉCNICA • ARQUITECTURA MODULAR • VISIÓN DE FUTURO</span>
        </div>
      </div>
    </footer>
  )
}
