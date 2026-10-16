import { Float } from './Float.tsx'
import { VoteRow } from './VoteRow.tsx'

export function VoteWidget() {
  return (
    <Float order={0} className="w-widget">
      <div className="float-head">
        <span className="font-medium">Treasury proposal</span>
        <span className="text-[0.75rem] text-muted-foreground tabular-nums">1,204 voters</span>
      </div>
      <VoteRow label="Yes" progress={0.64} value="64%" />
      <VoteRow label="No" progress={0.36} value="36%" no />
      <p className="text-[0.75rem] text-muted-foreground">Voting requires 12+ months of account history</p>
    </Float>
  )
}
