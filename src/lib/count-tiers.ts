import type { Evaluation } from '../types/evaluation.ts'
import type { Tiers } from '../types/tiers.ts'

export function countTiers(evaluations: readonly Evaluation[]): Tiers {
  const tiers: Tiers = [0, 0, 0, 0, 0]
  for (const result of evaluations) {
    if (result.eligible && result.held > 0) tiers[result.held - 1]++
  }
  return tiers
}
