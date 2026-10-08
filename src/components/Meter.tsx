import { cssVars } from '../lib/css-vars.ts'

/** A thin fill bar; `progress` is 0–1. */
export function Meter({ progress }: { progress: number }) {
  return (
    <span className="meter" aria-hidden="true">
      <span style={cssVars({ '--p': progress })} />
    </span>
  )
}
