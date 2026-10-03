import type { CodeLine } from '../types/code.ts'

/** A Soroban contract gating a claim on the verifier. */
export const SOROBAN_LINES: readonly CodeLine[] = [
  [{ kind: 'k', text: 'use' }, { text: ' lumenrise_verifier::Client;' }],
  [],
  [{ kind: 'k', text: 'pub fn' }, { text: ' claim(env: Env, wallet: Address) {' }],
  [{ text: '  ' }, { kind: 'k', text: 'let' }, { text: ' verifier = Client::new(&env, &VERIFIER);' }],
  [{ text: '  ' }, { kind: 'k', text: 'if' }, { text: ' !verifier.is_eligible(&wallet, &POLICY) {' }],
  [{ text: '    panic_with_error!(&env, Error::NotEligible);' }],
  [{ text: '  }' }],
  [{ text: '  ' }, { kind: 'p', text: '// release the allocation' }],
  [{ text: '}' }],
]
