export type SignalId = 'history' | 'soroban' | 'ecosystem' | 'developer' | 'sybil'

export type Signal = {
  id: SignalId
  label: string
  criterion: string
  /** Illustrative config expression for this requirement. */
  rule: string
  /** Where the evidence for this signal comes from. */
  source: string
  requiredByDefault: boolean
}
