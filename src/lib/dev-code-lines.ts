import { SOROBAN_LINES } from '../data/soroban-lines.ts'
import type { CodeLine } from '../types/code.ts'
import type { DevToolId } from '../types/dev-tool.ts'
import type { SignalId } from '../types/signal.ts'
import { apiLines } from './api-lines.ts'
import { sdkLines } from './sdk-lines.ts'

export function devCodeLines(tool: DevToolId, required: ReadonlySet<SignalId>, address: string): readonly CodeLine[] {
  switch (tool) {
    case 'sdk':
      return sdkLines(required, address)
    case 'soroban':
      return SOROBAN_LINES
    case 'api':
      return apiLines(required, address)
  }
}
