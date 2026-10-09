import type { SectionHeadProps } from '../types/section-head.ts'
import { ChipCta } from './ChipCta.tsx'

export function SectionHead({ id, eyebrow, title, follow, lede, cta, stack }: SectionHeadProps) {
  return (
    <div className={`section-head${stack ? ' section-head-stack' : ''}`}>
      <div className="section-heading">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id} className="section-title">
          <span className="block text-balance">{title}</span>
          {follow && <span className="block text-balance text-muted-foreground">{follow}</span>}
        </h2>
      </div>
      <div className="section-aside">
        {lede.map((paragraph) => (
          <p key={paragraph} className="section-lede">
            {paragraph}
          </p>
        ))}
        {cta && (
          <div className="mt-1">
            <ChipCta label={cta.label} href={cta.href} />
          </div>
        )}
      </div>
    </div>
  )
}
