import { SIGNALS } from '../data/signals.ts'
import type { SignalId } from '../types/signal.ts'

export function defaultRequiredSignals(): Set<SignalId> {
  return new Set(SIGNALS.filter((signal) => signal.requiredByDefault).map((signal) => signal.id))
}
