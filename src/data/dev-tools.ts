import type { DevTool } from '../types/dev-tool.ts'

export const DEV_TOOLS: readonly DevTool[] = [
  {
    id: 'sdk',
    title: 'Reputation SDK',
    text: 'Access reputation capabilities and eligibility checks directly from your application with a JavaScript/TypeScript SDK.',
    file: 'app.ts',
    tone: 'cream',
  },
  {
    id: 'soroban',
    title: 'Onchain Verification',
    text: 'Bring eligibility verification to Soroban, allowing smart contracts to use reputation-based conditions.',
    file: 'contract.rs',
    tone: 'olive',
  },
  {
    id: 'api',
    title: 'Developer API',
    text: 'Retrieve reputation data, evaluate eligibility, and connect external applications to the reputation infrastructure.',
    file: 'Terminal',
    tone: 'orange',
  },
]
