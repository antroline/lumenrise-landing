import type { SignalId } from './signal.ts'

export type Evaluation = {
  eligible: boolean
  /** Number of signals the wallet holds, which is also its tier. */
  held: number
  missing: SignalId[]
  allocation: number
}
