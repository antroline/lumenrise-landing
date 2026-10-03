export function randomBetween(random: () => number, min: number, max: number): number {
  return min + Math.floor(random() * (max - min + 1))
}
