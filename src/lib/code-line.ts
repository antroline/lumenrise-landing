import type { CodeLine, CodeToken } from '../types/code.ts'

/** Builds a line from plain strings and highlighted tokens, in reading order. */
export function codeLine(...parts: (string | CodeToken | readonly CodeToken[])[]): CodeLine {
  return parts.flatMap((part) => (typeof part === 'string' ? [{ text: part }] : part))
}
