import type { Signal } from '../types/signal.ts'
import type { Wallet } from '../types/wallet.ts'
import { evidenceStrength } from './evidence-strength.ts'
import { heldSignals } from './held-signals.ts'

/** The held signal with the most evidence behind it, leaving out Sybil risk. */
export function strongestSignal(wallet: Wallet): Signal | undefined {
  return heldSignals(wallet)
    .filter((signal) => signal.id !== 'sybil')
    .sort((a, b) => evidenceStrength(b.id, wallet.evidence[b.id]) - evidenceStrength(a.id, wallet.evidence[a.id]))[0]
}
