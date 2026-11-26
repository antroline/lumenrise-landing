import type { Signal } from '../types/signal.ts'
import type { WalletNetwork } from '../types/wallet.ts'

/** Contract and account history have parallel rules in the two samples. */
export function networkSignal(signal: Signal, network: WalletNetwork): Signal {
  if (network !== 'Base') return signal
  if (signal.id === 'history') return { ...signal, source: 'Base', rule: 'base.account_age >= 12mo' }
  if (signal.id === 'soroban') {
    return { ...signal, label: 'Contract activity', source: 'Base', rule: 'base.contract_calls > 0' }
  }
  return signal
}
