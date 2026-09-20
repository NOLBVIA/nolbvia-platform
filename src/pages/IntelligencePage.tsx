import { IntelligenceCTA } from '../components/intelligence/IntelligenceCTA'
import { IntelligenceDomains } from '../components/intelligence/IntelligenceDomains'
import { IntelligenceFooter } from '../components/intelligence/IntelligenceFooter'
import { IntelligenceHero } from '../components/intelligence/IntelligenceHero'
import { IntelligenceNavbar } from '../components/intelligence/IntelligenceNavbar'
import { IntelligencePurpose } from '../components/intelligence/IntelligencePurpose'
import { IntelligenceResearch } from '../components/intelligence/IntelligenceResearch'
import { IntelligenceSequence } from '../components/intelligence/IntelligenceSequence'
import { IntelligenceStatus } from '../components/intelligence/IntelligenceStatus'
import { IntelligenceSystems } from '../components/intelligence/IntelligenceSystems'
import { intelligenceMetadata } from '../content/intelligence'
import { useDocumentMetadata } from '../hooks/useDocumentMetadata'
import '../styles/intelligence.css'

export default function IntelligencePage() {
  useDocumentMetadata(intelligenceMetadata)

  return (
    <div className="intelligence-page">
      <IntelligenceSequence />
      <a className="intelligence-skip" href="#intelligence-main">SKIP TO CONTENT</a>
      <IntelligenceNavbar />
      <main id="intelligence-main" tabIndex={-1}>
        <IntelligenceHero />
        <IntelligencePurpose />
        <IntelligenceDomains />
        <IntelligenceSystems />
        <IntelligenceResearch />
        <IntelligenceStatus />
        <IntelligenceCTA />
      </main>
      <IntelligenceFooter />
    </div>
  )
}
