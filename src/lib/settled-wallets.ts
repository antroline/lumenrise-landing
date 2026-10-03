import { STORY_WALLETS } from '../data/eligibility-story.ts'
import type { StoryFrame, StoryWallet } from '../types/story.ts'
import { storyPassed } from './story-passed.ts'

/** Wallets that have left the gate on one side, in the order they arrived. */
export function settledWallets(frame: StoryFrame, passed: boolean): StoryWallet[] {
  return frame.settled.map((index) => STORY_WALLETS[index]).filter((wallet) => storyPassed(wallet) === passed)
}
