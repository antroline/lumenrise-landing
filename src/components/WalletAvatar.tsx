import type { Wallet } from '../types/wallet.ts'
import { Avatar } from './Avatar.tsx'

export function WalletAvatar({ wallet, index }: { wallet: Wallet; index: number }) {
  return <Avatar text={wallet.address.slice(1, 3)} tone={index} />
}
