import { CURVE_PROGRESS } from '../data/launch-steps.ts'
import { areaPath } from '../lib/area-path.ts'
import { curvePoints } from '../lib/curve-points.ts'
import { polylinePath } from '../lib/polyline-path.ts'
import { FlowProgressCard } from './FlowProgressCard.tsx'
import { FlowTermsCard } from './FlowTermsCard.tsx'
import { Float } from './Float.tsx'
import { TrendIcon } from './icons/TrendIcon.tsx'
import { Pill } from './Pill.tsx'

export function CurveFlow({ open }: { open: boolean }) {
  const points = curvePoints()
  const filled = points.slice(0, Math.round(CURVE_PROGRESS * (points.length - 1)) + 1)
  const [x, y] = filled[filled.length - 1]
  return (
    <>
      <FlowTermsCard
        symbol="NOVA"
        name="Nova Vault"
        terms={[
          ['Supply', '100,000,000'],
          ['Start price', '0.0040 XLM'],
          ['Graduates at', '85,000 XLM'],
          ['Purchase limit', open ? 'Open to everyone' : 'By evidence tier'],
        ]}
      />
      <FlowProgressCard
        title="Trading"
        status="Live"
        figure="32,300 XLM"
        of="of 85,000"
        progress={CURVE_PROGRESS}
        foot="38% to graduation · 327 buyers · 2 days left"
      />
      <Float order={2} className="flow-card">
        <div className="float-head">
          <span className="font-medium">Price on the curve</span>
          <Pill on>
            <TrendIcon /> +360%
          </Pill>
        </div>
        <svg className="flow-chart" viewBox="0 0 240 112" role="img" aria-label="Price rises along the bonding curve as supply is bought.">
          <path d="M8 104H232" className="axis" />
          <path d={areaPath(filled, 104)} className="area" />
          <path d={polylinePath(points)} className="curve-ghost" />
          <path d={polylinePath(filled)} className="curve" />
          <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r="4.5" className="dot" />
        </svg>
        <p className="flow-foot">0.0040 → 0.0184 XLM · price follows supply</p>
      </Float>
    </>
  )
}
