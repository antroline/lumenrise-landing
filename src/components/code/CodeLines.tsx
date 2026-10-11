import { useFreshLines } from '../../hooks/useFreshLines.ts'
import { cssVars } from '../../lib/css-vars.ts'
import { flag } from '../../lib/flag.ts'
import { lineKey } from '../../lib/line-key.ts'
import type { CodeLine } from '../../types/code.ts'
import { CodeTokenText } from './CodeTokenText.tsx'

/**
 * Code lines that type in the first time their scene is revealed, then flash
 * whichever lines change after that.
 */
export function CodeLines({ lines }: { lines: readonly CodeLine[] }) {
  const keys = lines.map(lineKey)
  const { first, fresh } = useFreshLines(keys)
  return (
    <code>
      {lines.map((line, k) => (
        <span
          // A changed line remounts so its highlight replays.
          key={`${k}:${keys[k]}`}
          className={first ? 'line typing' : 'line'}
          style={cssVars({ '--k': k })}
          data-fresh={flag(fresh[k])}
        >
          {line.length === 0 ? ' ' : line.map((token, i) => <CodeTokenText key={i} token={token} />)}
        </span>
      ))}
    </code>
  )
}
