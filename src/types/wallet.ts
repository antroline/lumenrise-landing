import type { SignalId } from './signal.ts'

export type Evidence = Record<SignalId, number>
export type WalletNetwork = 'Stellar' | 'Base'

export type Wallet = {
  network: WalletNetwork
  address: string
  signals: Record<SignalId, boolean>
  evidence: Evidence
}
