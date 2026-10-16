import type { StoryWallet } from '../types/story.ts'

export function storyPassed(wallet: StoryWallet): boolean {
  return Object.values(wallet.checks).every((check) => check.pass)
}
