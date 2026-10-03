/** Pointer-following light only for precise pointers, and only when motion is welcome. */
export function allowsPointerLight(): boolean {
  return window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches
}
