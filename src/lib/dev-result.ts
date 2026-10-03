import type { DevResult } from '../types/dev-result.ts'
import type { DevToolId } from '../types/dev-tool.ts'
import type { Evaluation } from '../types/evaluation.ts'
import { plural } from './plural.ts'
import { signalField } from './signal-field.ts'

/** What each developer tool returns for the wallet in focus. */
export function devResult(tool: DevToolId, result: Evaluation, address: string, ruleCount: number): DevResult {
  const { eligible } = result
  switch (tool) {
    case 'sdk': {
      const missing = result.missing.map(signalField)
      return {
        eligible,
        title: `result.eligible → ${eligible}`,
        sub: missing.length === 0 ? `missing: [] · tier ${result.held}` : `missing: ${missing.join(', ')}`,
      }
    }
    case 'soroban':
      return {
        eligible,
        title: `is_eligible → ${eligible}`,
        sub: eligible ? 'Allocation released onchain' : 'Claim reverts: NotEligible',
      }
    case 'api':
      return {
        eligible,
        title: `200 OK · eligible: ${eligible}`,
        sub: `${address} · ${ruleCount === 0 ? 'open policy' : plural(ruleCount, 'rule') + ' checked'}`,
      }
  }
}
