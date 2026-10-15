import { Logo } from '../components/Logo.tsx'
import { NAV_LINKS } from '../data/navigation.ts'

export function Header() {
  return (
    <header className="site-header">
      <div className="container flex h-18 items-center gap-10">
        <a href="/" className="-m-1 rounded-md p-1" aria-label="LumenRise home">
          <Logo />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[0.875rem] text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="rounded-sm transition-colors duration-150 hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://platform.lumenrise.app/"
          className="ml-auto inline-flex h-10 items-center rounded-[10px] bg-foreground px-4 text-[0.875rem] font-medium text-background transition-opacity duration-150 hover:opacity-85"
        >
          Launch App
        </a>
      </div>
    </header>
  )
}
