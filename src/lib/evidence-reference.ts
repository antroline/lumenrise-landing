import type { Wallet } from '../types/wallet.ts'

/** A short, stable pseudo-reference so each sample evidence item looks traceable. */
export function evidenceReference(wallet: Wallet, salt: number): string {
  const start = wallet.address.slice(4 + salt * 7, 8 + salt * 7)
  const end = wallet.address.slice(40 - salt * 3, 44 - salt * 3)
  return `${start.toLowerCase()}…${end.toLowerCase()}`
}
