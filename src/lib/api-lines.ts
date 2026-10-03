import type { CodeLine } from '../types/code.ts'
import type { SignalId } from '../types/signal.ts'
import { codeLine } from './code-line.ts'
import { requiredSignals } from './required-signals.ts'
import { signalField } from './signal-field.ts'

/** A REST eligibility request for one wallet against the current policy. */
export function apiLines(required: ReadonlySet<SignalId>, address: string): CodeLine[] {
  const rules = requiredSignals(required)
  const policy = rules.length === 0 ? 'open' : rules.map((signal) => signalField(signal.id).split('.')[0]).join(',')
  return [
    codeLine({ kind: 'prompt', text: '$' }, ' curl ', { kind: 's', text: '$LUMENRISE_API/v1/eligibility' }, ' \\'),
    codeLine('  -H ', { kind: 's', text: '"Authorization: Bearer $KEY"' }, ' \\'),
    codeLine('  -d wallet=', { kind: 's', text: address }, ' \\'),
    codeLine('  -d policy=', { kind: 's', text: policy }),
  ]
}
