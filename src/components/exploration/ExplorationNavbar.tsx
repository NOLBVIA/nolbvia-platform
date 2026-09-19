import { useEffect, useRef, useState } from 'react'
import { BrandLogo } from '../BrandLogo'
import { explorationContent as content, explorationFooter } from '../../content/exploration'

export function ExplorationNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20)
    const desktop = window.matchMedia('(min-width: 901px)')
    const closeDesktop = () => { if (desktop.matches) setOpen(false) }
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    desktop.addEventListener('change', closeDesktop)
    return () => {
      window.removeEventListener('scroll', scroll)
      desktop.removeEventListener('change', closeDesktop)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    window.addEventListener('keydown', escape)
    return () => window.removeEventListener('keydown', escape)
  }, [open])

  useEffect(() => {
    const sections = explorationFooter.links
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
      }),
      { rootMargin: '-34% 0px -56% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`exploration-navbar${scrolled ? ' is-scrolled' : ''}`}>
      <nav aria-label={content.navigationLabel} onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}>
        <a className="exploration-brand" href="/exploration">
          <BrandLogo size="sm" showDescriptor={false} />
          <span className="exploration-brand-division">EXPLORATION</span>
        </a>
        <button ref={toggle} className="exploration-menu-toggle" type="button"
          aria-label={content.menuLabel} aria-expanded={open} aria-controls="exploration-navigation"
          onClick={() => setOpen(value => !value)}>
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <div id="exploration-navigation" className={`exploration-navigation${open ? ' is-open' : ''}`}>
          {explorationFooter.links.map(item => (
            <a key={item.href} href={item.href}
              aria-current={activeSection === item.href ? 'location' : undefined}
              onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <a className="exploration-nav-cta" href="/#ecosystem" onClick={() => setOpen(false)}>{content.cta}</a>
        </div>
      </nav>
    </header>
  )
}
