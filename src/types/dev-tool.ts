import type { SceneTone } from './scene-tone.ts'

export type DevToolId = 'sdk' | 'soroban' | 'api'

export type DevTool = {
  id: DevToolId
  title: string
  text: string
  file: string
  tone: SceneTone
}
