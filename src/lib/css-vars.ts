import type { CSSProperties } from 'react'

/** Inline custom properties, which React's style typing does not know about. */
export function cssVars(vars: Record<`--${string}`, string | number>): CSSProperties {
  return vars as CSSProperties
}
