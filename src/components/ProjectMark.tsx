import { MARK_SHAPES } from '../data/mark-shapes.tsx'
import { cssVars } from '../lib/css-vars.ts'
import { hashText } from '../lib/hash-text.ts'

/** A small geometric project mark, generated from the ticker. */
export function ProjectMark({ symbol, size = 44 }: { symbol: string; size?: number }) {
  const h = hashText(symbol)
  return (
    <span className="mark" data-tone={h % 3} style={cssVars({ '--size': `${size}px` })} aria-hidden="true">
      <svg viewBox="0 0 44 44" fill="none">
        {MARK_SHAPES[(h >> 3) % MARK_SHAPES.length]}
      </svg>
    </span>
  )
}
