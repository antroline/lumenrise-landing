import { useSyncExternalStore } from 'react'
import { prefersReducedMotion } from '../lib/prefers-reduced-motion.ts'
import { subscribeReducedMotion } from '../lib/subscribe-reduced-motion.ts'

export function useReducedMotion(): boolean {
  return useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion)
}
