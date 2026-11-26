import { useState } from 'react'
import { SOCIAL_ICONS } from '../data/social-icons.ts'
import { cssVars } from '../lib/css-vars.ts'
import { shortAddress } from '../lib/short-address.ts'
import type { FeaturedLaunch } from '../types/launch.ts'
import { Avatar } from './Avatar.tsx'
import { UpRightIcon } from './icons/UpRightIcon.tsx'
import { ProjectMark } from './ProjectMark.tsx'

/** `index` staggers the entrance and picks the creator's avatar tone. */
export function LaunchCard({ launch, index }: { launch: FeaturedLaunch; index: number }) {
  const [failedLogo, setFailedLogo] = useState<string>()
  return (
    <a
      className="lcard"
      href={launch.href}
      style={cssVars({ '--k': index })}
      aria-label={`${launch.name}, ${launch.statusLabel.toLowerCase()} bonding curve launch`}
    >
      <span className="lcard-top">
        {launch.logo && failedLogo !== launch.logo ? (
          <img className="lcard-logo" src={launch.logo} width={44} height={44} alt="" onError={() => setFailedLogo(launch.logo)} />
        ) : <ProjectMark symbol={launch.symbol} />}
        <span className="min-w-0">
          <span className="lcard-name">{launch.name}</span>
          <span className="lcard-socials" aria-hidden="true">
            {launch.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social]
              return <Icon key={social} />
            })}
          </span>
        </span>
        <span className="lcard-status" data-status={launch.status}>
          {launch.statusLabel}
        </span>
      </span>
      <span className="lcard-blurb">{launch.description || `${launch.symbol} · Bonding Curve`}</span>
      <span className="lcard-figure">
        <span className="lcard-label">{launch.metric[1]}</span>
        <span className="lcard-value">{launch.metric[0]}</span>
        {launch.progress !== undefined && (
          <span className="lcard-bar" aria-hidden="true">
            <span style={cssVars({ '--p': launch.progress })} />
          </span>
        )}
        <span className="lcard-sub">
          {launch.detail[1]}: <span className="text-foreground">{launch.detail[0]}</span>
        </span>
      </span>
      <span className="lcard-foot">
        <Avatar text={launch.owner.slice(0, 2)} tone={index} />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.8125rem] font-medium" title={launch.owner}>{shortAddress(launch.owner)}</span>
          <span className="block truncate text-[0.75rem] text-muted-foreground">
            Creator · {launch.symbol} · Bonding Curve
          </span>
        </span>
        <span className="lcard-go" aria-hidden="true">
          <UpRightIcon />
        </span>
      </span>
    </a>
  )
}
