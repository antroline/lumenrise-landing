import { MOMENTUM_BARS } from '../data/launch-steps.ts'
import { cssVars } from '../lib/css-vars.ts'
import { Float } from './Float.tsx'
import { TrendIcon } from './icons/TrendIcon.tsx'
import { Pill } from './Pill.tsx'

export function MomentumWidget() {
  return (
    <Float order={0} className="w-widget">
      <span className="text-[0.75rem] text-muted-foreground">Contributors rewarded</span>
      <span className="flex items-end justify-between gap-3">
        <span className="text-[1.75rem] leading-none font-medium tracking-[-0.03em] tabular-nums">1,842</span>
        <Pill on>
          <TrendIcon /> +28%
        </Pill>
      </span>
      <span className="spark-bars" aria-hidden="true">
        {MOMENTUM_BARS.map((value, i) => (
          <span key={i} style={cssVars({ '--v': value })} />
        ))}
      </span>
    </Float>
  )
}
