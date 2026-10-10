import { ELIGIBILITY_STEPS } from '../data/eligibility-steps.ts'
import { cssVars } from '../lib/css-vars.ts'
import type { StoryPhase } from '../types/story.ts'

type StoryStepsProps = {
  phase: StoryPhase
  /** Restarts the active step's progress bar on every loop. */
  loop: number
  durations: readonly number[]
  /** Reduced motion: every step shown as complete, nothing animating. */
  still: boolean
}

/** The four steps under the scene; the one playing fills its bar while the story is on it. */
export function StorySteps({ phase, loop, durations, still }: StoryStepsProps) {
  return (
    <ol className="story-steps">
      {ELIGIBILITY_STEPS.map((step, i) => {
        const state = still || i < phase ? 'done' : i === phase ? 'current' : 'next'
        return (
          <li key={step.title} className="story-step" data-state={state} aria-current={state === 'current' ? 'step' : undefined}>
            <span className="story-track" aria-hidden="true">
              <span key={state === 'current' ? `${loop}` : state} style={cssVars({ '--d': `${durations[i]}ms` })} />
            </span>
            <span className="story-num">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="feature-title">{step.title}</h3>
            <p className="feature-text">{step.text}</p>
          </li>
        )
      })}
    </ol>
  )
}
