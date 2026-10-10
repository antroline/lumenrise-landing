import type { ReactNode } from 'react'
import { flag } from '../lib/flag.ts'

type StudioOptionProps = { title: string; detail: string; selected: boolean; children?: ReactNode }

export function StudioOption({ title, detail, selected, children }: StudioOptionProps) {
  return (
    <div className="studio-option" data-selected={flag(selected)}>
      <span className="studio-radio" />
      <span className="min-w-0">
        <span className="block font-medium">{title}</span>
        <span className="block text-muted-foreground">{detail}</span>
        {children}
      </span>
    </div>
  )
}
