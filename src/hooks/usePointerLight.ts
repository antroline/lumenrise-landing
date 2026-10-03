import { useEffect, type RefObject } from 'react'
import { allowsPointerLight } from '../lib/allows-pointer-light.ts'
import { pointerOffset } from '../lib/pointer-offset.ts'

/** Scene light follows the pointer through `--mx` and `--my`, written without re-rendering. */
export function usePointerLight(ref: RefObject<HTMLElement | null>): void {
  useEffect(() => {
    const element = ref.current
    if (!element || !allowsPointerLight()) return
    const move = (event: PointerEvent) => {
      const [x, y] = pointerOffset(event, element)
      element.style.setProperty('--mx', x.toFixed(3))
      element.style.setProperty('--my', y.toFixed(3))
    }
    const leave = () => {
      element.style.setProperty('--mx', '0')
      element.style.setProperty('--my', '0')
    }
    element.addEventListener('pointermove', move)
    element.addEventListener('pointerleave', leave)
    return () => {
      element.removeEventListener('pointermove', move)
      element.removeEventListener('pointerleave', leave)
    }
  }, [ref])
}
