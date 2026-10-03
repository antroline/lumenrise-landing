import type { Mechanism } from '../types/mechanism.ts'

/** The launch studio's steps for a mechanism, as named in the app. */
export function studioSteps(mechanism: Mechanism): string[] {
  return [
    'Token info',
    'Launch method',
    'Supply & allocation',
    `Configure ${mechanism.label.toLowerCase()}`,
    mechanism.id === 'auction' ? 'Schedule auction' : 'Launch settings',
    'Eligibility',
    ...(mechanism.vesting ? ['Vesting'] : []),
    'Review',
  ]
}
