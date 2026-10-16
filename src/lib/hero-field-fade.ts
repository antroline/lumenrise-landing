/** In the lit hero the lines only gather where the light is, toward the bottom. */
export function heroFieldFade(y: number, height: number): number {
  return Math.max(0, (y / height - 0.35) / 0.65) ** 1.6
}
