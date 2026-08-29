import { navItems } from '../content/site'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandLogo size="lg" />
            <p className="footer-tagline">
              Technology, systems and aerospace engineering for what comes next.
            </p>
          </div>

          <div className="footer-nav-grid">
            <div className="footer-nav-col">
              <span className="footer-col-title">NAVIGATION</span>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="footer-link">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">DIVISIONS</span>
              <a href="#divisions" className="footer-link">01 / NOLBVIA Development</a>
              <a href="#divisions" className="footer-link">02 / NOLBVIA Exploration</a>
              <a href="#divisions" className="footer-link">03 / Future Divisions</a>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">ECOSYSTEM STATUS</span>
              <span className="footer-telemetry-item">CORPORATE: IN FORMATION</span>
              <span className="footer-telemetry-item">DEVELOPMENT: CURRENT FOCUS</span>
              <span className="footer-telemetry-item">EXPLORATION: FUTURE VISION</span>
              <span className="footer-telemetry-item">FUTURE DIVISIONS: OPEN</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-legal">
            © {new Date().getFullYear()} NOLBVIA. SYSTEMS &amp; AEROSPACE ENGINEERING. ALL RIGHTS RESERVED.
          </span>
          <span className="footer-designed">PRECISION. SYSTEMS. EXPLORATION. FUTURE.</span>
        </div>
      </div>
    </footer>
  )
}
