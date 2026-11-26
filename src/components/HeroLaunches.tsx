import { useEffect, useState } from 'react'
import { fetchFeaturedLaunches, PROJECTS_URL } from '../lib/featured-launches.ts'
import type { FeaturedLaunch } from '../types/launch.ts'
import { ChipCta } from './ChipCta.tsx'
import { LaunchCard } from './LaunchCard.tsx'

/** The latest confirmed mainnet launches, using the platform's public API. */
export function HeroLaunches() {
  const [state, setState] = useState<{ status: 'loading' | 'ready' | 'error'; launches: FeaturedLaunch[] }>({ status: 'loading', launches: [] })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    fetchFeaturedLaunches(controller.signal)
      .then((launches) => {
        if (!controller.signal.aborted) setState({ status: 'ready', launches })
      })
      .catch(() => {
        if (!controller.signal.aborted) setState({ status: 'error', launches: [] })
      })
    return () => controller.abort()
  }, [attempt])

  return (
    <div id="launches" className="hero-launches" role="region" aria-label="Latest launches">
      <div className="hero-launch-grid" aria-busy={state.status === 'loading'}>
        {state.status === 'loading' ? Array.from({ length: 3 }, (_, index) => (
          <div className="lcard lcard-skeleton" key={index} aria-hidden="true">
            <span className="lcard-top"><span className="lcard-placeholder lcard-placeholder-logo" /><span className="lcard-placeholder" /></span>
            <span className="lcard-placeholder lcard-placeholder-copy" />
            <span className="lcard-placeholder lcard-placeholder-figure" />
            <span className="lcard-placeholder" />
          </div>
        )) : state.launches.map((launch, index) => (
          <LaunchCard key={launch.id} launch={launch} index={index} />
        ))}
        {state.status === 'error' && (
          <div className="lcard launches-message">
            <p>Projects couldn’t load. Please try again.</p>
            <button className="launches-retry" type="button" onClick={() => {
              setState({ status: 'loading', launches: [] })
              setAttempt((value) => value + 1)
            }}>Try again</button>
          </div>
        )}
        {state.status === 'ready' && state.launches.length === 0 && (
          <div className="lcard launches-message"><p>No launches to show yet. Explore the platform for updates.</p></div>
        )}
      </div>
      <p className="sr-only" role="status">
        {state.status === 'loading' ? 'Loading projects.' : state.status === 'error' ? 'Projects could not load.' : `${state.launches.length} projects loaded.`}
      </p>
      <div className="hero-launches-foot">
        <ChipCta label="Explore All Launches" href={PROJECTS_URL} />
      </div>
    </div>
  )
}
