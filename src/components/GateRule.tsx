import { findSignal } from '../lib/find-signal.ts'
import type { RuleCheckState, StoryRuleId } from '../types/story.ts'
import { CheckIcon } from './icons/CheckIcon.tsx'
import { CrossIcon } from './icons/CrossIcon.tsx'

type GateRuleProps = {
  rule: StoryRuleId
  state: RuleCheckState
  /** The wallet's evidence for this rule, once it has been checked. */
  evidence?: string
}

export function GateRule({ rule, state, evidence }: GateRuleProps) {
  const signal = findSignal(rule)
  return (
    <li className="gate-rule" data-state={state}>
      <span className="gate-rule-box" aria-hidden="true">
        <CheckIcon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[0.8125rem] font-medium">{signal.label}</span>
        <span className="block truncate font-mono-code text-[0.6875rem] text-muted-foreground">{signal.rule}</span>
      </span>
      <span className="gate-rule-result">
        {(state === 'pass' || state === 'fail') && (
          <>
            <span className="gate-rule-evidence">{evidence}</span>
            <span className="check-mark">{state === 'pass' ? <CheckIcon /> : <CrossIcon />}</span>
          </>
        )}
        {state === 'checking' && <span className="gate-scan" aria-hidden="true" />}
      </span>
    </li>
  )
}
