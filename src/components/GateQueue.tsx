import { STORY_WALLETS } from '../data/eligibility-story.ts'
import { flag } from '../lib/flag.ts'
import { hasLeftQueue } from '../lib/has-left-queue.ts'
import type { StoryFrame } from '../types/story.ts'
import { Float } from './Float.tsx'
import { Pill } from './Pill.tsx'
import { StoryWalletChip } from './StoryWalletChip.tsx'

/** Wallets waiting to be checked; each leaves an empty slot behind as it enters the gate. */
export function GateQueue({ frame }: { frame: StoryFrame }) {
  const waiting = STORY_WALLETS.filter((_, index) => !hasLeftQueue(frame, index)).length
  return (
    <Float order={0} className="gate-panel gate-queue">
      <div className="float-head">
        <span className="font-medium">Incoming wallets</span>
        <Pill>{waiting} waiting</Pill>
      </div>
      <ul className="gate-slots">
        {STORY_WALLETS.map((wallet, index) => {
          const gone = hasLeftQueue(frame, index)
          return (
            <li key={wallet.address} className="gate-slot" data-empty={flag(gone)}>
              {!gone && <StoryWalletChip wallet={wallet} />}
            </li>
          )
        })}
      </ul>
    </Float>
  )
}
