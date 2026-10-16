import { LAUNCH_PROFILES } from '../data/launch-profiles.ts'
import { LAUNCH_STATUS_LABELS } from '../data/launch-status-labels.ts'
import { MECHANISM_LABELS } from '../data/mechanism-labels.ts'
import { SOCIAL_ICONS } from '../data/social-icons.ts'
import { cssVars } from '../lib/css-vars.ts'
import { initials } from '../lib/initials.ts'
import type { SampleLaunch } from '../types/launch.ts'
import { Avatar } from './Avatar.tsx'
import { UpRightIcon } from './icons/UpRightIcon.tsx'
import { ProjectMark } from './ProjectMark.tsx'

/** `index` staggers the entrance and picks the founder's avatar tone. */
export function LaunchCard({ launch, index }: { launch: SampleLaunch; index: number }) {
  const profile = LAUNCH_PROFILES[launch.symbol]
  const status = LAUNCH_STATUS_LABELS[launch.status]
  const mechanism = MECHANISM_LABELS[launch.mechanism]
  return (
    <a
      className="lcard"
      href="https://platform.lumenrise.app/launches"
      style={cssVars({ '--k': index })}
      aria-label={`${launch.name}, ${status.toLowerCase()} ${mechanism.toLowerCase()} launch`}
    >
      <span className="lcard-top">
        <ProjectMark symbol={launch.symbol} />
        <span className="min-w-0">
          <span className="lcard-name">{launch.name}</span>
          <span className="lcard-socials">
            {profile.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social]
              return <Icon key={social} />
            })}
          </span>
        </span>
        <span className="lcard-status" data-status={launch.status}>
          {status}
        </span>
      </span>
      <span className="lcard-blurb">{profile.blurb}</span>
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
        <Avatar text={initials(profile.founder)} tone={index} />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.8125rem] font-medium">{profile.founder}</span>
          <span className="block truncate text-[0.75rem] text-muted-foreground">
            Founder · {launch.symbol} · {mechanism}
          </span>
        </span>
        <span className="lcard-go" aria-hidden="true">
          <UpRightIcon />
        </span>
      </span>
    </a>
  )
}
