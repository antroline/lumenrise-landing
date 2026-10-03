import { createContext } from 'react'
import type { PolicyState } from '../types/policy-state.ts'

export const PolicyContext = createContext<PolicyState | null>(null)
