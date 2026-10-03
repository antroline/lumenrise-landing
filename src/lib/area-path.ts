import type { Point } from '../types/point.ts'

/** Closes a line down to the baseline, for the filled part of a chart. */
export function areaPath(points: readonly Point[], baseline: number): string {
  const first = points[0]
  const last = points[points.length - 1]
  const line = points.map(([x, y]) => `L${x.toFixed(1)} ${y.toFixed(1)}`).join('')
  return `M${first[0]} ${baseline}${line}L${last[0].toFixed(1)} ${baseline}Z`
}
