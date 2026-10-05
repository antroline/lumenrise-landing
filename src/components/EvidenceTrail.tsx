import { usePolicy } from '../hooks/usePolicy.ts'
import { cssVars } from '../lib/css-vars.ts'
import { evidenceReference } from '../lib/evidence-reference.ts'
import { evidenceText } from '../lib/evidence-text.ts'
import { heldSignals } from '../lib/held-signals.ts'
import { CheckIcon } from './icons/CheckIcon.tsx'

/** The first few pieces of evidence behind the wallet in focus, each with a reference. */
export function EvidenceTrail() {
  const { wallets, active } = usePolicy()
  const wallet = wallets[active]
  return (
    <ol className="w-trail">
      {heldSignals(wallet)
        .slice(0, 3)
        .map((signal, i) => (
          <li key={signal.id} className="float notice" style={cssVars({ '--f': i })}>
            <span className="notice-icon" data-on="">
              <CheckIcon />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium">{signal.label}</span>
              <span className="block truncate text-[0.75rem] text-muted-foreground">
                {evidenceText(signal.id, wallet.evidence[signal.id])}
              </span>
            </span>
            <span className="font-mono-code text-[0.6875rem] text-muted-foreground">{evidenceReference(wallet, i)}</span>
          </li>
        ))}
    </ol>
  )
}
