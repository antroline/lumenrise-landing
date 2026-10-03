export type SectionHeadProps = {
  id: string
  eyebrow?: string
  title: string
  /** Optional second sentence, set in the muted tone. */
  follow?: string
  lede: string[]
  cta?: { label: string; href: string }
  /** Heading and lede in one column, for heads that sit beside a visual. */
  stack?: boolean
}
