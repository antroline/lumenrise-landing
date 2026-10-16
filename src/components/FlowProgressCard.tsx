import { Float } from './Float.tsx'
import { Meter } from './Meter.tsx'
import { Pill } from './Pill.tsx'

type FlowProgressCardProps = {
  title: string
  status: string
  figure: string
  of: string
  progress: number
  foot: string
}

/** The second moment of a launch: how far along it is. */
export function FlowProgressCard({ title, status, figure, of, progress, foot }: FlowProgressCardProps) {
  return (
    <Float order={1} className="flow-card">
      <div className="float-head">
        <span className="font-medium">{title}</span>
        <Pill on>{status}</Pill>
      </div>
      <div className="flow-figures">
        <span className="flow-big tabular-nums">{figure}</span>
        <span className="text-muted-foreground tabular-nums">{of}</span>
      </div>
      <Meter progress={progress} />
      <p className="flow-foot">{foot}</p>
    </Float>
  )
}
