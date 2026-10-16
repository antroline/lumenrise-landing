import type { ReactNode } from 'react'

/** Geometric project marks, drawn in a 44×44 box; a ticker's hash picks one. */
export const MARK_SHAPES: readonly ReactNode[] = [
  // Sunrise: a half disc over the horizon.
  <>
    <path d="M10 27a12 12 0 0 1 24 0Z" fill="currentColor" />
    <path d="M8 31h28M12 35h20" stroke="currentColor" strokeWidth="2" />
  </>,
  // Two overlapping orbits.
  <>
    <circle cx="18" cy="22" r="8" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="26" cy="22" r="8" fill="currentColor" fillOpacity="0.85" />
  </>,
  // Offset stack.
  <>
    <rect x="10" y="12" width="18" height="6" rx="2" fill="currentColor" />
    <rect x="16" y="20" width="18" height="6" rx="2" fill="currentColor" fillOpacity="0.7" />
    <rect x="10" y="28" width="18" height="6" rx="2" fill="currentColor" fillOpacity="0.45" />
  </>,
  // Faceted diamond.
  <>
    <path d="M22 9 33 22 22 35 11 22Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M22 15 28 22 22 29 16 22Z" fill="currentColor" />
  </>,
]
