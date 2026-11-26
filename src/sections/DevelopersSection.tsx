import { DevToolScene } from '../components/DevToolScene.tsx'
import { Feature } from '../components/Feature.tsx'
import { SectionHead } from '../components/SectionHead.tsx'
import { DEV_TOOLS } from '../data/dev-tools.ts'

export function DevelopersSection() {
  return (
    <section id="developers" className="section" aria-labelledby="developers-title">
      <div className="container">
        <SectionHead
          id="developers-title"
          eyebrow="Built for Developers"
          title="Build with reputation."
          lede={[
            'Bring reputation checks and reusable eligibility rules into your own application. Give developers and AI agents ways to participate through authorized transactions.',
          ]}
          cta={{ label: 'Developer Resources', href: 'https://platform.lumenrise.app/developers' }}
        />
        <div className="features features-3">
          {DEV_TOOLS.map((tool) => (
            <Feature key={tool.id} title={tool.title} text={tool.text}>
              <DevToolScene tool={tool} />
            </Feature>
          ))}
        </div>
      </div>
    </section>
  )
}
