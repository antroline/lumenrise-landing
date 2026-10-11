import { flag } from '../lib/flag.ts'
import { Meter } from './Meter.tsx'

type VoteRowProps = {
  label: string
  progress: number
  value: string | number
  /** Muted styling for the losing or filtered side. */
  no?: boolean
}

export function VoteRow({ label, progress, value, no = false }: VoteRowProps) {
  return (
    <div className="vote" data-no={flag(no)}>
      <span>{label}</span>
      <Meter progress={progress} />
      <span className="tabular-nums">{value}</span>
    </div>
  )
}
