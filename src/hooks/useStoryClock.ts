import { useEffect, useState } from 'react'

/**
 * Steps through beats of the given lengths and loops. While `playing` is off
 * the clock rewinds, so the story always starts from the top when it comes back on screen.
 */
export function useStoryClock(durations: readonly number[], playing: boolean): { index: number; loop: number } {
  const [clock, setClock] = useState({ index: 0, loop: 0 })
  useEffect(() => {
    if (!playing) {
      setClock((current) => (current.index === 0 ? current : { index: 0, loop: current.loop + 1 }))
      return
    }
    const timer = window.setTimeout(() => {
      setClock((current) =>
        current.index + 1 >= durations.length
          ? { index: 0, loop: current.loop + 1 }
          : { index: current.index + 1, loop: current.loop },
      )
    }, durations[clock.index])
    return () => window.clearTimeout(timer)
  }, [playing, clock.index, durations])
  return clock
}
