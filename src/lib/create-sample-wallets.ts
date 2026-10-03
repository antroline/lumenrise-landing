import { BASE32 } from '../data/sample.ts'
import type { Wallet } from '../types/wallet.ts'
import { mulberry32 } from './mulberry32.ts'
import { randomBetween } from './random-between.ts'

/**
 * Synthetic, deterministic sample. Signals are loosely correlated the way real
 * activity tends to be: contract users usually have account history,
 * developers usually use contracts, and young accounts carry more Sybil risk.
 */
export function createSampleWallets(count: number, seed: number): Wallet[] {
  const random = mulberry32(seed)
  return Array.from({ length: count }, () => {
    const history = random() < 0.68
    const soroban = random() < (history ? 0.62 : 0.2)
    const ecosystem = random() < (soroban ? 0.6 : 0.32)
    const developer = random() < (soroban ? 0.34 : 0.08)
    const risk = history ? randomBetween(random, 4, 48) : randomBetween(random, 30, 92)
    const address = 'G' + Array.from({ length: 55 }, () => BASE32[Math.floor(random() * 32)]).join('')
    return {
      address,
      signals: { history, soroban, ecosystem, developer, sybil: risk <= 35 },
      evidence: {
        history: history ? randomBetween(random, 12, 64) : randomBetween(random, 1, 11),
        soroban: soroban ? randomBetween(random, 3, 180) : 0,
        ecosystem: ecosystem ? randomBetween(random, 1, 7) : 0,
        developer: developer ? randomBetween(random, 1, 9) : 0,
        sybil: risk,
      },
    }
  })
}
