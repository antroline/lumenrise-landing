import type { CodeToken } from '../types/code.ts'

/** A string literal: muted quote marks around a highlighted value. */
export function quoted(text: string, mark: "'" | '"'): CodeToken[] {
  return [
    { kind: 'p', text: mark },
    { kind: 's', text },
    { kind: 'p', text: mark },
  ]
}
