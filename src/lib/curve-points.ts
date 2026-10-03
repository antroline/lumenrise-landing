import type { Point } from '../types/point.ts'

/** The sample bonding curve, plotted into the 240×112 flow chart. */
export function curvePoints(): Point[] {
  return Array.from({ length: 41 }, (_, i) => {
    const x = i / 40
    return [8 + x * 224, 104 - (0.06 + 0.94 * x ** 2.2) * 88] as const
  })
}
