export const NAV_LINKS = [
  { label: 'Explore', href: '#launches' },
  { label: 'Launch', href: '#launch' },
  { label: 'Reputation', href: '#reputation' },
  { label: 'Developers', href: '#developers' },
  { label: 'Access', href: '#access' },
] as const

export const HERO_LINKS = [
  { label: 'Bonding curves', href: '#launch' },
  { label: 'Auctions', href: '#launch' },
  { label: 'Presales', href: '#launch' },
  { label: 'Launch to liquidity', href: '#lifecycle' },
] as const

export const FOOTER_COLUMNS = [
  {
    title: 'Platform',
    links: [
      ['Explore Launches', 'https://platform.lumenrise.app/launches'],
      ['Create a Launch', 'https://platform.lumenrise.app/create'],
      ['Reputation', 'https://platform.lumenrise.app/reputation'],
    ],
  },
  {
    title: 'Community',
    links: [
      ['X', 'https://x.com/lumenRiseApp'],
    ],
  },
] as const
