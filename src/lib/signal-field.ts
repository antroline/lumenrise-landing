import type { SignalId } from '../types/signal.ts'
import type { WalletNetwork } from '../types/wallet.ts'
import { findSignal } from './find-signal.ts'
import { networkSignal } from './network-signal.ts'

/** The config field a signal's rule reads, such as `stellar.account_age`. */
export function signalField(id: SignalId, network: WalletNetwork): string {
  return networkSignal(findSignal(id), network).rule.split(' ')[0]
}
