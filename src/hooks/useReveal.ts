import { useEffect, useState, type RefObject } from 'react'

/** True from the first time a fifth of the element is on screen; entrances play once. */
export function useReveal(ref: RefObject<HTMLElement | null>): boolean {
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element || seen) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        setSeen(true)
      },
      { threshold: 0.2 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, seen])
  return seen
}
