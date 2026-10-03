import { useState } from 'react'

/** True once `value` has differed from what it was on the first render. */
export function useHasChanged<T>(value: T): boolean {
  const [initial] = useState(value)
  const [changed, setChanged] = useState(false)
  if (!changed && !Object.is(value, initial)) setChanged(true)
  return changed || !Object.is(value, initial)
}
