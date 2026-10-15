import { HeroCard } from '../components/HeroCard.tsx'
import { HeroLaunches } from '../components/HeroLaunches.tsx'

export function Hero() {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <HeroCard />
      <HeroLaunches />
    </section>
  )
}
