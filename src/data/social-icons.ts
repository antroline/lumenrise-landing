import type { ComponentType } from 'react'
import { GithubIcon } from '../components/icons/GithubIcon.tsx'
import { GlobeIcon } from '../components/icons/GlobeIcon.tsx'
import { SendIcon } from '../components/icons/SendIcon.tsx'
import { XIcon } from '../components/icons/XIcon.tsx'
import type { Social } from '../types/launch.ts'

export const SOCIAL_ICONS: Record<Social, ComponentType> = {
  x: XIcon,
  globe: GlobeIcon,
  send: SendIcon,
  github: GithubIcon,
}
