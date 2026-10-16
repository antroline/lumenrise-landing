import { SIGNALS } from '../data/signals.ts'
import type { Signal, SignalId } from '../types/signal.ts'

/** The required signals, in their canonical order. */
export function requiredSignals(required: ReadonlySet<SignalId>): Signal[] {
  return SIGNALS.filter((signal) => required.has(signal.id))
}
