import { SIGNALS } from '../data/signals.ts'
import type { SignalId } from '../types/signal.ts'

/** The config field a signal's rule reads, such as `stellar.account_age`. */
export function signalField(id: SignalId): string {
  return SIGNALS.find((signal) => signal.id === id)!.rule.split(' ')[0]
}
