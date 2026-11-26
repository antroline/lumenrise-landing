import { EligibilityStory } from '../components/EligibilityStory.tsx'
import { SectionHead } from '../components/SectionHead.tsx'

export function EligibilitySection() {
  return (
    <section id="eligibility" className="section" aria-labelledby="eligibility-title">
      <div className="container">
        <SectionHead
          id="eligibility-title"
          eyebrow="Programmable Eligibility"
          title="Better participation starts with better eligibility."
          lede={[
            'Not every allocation needs to follow the same rules.',
            'Keep entry open or set minimum reputation requirements. A reusable policy can combine onchain activity with GitHub contributions to reach the community you want.',
          ]}
          cta={{ label: 'Explore Eligibility', href: 'https://platform.lumenrise.app/reputation' }}
        />
        <EligibilityStory />
      </div>
    </section>
  )
}
