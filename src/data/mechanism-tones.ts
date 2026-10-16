import type { MechanismId } from '../types/mechanism.ts'
import type { SceneTone } from '../types/scene-tone.ts'

/** Each mechanism lights the launch stage in its own tone. */
export const MECHANISM_TONES: Record<MechanismId, SceneTone> = {
  curve: 'lime',
  auction: 'orange',
  presale: 'olive',
}
