import { STUDIO_CURRENT_STEP } from '../data/launch-steps.ts'
import { usePolicy } from '../hooks/usePolicy.ts'
import { plural } from '../lib/plural.ts'
import { requiredSignals } from '../lib/required-signals.ts'
import { studioSteps } from '../lib/studio-steps.ts'
import { Float } from './Float.tsx'
import { StudioOption } from './StudioOption.tsx'

/** A still of the launch studio on its eligibility step, following the live policy. */
export function Studio() {
  const { mechanism, required } = usePolicy()
  const steps = studioSteps(mechanism)
  const rules = requiredSignals(required)
  const open = rules.length === 0
  return (
    <Float order={0} className="studio" role="img" aria-label="The LumenRise launch studio on its eligibility step.">
      <div className="studio-top">
        <span className="font-medium">New launch</span>
        <span className="text-muted-foreground tabular-nums">
          Step {STUDIO_CURRENT_STEP + 1} of {steps.length}
        </span>
      </div>
      <div className="studio-body">
        <ol className="studio-steps">
          {steps.map((step, i) => (
            <li
              key={step}
              data-state={i < STUDIO_CURRENT_STEP ? 'done' : i === STUDIO_CURRENT_STEP ? 'current' : 'next'}
            >
              <span className="studio-dot" />
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <div className="studio-panel">
          <p className="studio-heading">Eligibility</p>
          <p className="studio-sub">Who can take part in this launch?</p>
          <div className="studio-options">
            <StudioOption title="Open to everyone" detail="Any connected wallet can take part." selected={open} />
            <StudioOption title="Allowlist" detail="Only addresses you add." selected={false} />
            <StudioOption
              title="Reputation rules"
              detail={open ? 'Require signals from the policy.' : plural(rules.length, 'required signal')}
              selected={!open}
            >
              {!open && (
                <span className="studio-chips">
                  {rules.map((signal) => (
                    <span key={signal.id}>{signal.label}</span>
                  ))}
                </span>
              )}
            </StudioOption>
            <StudioOption title="Other verification" detail="Identity or project credentials." selected={false} />
          </div>
          <div className="studio-actions">
            <span className="studio-btn">Back</span>
            <span className="studio-btn studio-btn-primary">Continue</span>
          </div>
        </div>
      </div>
    </Float>
  )
}
