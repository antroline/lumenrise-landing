import { LaunchFlow } from '../components/LaunchFlow.tsx'
import { MechanismOptions } from '../components/MechanismOptions.tsx'
import { Scene } from '../components/Scene.tsx'
import { SectionHead } from '../components/SectionHead.tsx'
import { MECHANISM_TONES } from '../data/mechanism-tones.ts'
import { usePolicy } from '../hooks/usePolicy.ts'

export function LaunchSection() {
  const { mechanism } = usePolicy()
  return (
    <section id="launch" className="section" aria-labelledby="launch-title">
      <div className="container">
        <SectionHead
          id="launch-title"
          eyebrow="Token Launches"
          title="Different launches."
          follow="Different strategies."
          lede={[
            'Every project has its own goals. Choose the launch mechanism that fits your token, community, and distribution strategy.',
          ]}
          cta={{ label: 'Create a Launch', href: 'https://platform.lumenrise.app/create' }}
        />
        <Scene tone={MECHANISM_TONES[mechanism.id]} className="launch-scene">
          <LaunchFlow />
        </Scene>
        <MechanismOptions />
      </div>
    </section>
  )
}
