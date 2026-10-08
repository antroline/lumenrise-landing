import { useHasChanged } from '../hooks/useHasChanged.ts'
import { usePolicy } from '../hooks/usePolicy.ts'
import { flag } from '../lib/flag.ts'
import { AuctionFlow } from './AuctionFlow.tsx'
import { CurveFlow } from './CurveFlow.tsx'
import { PresaleFlow } from './PresaleFlow.tsx'

/** The three moments of a launch under the chosen mechanism, one floating card each. */
export function LaunchFlow() {
  const { mechanism, required, tiers } = usePolicy()
  const open = required.size === 0
  // Cards only replay their entrance on a mechanism switch, not on the first reveal.
  const swapped = useHasChanged(mechanism.id)
  return (
    <div key={mechanism.id} className="flow" aria-live="polite" data-swap={flag(swapped)}>
      {mechanism.id === 'curve' && <CurveFlow open={open} />}
      {mechanism.id === 'auction' && <AuctionFlow open={open} />}
      {mechanism.id === 'presale' && <PresaleFlow mechanism={mechanism} tiers={tiers} open={open} />}
    </div>
  )
}
