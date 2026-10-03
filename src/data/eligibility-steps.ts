/** The story's steps, in the order the animation plays them. */
export const ELIGIBILITY_STEPS = [
  {
    title: 'Define Your Rules',
    text: 'Create eligibility policies that reflect your project’s priorities.',
  },
  {
    title: 'Verify Eligibility',
    text: 'Evaluate participants against your policies and use the results to manage access and token allocations.',
  },
  {
    title: 'Reduce Sybil Abuse',
    text: 'Incorporate Sybil-risk signals into participation requirements and allocation decisions.',
  },
  {
    title: 'Recognize Contributors',
    text: 'Identify participants based on meaningful activity and contributions, not just wallet balances.',
  },
] as const
