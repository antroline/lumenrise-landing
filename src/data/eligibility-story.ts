import type { StoryRuleId, StoryWallet } from '../types/story.ts'

export const STORY_RULES: readonly StoryRuleId[] = ['history', 'soroban', 'sybil']

/** Hand-picked sample wallets, ordered so each step of the story gets its moment. */
export const STORY_WALLETS: readonly StoryWallet[] = [
  {
    address: 'GBXK…4QRT',
    tone: 0,
    checks: {
      history: { pass: true, evidence: '3y 2m on Stellar' },
      soroban: { pass: true, evidence: '142 contract calls' },
      sybil: { pass: true, evidence: 'Low risk signals' },
    },
    signals: 4,
    phase: 1,
    pace: 'slow',
  },
  {
    address: 'GAHT…7VWD',
    tone: 1,
    checks: {
      history: { pass: true, evidence: '1y 8m on Stellar' },
      soroban: { pass: true, evidence: '36 contract calls' },
      sybil: { pass: true, evidence: 'Low risk signals' },
    },
    signals: 3,
    phase: 1,
    pace: 'fast',
  },
  {
    address: 'GD7P…M2LA',
    tone: 2,
    checks: {
      history: { pass: true, evidence: '1y 1m on Stellar' },
      soroban: { pass: true, evidence: '9 contract calls' },
      sybil: { pass: false, evidence: 'Elevated risk signals' },
    },
    signals: 2,
    reason: 'Sybil risk',
    phase: 2,
    pace: 'slow',
  },
  {
    address: 'GCQ4…Z8NE',
    tone: 0,
    checks: {
      history: { pass: false, evidence: '4 months on Stellar' },
      soroban: { pass: true, evidence: '12 contract calls' },
      sybil: { pass: true, evidence: 'Low risk signals' },
    },
    signals: 2,
    reason: 'Account too new',
    phase: 2,
    pace: 'fast',
  },
  {
    address: 'GBMR…K5PS',
    tone: 1,
    checks: {
      history: { pass: true, evidence: '4y 6m on Stellar' },
      soroban: { pass: true, evidence: '180 contract calls' },
      sybil: { pass: true, evidence: 'Low risk signals' },
    },
    signals: 5,
    phase: 3,
    pace: 'fast',
  },
]

/** Beat lengths in milliseconds. */
export const STORY_PACE = {
  intro: 700,
  rule: 650,
  rulesHold: 900,
  enter: 700,
  check: 620,
  fastCheck: 320,
  verdict: 1000,
  fastVerdict: 600,
  settle: 650,
  allocate: 2000,
  hold: 2800,
  reset: 700,
} as const

/** Slots in each result list, so the scene keeps its size as wallets arrive. */
export const STORY_ELIGIBLE_SLOTS = 3
export const STORY_FILTERED_SLOTS = 2
