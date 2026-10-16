import { Float } from './Float.tsx'
import { KeyValueList } from './KeyValueList.tsx'
import { ProjectMark } from './ProjectMark.tsx'

type FlowTermsCardProps = {
  symbol: string
  name: string
  terms: readonly (readonly [string, string])[]
}

/** The first moment of a launch: the terms it was created with. */
export function FlowTermsCard({ symbol, name, terms }: FlowTermsCardProps) {
  return (
    <Float order={0} className="flow-card">
      <div className="float-head">
        <span className="flow-id">
          <ProjectMark symbol={symbol} size={28} />
          <span className="font-medium">{name}</span>
        </span>
      </div>
      <KeyValueList rows={terms} />
      <p className="flow-foot">Terms fixed at launch</p>
    </Float>
  )
}
