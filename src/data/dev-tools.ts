import type { DevTool } from '../types/dev-tool.ts'

export const DEV_TOOLS: readonly DevTool[] = [
  {
    id: 'sdk',
    title: 'TypeScript SDK',
    text: 'Check wallet reputation and eligibility, then participate in launches programmatically through authorized transactions.',
    file: 'app.ts',
    tone: 'cream',
  },
  {
    id: 'soroban',
    title: 'Onchain Verification',
    text: 'Reuse reputation and participation rules through a public contract, so other Stellar applications can enforce the same conditions.',
    file: 'contract.rs',
    tone: 'olive',
  },
  {
    id: 'api',
    title: 'Developer API',
    text: 'Query address reputation and evaluate participation requirements without building your own scoring infrastructure.',
    file: 'Terminal',
    tone: 'orange',
  },
]
