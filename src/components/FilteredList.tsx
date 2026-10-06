import { STORY_FILTERED_SLOTS } from '../data/eligibility-story.ts'
import { settledWallets } from '../lib/settled-wallets.ts'
import type { StoryFrame } from '../types/story.ts'
import { Float } from './Float.tsx'
import { Pill } from './Pill.tsx'
import { StoryWalletChip } from './StoryWalletChip.tsx'

/** Wallets that failed a rule, each with the reason. */
export function FilteredList({ frame }: { frame: StoryFrame }) {
  const wallets = settledWallets(frame, false)
  return (
    <Float order={3} className="gate-panel">
      <div className="float-head">
        <span className="font-medium">Filtered</span>
        <Pill off={wallets.length > 0}>{wallets.length}</Pill>
      </div>
      <ul className="gate-slots">
        {Array.from({ length: STORY_FILTERED_SLOTS }, (_, slot) => {
          const wallet = wallets[slot]
          if (!wallet) return <li key={slot} className="gate-slot" data-empty="" />
          return (
            <li key={wallet.address} className="gate-slot gate-arrive" data-filtered="">
              <StoryWalletChip wallet={wallet} />
              <Pill off>{wallet.reason}</Pill>
            </li>
          )
        })}
      </ul>
    </Float>
  )
}
