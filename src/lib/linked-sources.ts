import type { LinkedSources } from '../types/linked-sources.ts'
import type { Wallet } from '../types/wallet.ts'

/** Which data sources a sample wallet would plausibly have connected. */
export function linkedSources(wallet: Wallet): LinkedSources {
  return {
    stellar: wallet.network === 'Stellar',
    base: wallet.network === 'Base',
    github: wallet.signals.developer,
    gitlab: false,
    x: wallet.evidence.ecosystem > 2,
  }
}
