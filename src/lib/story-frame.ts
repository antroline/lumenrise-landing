import type { StoryBeat, StoryFrame } from '../types/story.ts'

/** Replays the beats up to `index` to get what the scene shows at that moment. */
export function storyFrame(beats: readonly StoryBeat[], index: number): StoryFrame {
  const frame: StoryFrame = {
    phase: 0,
    rules: 0,
    current: null,
    checks: 0,
    verdict: false,
    settled: [],
    allocated: false,
    resetting: false,
    travel: null,
  }
  for (const beat of beats.slice(0, index + 1)) {
    frame.phase = beat.phase
    const { action } = beat
    if (action.type === 'rule') frame.rules++
    else if (action.type === 'enter') {
      frame.current = action.wallet
      frame.checks = 0
      frame.verdict = false
    } else if (action.type === 'check') frame.checks++
    else if (action.type === 'verdict') frame.verdict = true
    else if (action.type === 'settle' && frame.current !== null) {
      frame.settled = [...frame.settled, frame.current]
      frame.current = null
    } else if (action.type === 'allocate') frame.allocated = true
    else if (action.type === 'reset') frame.resetting = true
  }
  const action = beats[index]?.action.type
  frame.travel = action === 'enter' ? 'in' : action === 'settle' ? 'out' : null
  return frame
}
