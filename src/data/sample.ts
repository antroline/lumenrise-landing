/** Size of the synthetic wallet sample every policy view evaluates. */
export const WALLET_COUNT = 28

export const WALLET_SEED = 7502

/** Upper end of each signal's evidence, used to size its bar. */
export const EVIDENCE_SCALE = { history: 64, soroban: 180, ecosystem: 7, developer: 9, sybil: 100 } as const

export const BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
