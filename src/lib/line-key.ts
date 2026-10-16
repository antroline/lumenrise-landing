import type { CodeLine } from '../types/code.ts'

/** A stable identity for a line's content, used to spot lines that changed. */
export function lineKey(line: CodeLine): string {
  return line.map((token) => `${token.kind ?? ''}:${token.text}`).join('\u0000')
}
