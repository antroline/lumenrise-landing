/** Highlight classes the code and terminal styles define. */
export type TokenKind = 'p' | 's' | 'k' | 'prompt' | 'ok' | 'out'

export type CodeToken = {
  kind?: TokenKind
  text: string
}

export type CodeLine = readonly CodeToken[]
