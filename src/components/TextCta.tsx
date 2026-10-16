import { ArrowIcon } from './icons/ArrowIcon.tsx'

export function TextCta({ label, href, className = '' }: { label: string; href: string; className?: string }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 text-[0.9375rem] font-medium ${className}`}>
      {label} <ArrowIcon />
    </a>
  )
}
