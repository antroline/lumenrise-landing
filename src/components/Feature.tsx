import type { ReactNode } from 'react'

type FeatureProps = {
  title: string
  text: string
  className?: string
  /** The visual above the copy, usually a scene. */
  children: ReactNode
}

export function Feature({ title, text, className, children }: FeatureProps) {
  return (
    <article className={`feature${className ? ` ${className}` : ''}`}>
      {children}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </article>
  )
}
