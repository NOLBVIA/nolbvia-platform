import { useEffect } from 'react'
import { DevelopmentCapabilities } from '../components/development/DevelopmentCapabilities'
import { DevelopmentCTA } from '../components/development/DevelopmentCTA'
import { DevelopmentFooter } from '../components/development/DevelopmentFooter'
import { DevelopmentHero } from '../components/development/DevelopmentHero'
import { DevelopmentNavbar } from '../components/development/DevelopmentNavbar'
import { DevelopmentOverview } from '../components/development/DevelopmentOverview'
import { DevelopmentProcess } from '../components/development/DevelopmentProcess'
import { DevelopmentProjectCatalog } from '../components/development/DevelopmentProjectCatalog'
import { DevelopmentStatus } from '../components/development/DevelopmentStatus'
import { DevelopmentSequence } from '../components/development/DevelopmentSequence'
import { developmentMetadata } from '../content/development'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useReveal } from '../hooks/useReveal'
import '../styles/development.css'

export default function DevelopmentPage() {
  useReveal()
  useDocumentMetadata(developmentMetadata)

  useEffect(() => {
    let frame = 0
    let cancelled = false

    const scrollToLocation = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        if (cancelled) return

        const hash = window.location.hash.slice(1)
        if (hash) {
          document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ block: 'start' })
          return
        }

        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    }

    scrollToLocation()
    void document.fonts.ready.then(scrollToLocation)

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="development-page">
      <DevelopmentSequence />
      <a className="development-skip-link" href="#development-main">SKIP TO CONTENT</a>
      <DevelopmentNavbar />
      <main id="development-main">
        <DevelopmentHero />
        <DevelopmentOverview />
        <DevelopmentProjectCatalog />
        <DevelopmentCapabilities />
        <DevelopmentProcess />
        <DevelopmentStatus />
        <DevelopmentCTA />
      </main>
      <DevelopmentFooter />
    </div>
  )
}
