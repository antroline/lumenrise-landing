import type { ReactNode } from 'react'
import { flag } from '../lib/flag.ts'

type SourceRowProps = { mark: ReactNode; name: string; detail: string; on: boolean }

export function SourceRow({ mark, name, detail, on }: SourceRowProps) {
  return (
    <li className="source">
      <span className="source-mark">{mark}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.8125rem] font-medium">{name}</span>
        <span className="block truncate text-[0.6875rem] text-muted-foreground">{detail}</span>
      </span>
      <span className="switch" data-on={flag(on)}>
        <span className="sr-only">{on ? 'Connected' : 'Not connected'}</span>
      </span>
    </li>
  )
}
