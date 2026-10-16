export function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}
