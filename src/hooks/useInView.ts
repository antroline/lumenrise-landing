import { useEffect, useState, type RefObject } from 'react'

/**
 * Whether the element overlaps the middle band of the viewport.
 * A band works for tall stacked layouts, where a ratio threshold may never be reached.
 */
export function useInView(ref: RefObject<HTMLElement | null>, band = '-30% 0px -30% 0px'): boolean {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: band })
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, band])
  return inView
}
