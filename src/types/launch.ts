import type { MechanismId } from './mechanism.ts'

export type LaunchStatus = 'upcoming' | 'live' | 'graduated'

export type Social = 'x' | 'globe' | 'send' | 'github'

export type SampleLaunch = {
  name: string
  symbol: string
  mechanism: MechanismId
  status: LaunchStatus
  /** Headline figure and its label. */
  metric: [string, string]
  /** Secondary figure and its label. */
  detail: [string, string]
  /** 0–1, shown as a progress bar for live launches. */
  progress?: number
  eligibility: string
}

export type LaunchProfile = {
  blurb: string
  founder: string
  socials: Social[]
}

/** Public, indexed project data used by the landing page. */
export type FeaturedLaunch = {
  id: string
  slug: string
  href: string
  name: string
  symbol: string
  description: string
  logo?: string
  owner: string
  creatorName?: string
  creatorAvatar?: string
  socials: Social[]
  status: LaunchStatus | 'failed'
  statusLabel: string
  metric: [string, string]
  detail: [string, string]
  progress?: number
}
