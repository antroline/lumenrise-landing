import { SIGNALS } from '../data/signals.ts'
import type { Signal } from '../types/signal.ts'
import type { Wallet } from '../types/wallet.ts'

export function heldSignals(wallet: Wallet): Signal[] {
  return SIGNALS.filter((signal) => wallet.signals[signal.id])
}
