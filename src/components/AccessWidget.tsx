import { Float } from './Float.tsx'
import { KeyIcon } from './icons/KeyIcon.tsx'
import { Pill } from './Pill.tsx'

export function AccessWidget() {
  return (
    <Float order={0} className="w-widget w-access">
      <span className="access-icon">
        <KeyIcon />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium">Verified contributor</span>
        <span className="block font-mono-code text-[0.6875rem] text-muted-foreground">dev.linked_repos &gt;= 1</span>
      </span>
      <Pill on>Access granted</Pill>
    </Float>
  )
}
