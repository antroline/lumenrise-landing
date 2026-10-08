export function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <picture>
      <source srcSet="/branding/lumenrise-logo-horizontal-for-dark-background.svg" media="(prefers-color-scheme: dark)" />
      <img
        src="/branding/lumenrise-logo-horizontal-for-light-background.svg"
        alt=""
        width="120"
        height="25"
        className={`${size === 'sm' ? 'h-[22px]' : 'h-[25px]'} w-auto`}
      />
    </picture>
  )
}
