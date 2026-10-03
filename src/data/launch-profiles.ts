import type { LaunchProfile } from '../types/launch.ts'

/** Illustrative project copy and people for the sample launch cards. */
export const LAUNCH_PROFILES: Record<string, LaunchProfile> = {
  ASTR: { blurb: 'Open telemetry for Soroban contracts, priced by the people who run nodes.', founder: 'Lena Ortiz', socials: ['x', 'globe'] },
  KELP: { blurb: 'Yield routing for Stellar stablecoins with one-tap, gasless rebalancing.', founder: 'Tomi Adeyemi', socials: ['x', 'globe', 'send'] },
  ORBT: { blurb: 'A builder guild that funds open-source tooling through member votes.', founder: 'Kai Nakamura', socials: ['x', 'github'] },
  NOVA: { blurb: 'Self-custodied savings vaults with programmable unlocks for long-term holders.', founder: 'Mara Okafor', socials: ['x', 'globe'] },
  TIDE: { blurb: 'Liquidity for long-tail Stellar assets, matched in batches instead of races.', founder: 'Ilya Brandt', socials: ['x', 'globe', 'send'] },
  LPAS: { blurb: 'Membership passes for Stellar events, redeemable onchain at the door.', founder: 'Emily Carter', socials: ['x', 'globe'] },
  QSR: { blurb: 'Fast price oracles for Soroban, maintained by a staked operator set.', founder: 'Noah Lindqvist', socials: ['x', 'github'] },
  DRFT: { blurb: 'A cross-border payroll rail for remote teams, settled in minutes.', founder: 'Ana Ribeiro', socials: ['x', 'globe'] },
  MRDN: { blurb: 'Carbon-credit registry with public retirement receipts on Stellar.', founder: 'Omar Siddiqui', socials: ['x', 'globe', 'send'] },
}
