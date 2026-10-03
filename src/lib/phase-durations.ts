import type { StoryBeat } from '../types/story.ts'

/** Total time spent in each of the four phases, for the step progress bars. */
export function phaseDurations(beats: readonly StoryBeat[]): [number, number, number, number] {
  const totals: [number, number, number, number] = [0, 0, 0, 0]
  for (const beat of beats) totals[beat.phase] += beat.ms
  return totals
}
