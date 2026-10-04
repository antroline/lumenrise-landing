/** A round monogram; `tone` cycles through the three avatar fills. */
export function Avatar({ text, tone }: { text: string; tone: number }) {
  return (
    <span className="avatar" data-tone={tone % 3} aria-hidden="true">
      {text}
    </span>
  )
}
