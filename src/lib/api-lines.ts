import type { CodeLine } from '../types/code.ts'
import type { SignalId } from '../types/signal.ts'
import type { WalletNetwork } from '../types/wallet.ts'
import { codeLine } from './code-line.ts'
import { requiredSignals } from './required-signals.ts'
import { signalField } from './signal-field.ts'

/** A REST eligibility request for one wallet against the current policy. */
export function apiLines(required: ReadonlySet<SignalId>, address: string, network: WalletNetwork): CodeLine[] {
  const rules = requiredSignals(required)
  const sources = [...new Set(rules.map((signal) => signalField(signal.id, network).split('.')[0]))]
  const policy = sources.length === 0 ? 'open' : sources.join(',')
  return [
    codeLine({ kind: 'prompt', text: '$' }, ' curl ', { kind: 's', text: '$LUMENRISE_API/v1/eligibility' }, ' \\'),
    codeLine('  -H ', { kind: 's', text: '"Authorization: Bearer $KEY"' }, ' \\'),
    codeLine('  -H ', { kind: 's', text: `"X-Chain: ${network.toLowerCase()}"` }, ' \\'),
    codeLine('  -d wallet=', { kind: 's', text: address }, ' \\'),
    codeLine('  -d policy=', { kind: 's', text: policy }),
  ]
}
