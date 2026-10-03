import { useMemo, useState } from 'react'
import { MECHANISMS } from '../data/mechanisms.ts'
import { WALLET_COUNT, WALLET_SEED } from '../data/sample.ts'
import { countTiers } from '../lib/count-tiers.ts'
import { createSampleWallets } from '../lib/create-sample-wallets.ts'
import { defaultRequiredSignals } from '../lib/default-required-signals.ts'
import { evaluate } from '../lib/evaluate.ts'
import { findStartWallet } from '../lib/find-start-wallet.ts'
import type { MechanismId } from '../types/mechanism.ts'
import type { PolicyState } from '../types/policy-state.ts'
import type { SignalId } from '../types/signal.ts'

/** Owns the sample policy: mechanism, required signals, and the wallet in focus. */
export function usePolicyState(): PolicyState {
  const [wallets] = useState(() => createSampleWallets(WALLET_COUNT, WALLET_SEED))
  const [mechanismId, setMechanism] = useState<MechanismId>(MECHANISMS[0].id)
  const [required] = useState<ReadonlySet<SignalId>>(defaultRequiredSignals)
  const [active, setActive] = useState(() => findStartWallet(wallets, required, MECHANISMS[0]))

  const mechanism = MECHANISMS.find((m) => m.id === mechanismId) ?? MECHANISMS[0]
  const evaluations = useMemo(
    () => wallets.map((wallet) => evaluate(wallet, required, mechanism)),
    [wallets, required, mechanism],
  )

  return useMemo(
    () => ({
      wallets,
      mechanism,
      setMechanism,
      required,
      active,
      setActive,
      evaluations,
      eligible: evaluations.filter((result) => result.eligible).length,
      tiers: countTiers(evaluations),
    }),
    [wallets, mechanism, required, active, evaluations],
  )
}
