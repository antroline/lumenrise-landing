export type MechanismId = 'curve' | 'auction' | 'presale'

export type Mechanism = {
  id: MechanismId
  label: string
  tagline: string
  summary: string
  /** What eligibility controls under this mechanism. */
  axis: string
  allocation: string
  /** Final operation when the launch is created, as named in the app. */
  createStep: string
  /** The app skips the vesting step for bonding curve launches. */
  vesting: boolean
  /** Relative allocation for an eligible wallet, indexed by signals held (0–5). */
  tiers: readonly [number, number, number, number, number, number]
}
