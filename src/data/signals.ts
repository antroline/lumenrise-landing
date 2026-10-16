import type { Signal } from '../types/signal.ts'

export const SIGNALS: readonly Signal[] = [
  {
    id: 'history',
    label: 'Account history',
    criterion: 'Active for 12+ months',
    rule: 'stellar.account_age >= 12mo',
    source: 'Stellar',
    requiredByDefault: true,
  },
  {
    id: 'soroban',
    label: 'Soroban activity',
    criterion: 'Has invoked contracts',
    rule: 'soroban.invocations > 0',
    source: 'Soroban',
    requiredByDefault: true,
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem',
    criterion: 'Joined earlier launches',
    rule: 'ecosystem.launches >= 1',
    source: 'LumenRise',
    requiredByDefault: false,
  },
  {
    id: 'developer',
    label: 'Developer',
    criterion: 'Linked GitHub or GitLab',
    rule: 'dev.linked_repos >= 1',
    source: 'GitHub',
    requiredByDefault: false,
  },
  {
    id: 'sybil',
    label: 'Sybil resistance',
    criterion: 'Low Sybil-risk signals',
    rule: 'sybil.risk <= 0.35',
    source: 'Risk signals',
    requiredByDefault: false,
  },
]
