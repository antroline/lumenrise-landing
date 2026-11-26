import { PolicyProvider } from './components/PolicyProvider.tsx'
import { useSmoothScroll } from './hooks/useSmoothScroll.ts'
import { BeyondSection } from './sections/BeyondSection.tsx'
import { Closing } from './sections/Closing.tsx'
import { DevelopersSection } from './sections/DevelopersSection.tsx'
import { EligibilitySection } from './sections/EligibilitySection.tsx'
import { Footer } from './sections/Footer.tsx'
import { Header } from './sections/Header.tsx'
import { Hero } from './sections/Hero.tsx'
import { LaunchSection } from './sections/LaunchSection.tsx'
import { ReputationSection } from './sections/ReputationSection.tsx'
import { WorkflowSection } from './sections/WorkflowSection.tsx'

export function App() {
  useSmoothScroll()

  return (
    <PolicyProvider>
      <div className="relative isolate overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <LaunchSection />
          <ReputationSection />
          <EligibilitySection />
          <WorkflowSection />
          <DevelopersSection />
          <BeyondSection />
          <Closing />
        </main>
        <Footer />
      </div>
    </PolicyProvider>
  )
}
