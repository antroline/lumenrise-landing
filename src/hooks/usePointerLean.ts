import { useEffect, type RefObject } from 'react'
import { allowsPointerLight } from '../lib/allows-pointer-light.ts'
import { pointerOffset } from '../lib/pointer-offset.ts'

/**
 * The hero light drifts a little toward the pointer. Writes `--lean` straight
 * to the element so following the pointer never re-renders; CSS does the easing.
 */
export function usePointerLean(ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const element = ref.current
    if (!element || !allowsPointerLight()) return
    const move = (event: PointerEvent) => {
      element.style.setProperty('--lean', pointerOffset(event, element)[0].toFixed(3))
    }
    const leave = () => element.style.setProperty('--lean', '0')
    element.addEventListener('pointermove', move)
    element.addEventListener('pointerleave', leave)
    return () => {
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', leave)
    }
  }, [ref])
}
