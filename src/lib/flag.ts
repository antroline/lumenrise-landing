/** A boolean data attribute: present and empty when on, absent when off. */
export function flag(on: boolean): '' | undefined {
  return on ? '' : undefined
}
