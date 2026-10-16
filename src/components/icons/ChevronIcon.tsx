export function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d={direction === 'left' ? 'M7.5 2.5 4 6l3.5 3.5' : 'M4.5 2.5 8 6 4.5 9.5'} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
