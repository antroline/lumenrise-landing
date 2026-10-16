import { EVIDENCE_SCALE } from '../data/sample.ts'
import type { SignalId } from '../types/signal.ts'

/** 0–1, how strong a wallet's evidence for one signal is. */
export function evidenceStrength(id: SignalId, value: number): number {
  if (id === 'sybil') return 1 - value / 100
  return Math.min(1, value / EVIDENCE_SCALE[id])
}
