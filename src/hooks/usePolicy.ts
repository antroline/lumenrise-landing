import { useContext } from 'react'
import { PolicyContext } from '../lib/policy-context.ts'
import type { PolicyState } from '../types/policy-state.ts'

export function usePolicy(): PolicyState {
  const policy = useContext(PolicyContext)
  if (!policy) throw new Error('usePolicy must be used inside <PolicyProvider>.')
  return policy
}
