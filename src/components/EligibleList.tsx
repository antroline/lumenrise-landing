import { STORY_ELIGIBLE_SLOTS } from '../data/eligibility-story.ts'
import { cssVars } from '../lib/css-vars.ts'
import { flag } from '../lib/flag.ts'
import { settledWallets } from '../lib/settled-wallets.ts'
import type { StoryFrame } from '../types/story.ts'
import { Float } from './Float.tsx'
import { Pill } from './Pill.tsx'
import { StoryWalletChip } from './StoryWalletChip.tsx'

/** Wallets that passed; once allocated, each gets a tier and a share sized by its signals. */
export function EligibleList({ frame }: { frame: StoryFrame }) {
  const wallets = settledWallets(frame, true)
  const top = Math.max(0, ...wallets.map((wallet) => wallet.signals))
  return (
    <Float order={2} className="gate-panel">
      <div className="float-head">
        <span className="font-medium">Eligible</span>
        <Pill on={wallets.length > 0}>{wallets.length}</Pill>
      </div>
      <ul className="gate-slots">
        {Array.from({ length: STORY_ELIGIBLE_SLOTS }, (_, slot) => {
          const wallet = wallets[slot]
          if (!wallet) return <li key={slot} className="gate-slot" data-empty="" />
          return (
            <li
              key={wallet.address}
              className="gate-slot gate-arrive"
              data-top={flag(frame.allocated && wallet.signals === top)}
            >
              <StoryWalletChip wallet={wallet} />
              {frame.allocated ? (
                <span className="gate-tier">
                  <span className="gate-share" aria-hidden="true">
                    <span style={cssVars({ '--p': wallet.signals / 5 })} />
                  </span>
                  <Pill on>Tier {wallet.signals}</Pill>
                </span>
              ) : (
                <span className="text-[0.75rem] text-muted-foreground">Approved</span>
              )}
            </li>
          )
        })}
      </ul>
      <p className="gate-foot" data-on={flag(frame.allocated)}>
        {frame.allocated ? 'More signals, a larger allocation.' : 'Tiers are set once every wallet is checked.'}
      </p>
    </Float>
  )
}
