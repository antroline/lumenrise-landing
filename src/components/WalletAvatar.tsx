import type { Wallet } from '../types/wallet.ts'
import { Avatar } from './Avatar.tsx'

export function WalletAvatar({ wallet, index }: { wallet: Wallet; index: number }) {
  const offset = wallet.network === 'Base' ? 2 : 1
  return <Avatar text={wallet.address.slice(offset, offset + 2).toUpperCase()} tone={index} />
}
