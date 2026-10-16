import { reducedMotionQuery } from './reduced-motion-query.ts'

export function prefersReducedMotion(): boolean {
  return reducedMotionQuery().matches
}
