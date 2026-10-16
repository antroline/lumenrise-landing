import type { HTMLAttributes } from 'react'
import { cssVars } from '../lib/css-vars.ts'

type FloatProps = HTMLAttributes<HTMLDivElement> & {
  /** Entrance order within its scene. */
  order: number
  'data-place'?: string
}

/** A card floating in a scene; it surfaces after the scene is revealed. */
export function Float({ order, className, style, ...rest }: FloatProps) {
  return <div className={`float ${className}`} style={{ ...cssVars({ '--f': order }), ...style }} {...rest} />
}
