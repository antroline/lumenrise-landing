import type { SignalId } from './signal.ts'

/** The rules the eligibility story checks, in order. */
export type StoryRuleId = Extract<SignalId, 'history' | 'soroban' | 'sybil'>

/** 0 Define rules, 1 Verify, 2 Reduce Sybil, 3 Recognize contributors. */
export type StoryPhase = 0 | 1 | 2 | 3

export type StoryCheck = { pass: boolean; evidence: string }

export type StoryWallet = {
  address: string
  /** Avatar fill, 0–2. */
  tone: number
  checks: Record<StoryRuleId, StoryCheck>
  /** Signals held out of five, which is also the wallet's tier. */
  signals: number
  /** Why the wallet was filtered; only set for wallets that fail a rule. */
  reason?: string
  /** The step this wallet's check illustrates. */
  phase: Exclude<StoryPhase, 0>
  /** Slow wallets are checked rule by rule; fast ones show the pattern repeating. */
  pace: 'slow' | 'fast'
}

export type StoryAction =
  | { type: 'rule' }
  | { type: 'enter'; wallet: number }
  | { type: 'check' }
  | { type: 'verdict' }
  | { type: 'settle' }
  | { type: 'allocate' }
  | { type: 'hold' }
  | { type: 'reset' }

export type StoryBeat = {
  phase: StoryPhase
  /** How long this beat stays on screen. */
  ms: number
  action: StoryAction
}

/** One rule row in the gate: not yet defined, waiting, being checked, or decided. */
export type RuleCheckState = 'off' | 'idle' | 'checking' | 'pass' | 'fail'

/** Everything the gate scene shows at one beat. */
export type StoryFrame = {
  phase: StoryPhase
  /** Rules switched on so far. */
  rules: number
  /** Wallet inside the gate, if any. */
  current: number | null
  /** Rules checked for the current wallet. */
  checks: number
  verdict: boolean
  /** Wallets that have left the gate, in the order they left. */
  settled: number[]
  allocated: boolean
  resetting: boolean
  /** A wallet is travelling into or out of the gate on this beat. */
  travel: 'in' | 'out' | null
}
