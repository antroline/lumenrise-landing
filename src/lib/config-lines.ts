import type { CodeLine } from '../types/code.ts'
import type { Mechanism } from '../types/mechanism.ts'
import type { SignalId } from '../types/signal.ts'
import { codeLine } from './code-line.ts'
import { quoted } from './quoted.ts'
import { requiredSignals } from './required-signals.ts'

/** The launch.json a policy compiles to. */
export function configLines(required: ReadonlySet<SignalId>, mechanism: Mechanism): CodeLine[] {
  const rules = requiredSignals(required).map((signal) => signal.rule)
  return [
    codeLine('{'),
    codeLine('  ', { kind: 'p', text: '"mechanism"' }, ': ', quoted(mechanism.id === 'curve' ? 'bonding_curve' : mechanism.id, '"'), ','),
    codeLine('  ', { kind: 'p', text: '"eligibility"' }, ': {'),
    codeLine('    ', { kind: 'p', text: '"require"' }, rules.length === 0 ? ': []' : ': ['),
    ...rules.map((rule, i) => codeLine('      ', quoted(rule, '"'), i < rules.length - 1 ? ',' : '')),
    ...(rules.length === 0 ? [] : [codeLine('    ]')]),
    codeLine('  },'),
    codeLine('  ', { kind: 'p', text: '"allocation"' }, ': ', quoted(required.size === 0 ? 'open' : mechanism.allocation, '"')),
    codeLine('}'),
  ]
}
