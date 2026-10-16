import { STORY_WALLETS } from '../data/eligibility-story.ts'
import type { RuleCheckState, StoryFrame, StoryRuleId } from '../types/story.ts'

export function ruleCheckState(frame: StoryFrame, rule: StoryRuleId, position: number): RuleCheckState {
  if (position >= frame.rules) return 'off'
  if (frame.current === null) return 'idle'
  if (position < frame.checks) return STORY_WALLETS[frame.current].checks[rule].pass ? 'pass' : 'fail'
  return position === frame.checks && !frame.verdict ? 'checking' : 'idle'
}
