import type { CodeToken } from '../types/code.ts'

export function keyword(text: string): CodeToken {
  return { kind: 'k', text }
}
