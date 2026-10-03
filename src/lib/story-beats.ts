import { STORY_PACE, STORY_RULES, STORY_WALLETS } from '../data/eligibility-story.ts'
import type { StoryBeat } from '../types/story.ts'

/** The full loop: rules switch on, each wallet is checked and sorted, then eligible wallets get their tiers. */
export function storyBeats(): StoryBeat[] {
  const beats: StoryBeat[] = [{ phase: 0, ms: STORY_PACE.intro, action: { type: 'hold' } }]
  for (const _ of STORY_RULES) beats.push({ phase: 0, ms: STORY_PACE.rule, action: { type: 'rule' } })
  beats.push({ phase: 0, ms: STORY_PACE.rulesHold, action: { type: 'hold' } })

  STORY_WALLETS.forEach((wallet, index) => {
    const { phase } = wallet
    const slow = wallet.pace === 'slow'
    beats.push({ phase, ms: STORY_PACE.enter, action: { type: 'enter', wallet: index } })
    for (const _ of STORY_RULES) {
      beats.push({ phase, ms: slow ? STORY_PACE.check : STORY_PACE.fastCheck, action: { type: 'check' } })
    }
    beats.push({ phase, ms: slow ? STORY_PACE.verdict : STORY_PACE.fastVerdict, action: { type: 'verdict' } })
    beats.push({ phase, ms: STORY_PACE.settle, action: { type: 'settle' } })
  })

  beats.push({ phase: 3, ms: STORY_PACE.allocate, action: { type: 'allocate' } })
  beats.push({ phase: 3, ms: STORY_PACE.hold, action: { type: 'hold' } })
  beats.push({ phase: 3, ms: STORY_PACE.reset, action: { type: 'reset' } })
  return beats
}
