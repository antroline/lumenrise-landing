export function sceneFieldFade(y: number, height: number): number {
  return 0.35 + 0.65 * (y / height) ** 1.4
}
