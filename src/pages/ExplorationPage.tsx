import { ExplorationNavbar } from '../components/exploration/ExplorationNavbar'
import { ExplorationHero } from '../components/exploration/ExplorationHero'
import { ExplorationSequence } from '../components/exploration/ExplorationSequence'
import { ExplorationMission } from '../components/exploration/ExplorationMission'
import { ExplorationDomains } from '../components/exploration/ExplorationDomains'
import { ExplorationFrontiers } from '../components/exploration/ExplorationFrontiers'
import { ExplorationFooter } from '../components/exploration/ExplorationFooter'
import { ExplorationVision } from '../components/exploration/ExplorationVision'
import { ExplorationStatus } from '../components/exploration/ExplorationStatus'
import { ExplorationCTA } from '../components/exploration/ExplorationCTA'
import { explorationContent, explorationMetadata } from '../content/exploration'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import '../styles/exploration.css'

export default function ExplorationPage() {
  useDocumentMetadata(explorationMetadata)

  return (
    <div className="exploration-page">
      <ExplorationSequence />
      <a className="exploration-skip" href="#exploration-main">{explorationContent.skip}</a>
      <ExplorationNavbar />
      <main id="exploration-main" tabIndex={-1}>
        <ExplorationHero />
        <ExplorationMission />
        <ExplorationDomains />
        <ExplorationFrontiers />
        <ExplorationVision />
        <ExplorationStatus />
        <ExplorationCTA />
      </main>
      <ExplorationFooter />
    </div>
  )
}
