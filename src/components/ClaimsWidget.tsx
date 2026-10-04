import { Float } from './Float.tsx'
import { Meter } from './Meter.tsx'
import { Pill } from './Pill.tsx'

export function ClaimsWidget() {
  return (
    <Float order={0} className="w-widget">
      <div className="float-head">
        <span className="font-medium">Token claims</span>
        <Pill on>Live</Pill>
      </div>
      <div className="flex justify-between text-[0.75rem] text-muted-foreground">
        <span>Claim period</span>
        <span className="text-foreground tabular-nums">30 days</span>
      </div>
      <Meter progress={0.68} />
      <div className="flex justify-between text-[0.75rem] text-muted-foreground tabular-nums">
        <span>68% claimed</span>
        <span>2,340 / 3,400</span>
      </div>
    </Float>
  )
}
