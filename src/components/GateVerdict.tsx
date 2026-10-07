import { STORY_WALLETS } from '../data/eligibility-story.ts'
import { storyPassed } from '../lib/story-passed.ts'
import type { StoryFrame } from '../types/story.ts'

/** The gate's decision for the wallet inside it, or what it is waiting for. */
export function GateVerdict({ frame }: { frame: StoryFrame }) {
  if (frame.current === null || !frame.verdict) {
    const waiting = frame.rules === 0 ? 'Turning rules on…' : frame.current === null ? 'Waiting for the next wallet' : 'Checking every rule…'
    return <p className="gate-verdict">{waiting}</p>
  }
  const wallet = STORY_WALLETS[frame.current]
  const passed = storyPassed(wallet)
  return (
    <p key={frame.current} className="gate-verdict" data-result={passed ? 'pass' : 'fail'}>
      {passed ? `Eligible · ${wallet.signals} of 5 signals` : `Filtered · ${wallet.reason}`}
    </p>
  )
}
