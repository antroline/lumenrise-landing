import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useReducedMotion } from './useReducedMotion.ts'

export function useSmoothScroll() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      allowNestedScroll: true,
    })

    return () => lenis.destroy()
  }, [reducedMotion])
}
