import type { Mechanism } from '../types/mechanism.ts'
import type { SignalId } from '../types/signal.ts'
import type { Wallet } from '../types/wallet.ts'
import { evaluate } from './evaluate.ts'

/** Start on a wallet that passes the default policy, so every view opens on a result. */
export function findStartWallet(wallets: readonly Wallet[], required: ReadonlySet<SignalId>, mechanism: Mechanism): number {
  return Math.max(
    0,
    wallets.findIndex((wallet) => {
      const result = evaluate(wallet, required, mechanism)
      return result.held >= 4 && result.eligible
    }),
  )
}
