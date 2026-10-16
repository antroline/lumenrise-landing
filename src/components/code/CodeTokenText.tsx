import type { CodeToken } from '../../types/code.ts'

export function CodeTokenText({ token }: { token: CodeToken }) {
  return token.kind ? <span className={token.kind}>{token.text}</span> : <>{token.text}</>
}
