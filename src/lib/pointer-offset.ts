import type { Point } from '../types/point.ts'

/** The pointer's position over an element, -0.5 to 0.5 on each axis. */
export function pointerOffset(event: PointerEvent, element: HTMLElement): Point {
  const rect = element.getBoundingClientRect()
  return [(event.clientX - rect.left) / rect.width - 0.5, (event.clientY - rect.top) / rect.height - 0.5]
}
