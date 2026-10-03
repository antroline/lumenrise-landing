import type { Mechanism } from '../types/mechanism.ts'

export const MECHANISMS: readonly Mechanism[] = [
  {
    id: 'curve',
    label: 'Bonding curve',
    tagline: 'Launch with dynamic pricing.',
    summary:
      'Let tokens trade through a programmable pricing curve, where price responds to supply and demand.',
    axis: 'Purchase limit',
    allocation: 'purchase_limit_by_tier',
    createStep: 'Create bonding curve',
    vesting: false,
    tiers: [0.1, 0.16, 0.26, 0.4, 0.62, 1],
  },
  {
    id: 'auction',
    label: 'Auction',
    tagline: 'Let the market find the price.',
    summary:
      'Bring participants together in a structured bidding process designed for transparent price discovery and token allocation.',
    axis: 'Bid access',
    allocation: 'equal_bid_access',
    createStep: 'Create auction',
    vesting: true,
    tiers: [1, 1, 1, 1, 1, 1],
  },
  {
    id: 'presale',
    label: 'Presale',
    tagline: 'Build momentum before launch.',
    summary:
      'Set your fundraising terms, define participation rules, and distribute tokens through a structured presale.',
    axis: 'Allocation cap',
    allocation: 'cap_by_evidence_tier',
    createStep: 'Create presale',
    vesting: true,
    tiers: [0.2, 0.32, 0.46, 0.62, 0.8, 1],
  },
]
