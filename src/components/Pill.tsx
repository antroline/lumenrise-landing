import type { ReactNode } from 'react'
import { flag } from '../lib/flag.ts'

/** A status chip: lit when `on`, warm when `off`, neutral otherwise. */
export function Pill({ on = false, off = false, children }: { on?: boolean; off?: boolean; children: ReactNode }) {
  return (
    <span className="pill" data-on={flag(on)} data-off={flag(off)}>
      {children}
    </span>
  )
}
