import type { SignalId } from '../types/signal.ts'

export function evidenceText(id: SignalId, value: number): string {
  switch (id) {
    case 'history': {
      const years = Math.floor(value / 12)
      const months = value % 12
      return years > 0 ? `${years}y ${months}m on Stellar` : `${months} months on Stellar`
    }
    case 'soroban':
      return value > 0 ? `${value} contract calls` : 'No contract calls'
    case 'ecosystem':
      return value > 0 ? `${value} launch${value === 1 ? '' : 'es'} joined` : 'No launches joined'
    case 'developer':
      return value > 0 ? `${value} linked repo${value === 1 ? '' : 's'}` : 'Not linked'
    case 'sybil':
      return value <= 35 ? 'Low risk signals' : value <= 65 ? 'Moderate risk signals' : 'Elevated risk signals'
  }
}
