import { reducedMotionQuery } from './reduced-motion-query.ts'

export function subscribeReducedMotion(onChange: () => void): () => void {
  const query = reducedMotionQuery()
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}
