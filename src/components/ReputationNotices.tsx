import { SIGNALS } from '../data/signals.ts'
import { usePolicy } from '../hooks/usePolicy.ts'
import { evidenceText } from '../lib/evidence-text.ts'
import { flag } from '../lib/flag.ts'
import { heldSignals } from '../lib/held-signals.ts'
import { linkedSources } from '../lib/linked-sources.ts'
import { plural } from '../lib/plural.ts'
import { shortAddress } from '../lib/short-address.ts'
import { strongestSignal } from '../lib/strongest-signal.ts'
import { Float } from './Float.tsx'
import { ShieldIcon } from './icons/ShieldIcon.tsx'
import { TrendIcon } from './icons/TrendIcon.tsx'
import { Pill } from './Pill.tsx'
import { WalletAvatar } from './WalletAvatar.tsx'

/** A summary of the wallet in focus, with its strongest signal and Sybil reading. */
export function ReputationNotices() {
  const { wallets, active } = usePolicy()
  const wallet = wallets[active]
  const held = heldSignals(wallet).length
  const sources = Object.values(linkedSources(wallet)).filter(Boolean).length
  const strongest = strongestSignal(wallet)
  return (
    <div className="rep-notices">
      <Float order={0} className="notice notice-lg" data-place="main">
        <WalletAvatar wallet={wallet} index={active} />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium tabular-nums">Wallet {shortAddress(wallet.address)}</span>
          <span className="block truncate text-[0.75rem] text-muted-foreground">
            {held} of {SIGNALS.length} signals · {plural(sources, 'source')} connected
          </span>
        </span>
        <Pill on>
          {held} / {SIGNALS.length}
        </Pill>
      </Float>
      {strongest && (
        <Float order={1} className="notice" data-place="a">
          <span className="notice-icon" data-on="">
            <TrendIcon />
          </span>
          <span className="min-w-0">
            <span className="block text-[0.6875rem] text-muted-foreground">{strongest.label}</span>
            <span className="block truncate font-medium">{evidenceText(strongest.id, wallet.evidence[strongest.id])}</span>
          </span>
        </Float>
      )}
      <Float order={2} className="notice" data-place="b">
        <span className="notice-icon" data-on={flag(wallet.signals.sybil)}>
          <ShieldIcon />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.6875rem] text-muted-foreground">Sybil resistance</span>
          <span className="block truncate font-medium">{evidenceText('sybil', wallet.evidence.sybil)}</span>
        </span>
      </Float>
    </div>
  )
}
