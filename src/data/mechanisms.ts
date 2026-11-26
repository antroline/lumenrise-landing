import type { Mechanism } from '../types/mechanism.ts'

export const MECHANISMS: readonly Mechanism[] = [
  {
    id: 'curve',
    label: 'Bonding curve',
    tagline: 'Launch with dynamic pricing.',
    summary:
      'Buy and sell along a programmable pricing curve until graduation. Prices adjust automatically as tokens move in and out of the curve.',
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
      'Participants name their price. Higher bids fill first, reputation breaks ties, and funds not used for an allocation go back to the bidder.',
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
      'A fixed price gives everyone the same terms. After the sale closes, reputation gives contributors priority if demand exceeds supply, and unused funds are refundable.',
    axis: 'Allocation cap',
    allocation: 'cap_by_evidence_tier',
    createStep: 'Create presale',
    vesting: true,
    tiers: [0.2, 0.32, 0.46, 0.62, 0.8, 1],
  },
]
