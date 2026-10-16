import type { StoryWallet } from '../types/story.ts'
import { Avatar } from './Avatar.tsx'

export function StoryWalletChip({ wallet }: { wallet: StoryWallet }) {
  return (
    <span className="gate-chip">
      <Avatar text={wallet.address.slice(1, 3)} tone={wallet.tone} />
      <span className="truncate font-medium tabular-nums">{wallet.address}</span>
    </span>
  )
}
