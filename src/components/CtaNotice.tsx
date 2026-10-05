import type { ReactNode } from 'react'
import { Float } from './Float.tsx'
import { Pill } from './Pill.tsx'

type CtaNoticeProps = {
  order: number
  /** Corner of the closing scene: tl, tr, or br. */
  place: string
  mark: ReactNode
  title: string
  sub: string
  pill: string
}

/** A decorative activity card around the closing call to action. */
export function CtaNotice({ order, place, mark, title, sub, pill }: CtaNoticeProps) {
  return (
    <Float order={order} className="notice cta-notice" data-place={place} aria-hidden="true">
      {mark}
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium">{title}</span>
        <span className="block truncate text-[0.75rem] text-muted-foreground">{sub}</span>
      </span>
      <Pill on>{pill}</Pill>
    </Float>
  )
}
