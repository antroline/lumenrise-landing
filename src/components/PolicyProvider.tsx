import type { ReactNode } from 'react'
import { usePolicyState } from '../hooks/usePolicyState.ts'
import { PolicyContext } from '../lib/policy-context.ts'

export function PolicyProvider({ children }: { children: ReactNode }) {
  return <PolicyContext value={usePolicyState()}>{children}</PolicyContext>
}
