import type { CodeLine } from '../types/code.ts'
import type { SignalId } from '../types/signal.ts'
import { codeLine } from './code-line.ts'
import { keyword } from './keyword.ts'
import { quoted } from './quoted.ts'
import { requiredSignals } from './required-signals.ts'

/** An SDK eligibility check for one wallet against the current policy. */
export function sdkLines(required: ReadonlySet<SignalId>, address: string): CodeLine[] {
  const rules = requiredSignals(required)
  return [
    codeLine(keyword('import'), ' { LumenRise } ', keyword('from'), ' ', quoted('@lumenrise/sdk', "'")),
    codeLine(),
    codeLine(keyword('const'), ' lumen = ', keyword('new'), ' LumenRise()'),
    codeLine(keyword('const'), ' result = ', keyword('await'), ' lumen.eligibility.check({'),
    codeLine('  wallet: ', quoted(address, "'"), ','),
    codeLine(rules.length === 0 ? '  require: [],' : '  require: ['),
    ...rules.map((signal) => codeLine('    ', quoted(signal.rule, "'"), ',')),
    ...(rules.length === 0 ? [] : [codeLine('  ],')]),
    codeLine('})'),
  ]
}
