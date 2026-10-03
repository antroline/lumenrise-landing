import type { Dispatch, SetStateAction } from 'react'
import type { Evaluation } from './evaluation.ts'
import type { Mechanism, MechanismId } from './mechanism.ts'
import type { SignalId } from './signal.ts'
import type { Tiers } from './tiers.ts'
import type { Wallet } from './wallet.ts'

/** The shared launch policy every interactive section reads and edits. */
export type PolicyState = {
  wallets: Wallet[]
  mechanism: Mechanism
  setMechanism: (id: MechanismId) => void
  required: ReadonlySet<SignalId>
  active: number
  setActive: Dispatch<SetStateAction<number>>
  evaluations: Evaluation[]
  eligible: number
  tiers: Tiers
}
