export function PrimaryCta({ label, href = 'https://platform.lumenrise.app/create' }: { label: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex h-11 items-center rounded-[10px] bg-lime px-5 text-[0.9375rem] font-medium text-ink transition-colors duration-150 hover:bg-lime-hover active:translate-y-px"
    >
      {label}
    </a>
  )
}
