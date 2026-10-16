import { useEffect, useRef } from 'react'

/**
 * Compares this render's line keys with the last committed ones. `first` is
 * true until the lines have rendered once; `fresh` marks lines that are new since.
 */
export function useFreshLines(keys: readonly string[]): { first: boolean; fresh: boolean[] } {
  const previous = useRef<readonly string[] | null>(null)
  const before = previous.current
  useEffect(() => {
    previous.current = keys
  })
  if (before === null) return { first: true, fresh: keys.map(() => false) }
  const seen = new Set(before)
  return { first: false, fresh: keys.map((key) => !seen.has(key)) }
}
