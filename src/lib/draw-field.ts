import type { Fade } from '../types/fade.ts'

/**
 * The brand's engraved texture: a field of horizontal hairlines, drawn on a
 * canvas so the pitch stays crisp at any size and pixel ratio. Colour and
 * strength come from `--engrave-ink` and `--engrave-field` on the host.
 */
export function drawField(host: HTMLElement, canvas: HTMLCanvasElement, fade: Fade): void {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const width = host.clientWidth
  const height = host.clientHeight
  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, width, height)

  const styles = getComputedStyle(host)
  const alpha = Number(styles.getPropertyValue('--engrave-field')) || 0.12
  ctx.fillStyle = styles.getPropertyValue('--engrave-ink').trim() || '#0b0b0b'
  const pitch = width < 640 ? 5 : 6
  for (let y = pitch / 2; y < height; y += pitch) {
    ctx.globalAlpha = alpha * fade(y, height)
    ctx.fillRect(0, y - 0.5, width, 1)
  }
}
