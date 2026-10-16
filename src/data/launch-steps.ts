/** Operations the CLI runs before the mechanism-specific final step, as named in the app. */
export const LAUNCH_OPERATIONS = [
  'Check launch settings',
  'Set up issuer & trustline',
  'Issue token supply',
  'Deploy token contract',
] as const

/** Index of the Eligibility step in the studio still. */
export const STUDIO_CURRENT_STEP = 5

/** Illustrative growth in rewarded contributors, oldest first. */
export const MOMENTUM_BARS = [0.32, 0.4, 0.36, 0.5, 0.46, 0.6, 0.58, 0.72, 0.7, 0.86, 0.92, 1] as const

/** Sample bid demand by price bucket, lowest price first, and the clearing bucket. */
export const AUCTION_DEMAND = [0.18, 0.26, 0.34, 0.46, 0.58, 0.72, 0.86, 1, 0.9, 0.74, 0.6, 0.44, 0.3, 0.2] as const
export const AUCTION_CLEARING_INDEX = 7

/** How far the sample bonding curve launch has progressed toward graduation. */
export const CURVE_PROGRESS = 0.38
