import { usePolicy } from '../hooks/usePolicy.ts'
import { cssVars } from '../lib/css-vars.ts'
import { linkedSources } from '../lib/linked-sources.ts'
import { GithubIcon } from './icons/GithubIcon.tsx'
import { StellarIcon } from './icons/StellarIcon.tsx'
import { XIcon } from './icons/XIcon.tsx'
import { SourceRow } from './SourceRow.tsx'

/** Data sources the wallet in focus has connected. */
export function SourceList() {
  const { wallets, active } = usePolicy()
  const linked = linkedSources(wallets[active])
  return (
    <ul className="float w-sources" style={cssVars({ '--f': 0 })}>
      <SourceRow mark={<StellarIcon />} name="Stellar" detail="Account history, Soroban activity" on={linked.stellar} />
      <SourceRow mark={<GithubIcon />} name="GitHub" detail="Repositories and contributions" on={linked.github} />
      <SourceRow
        mark={<span className="text-[0.6875rem] font-semibold">GL</span>}
        name="GitLab"
        detail="Repositories and contributions"
        on={linked.gitlab}
      />
      <SourceRow mark={<XIcon />} name="X" detail="Social presence" on={linked.x} />
    </ul>
  )
}
