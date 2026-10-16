import { useRef, type ReactNode } from 'react'
import { useEngravedField } from '../hooks/useEngravedField.ts'
import { usePointerLight } from '../hooks/usePointerLight.ts'
import { useReveal } from '../hooks/useReveal.ts'
import { flag } from '../lib/flag.ts'
import { sceneFieldFade } from '../lib/scene-field-fade.ts'
import type { SceneTone } from '../types/scene-tone.ts'

type SceneProps = {
  tone: SceneTone
  className: string
  children: ReactNode
}

/**
 * A lit surface: layered brand gradients with the engraved hairline field on
 * top. Floating cards inside it surface once the scene is first seen.
 */
export function Scene({ tone, className, children }: SceneProps) {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const seen = useReveal(ref)
  useEngravedField(ref, canvasRef, sceneFieldFade, tone)
  usePointerLight(ref)
  return (
    <div ref={ref} className={`scene ${className}`} data-tone={tone} data-reveal="" data-in={flag(seen)}>
      <canvas ref={canvasRef} aria-hidden="true" />
      {children}
    </div>
  )
}
