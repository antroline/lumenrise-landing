import type { Point } from '../types/point.ts'

export function polylinePath(points: readonly Point[]): string {
  return points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join('')
}
