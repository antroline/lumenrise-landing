import type { StoryFrame } from '../types/story.ts'

export function hasLeftQueue(frame: StoryFrame, wallet: number): boolean {
  return frame.current === wallet || frame.settled.includes(wallet)
}
