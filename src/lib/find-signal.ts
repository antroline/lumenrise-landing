import { SIGNALS } from '../data/signals.ts'
import type { Signal, SignalId } from '../types/signal.ts'

export function findSignal(id: SignalId): Signal {
  return SIGNALS.find((signal) => signal.id === id)!
}
