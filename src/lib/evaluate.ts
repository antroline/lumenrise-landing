import { SIGNALS } from '../data/signals.ts'
import type { Evaluation } from '../types/evaluation.ts'
import type { Mechanism } from '../types/mechanism.ts'
import type { SignalId } from '../types/signal.ts'
import type { Wallet } from '../types/wallet.ts'

export function evaluate(wallet: Wallet, required: ReadonlySet<SignalId>, mechanism: Mechanism): Evaluation {
  const held = SIGNALS.filter((signal) => wallet.signals[signal.id]).length
  const missing = SIGNALS.filter((signal) => required.has(signal.id) && !wallet.signals[signal.id]).map(
    (signal) => signal.id,
  )
  const eligible = missing.length === 0
  const allocation = !eligible ? 0 : required.size === 0 ? 0.3 : mechanism.tiers[held]
  return { eligible, held, missing, allocation }
}
