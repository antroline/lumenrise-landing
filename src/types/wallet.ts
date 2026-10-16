import type { SignalId } from './signal.ts'

export type Evidence = Record<SignalId, number>

export type Wallet = {
  address: string
  signals: Record<SignalId, boolean>
  evidence: Evidence
}
