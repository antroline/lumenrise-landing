import { ArrowIcon } from './icons/ArrowIcon.tsx'

export function ChipCta({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} className="chip-cta group">
      {label} <ArrowIcon />
    </a>
  )
}
