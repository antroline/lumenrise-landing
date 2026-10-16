import { useEffect, type RefObject } from 'react'
import { drawField } from '../lib/draw-field.ts'
import type { Fade } from '../types/fade.ts'

/**
 * Keeps the hairline field on `canvasRef` sized to its host and in the current
 * colour scheme. Change `tone` whenever the host's tone, and so its ink, changes.
 */
export function useEngravedField(
  hostRef: RefObject<HTMLElement | null>,
  canvasRef: RefObject<HTMLCanvasElement | null>,
  fade: Fade,
  tone?: string,
): void {
  useEffect(() => {
    const host = hostRef.current
    const canvas = canvasRef.current
    if (!host || !canvas) return
    const draw = () => drawField(host, canvas, fade)
    const observer = new ResizeObserver(draw)
    observer.observe(host)
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')
    scheme.addEventListener('change', draw)
    draw()
    return () => {
      observer.disconnect()
      scheme.removeEventListener('change', draw)
    }
  }, [hostRef, canvasRef, fade, tone])
}
