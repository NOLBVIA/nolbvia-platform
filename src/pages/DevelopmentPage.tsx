import { DevelopmentBuildLog } from '../components/development/DevelopmentBuildLog'
import { DevelopmentCapabilities } from '../components/development/DevelopmentCapabilities'
import { DevelopmentCTA } from '../components/development/DevelopmentCTA'
import { DevelopmentFooter } from '../components/development/DevelopmentFooter'
import { DevelopmentHero } from '../components/development/DevelopmentHero'
import { DevelopmentNavbar } from '../components/development/DevelopmentNavbar'
import { DevelopmentOverview } from '../components/development/DevelopmentOverview'
import { DevelopmentProcess } from '../components/development/DevelopmentProcess'
import { DevelopmentPrinciples } from '../components/development/DevelopmentPrinciples'
import { DevelopmentProductCatalog } from '../components/development/DevelopmentProductCatalog'
import { DevelopmentTechFeed } from '../components/development/DevelopmentTechFeed'
import { DevelopmentSolutions } from '../components/development/DevelopmentSolutions'
import { DevelopmentSequence } from '../components/development/DevelopmentSequence'
import { developmentMetadata } from '../content/development'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import { useReveal } from '../hooks/useReveal'
import '../styles/development.css'

export default function DevelopmentPage() {
  useReveal()
  useDocumentMetadata(developmentMetadata)

  return (
    <div className="development-page">
      <DevelopmentSequence />
      <a className="development-skip-link" href="#development-main">SALTAR AL CONTENIDO</a>
      <DevelopmentNavbar />
      <main id="development-main" tabIndex={-1}>
        <DevelopmentHero />
        <DevelopmentOverview />
        <DevelopmentSolutions />
        <DevelopmentProductCatalog />
        <DevelopmentBuildLog />
        <DevelopmentTechFeed />
        <DevelopmentProcess />
        <DevelopmentPrinciples />
        <DevelopmentCapabilities />
        <DevelopmentCTA />
      </main>
      <DevelopmentFooter />
    </div>
  )
}
