import type { ReactNode } from 'react'

type WorkflowPathProps = {
  title: string
  tagline: string
  text: string
  cta: ReactNode
  /** The visual above the copy, a scene. */
  children: ReactNode
}

export function WorkflowPath({ title, tagline, text, cta, children }: WorkflowPathProps) {
  return (
    <article className="path">
      {children}
      <div className="path-copy">
        <h3 className="path-title">{title}</h3>
        <p className="path-tagline">{tagline}</p>
        <p className="path-text">{text}</p>
        <div className="mt-4">{cta}</div>
      </div>
    </article>
  )
}
