import type { FeaturedLaunch, Social } from '../types/launch.ts'
import { shortAddress } from './short-address.ts'

const apiBase = (import.meta.env?.VITE_LUMENRISE_API_URL || 'https://api.lumenrise.app').replace(/\/+$/, '')
export const PROJECTS_URL = 'https://platform.lumenrise.app/projects?network=stellar-mainnet'
const USDC = 'CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75'

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid launch data')
  return value as Record<string, unknown>
}

function requiredText(value: unknown): string {
  if (typeof value !== 'string' || !value.trim()) throw new Error('Missing launch data')
  return value.trim()
}

function rawAmount(value: unknown): string {
  if (typeof value !== 'string' || !/^\d+$/.test(value)) throw new Error('Invalid token amount')
  return value
}

/** Keep raw contract amounts as integers until their display precision is chosen. */
export function compactLaunchAmount(raw: string, scale: number): string {
  const amount = BigInt(rawAmount(raw))
  if (!Number.isSafeInteger(scale) || scale < 0 || scale > 36) throw new Error('Invalid amount scale')
  const suffixes = ['', 'K', 'M', 'B', 'T']
  let divisor = 10n ** BigInt(scale)
  let index = 0
  let hundredths = (amount * 100n + divisor / 2n) / divisor
  while (hundredths >= 100_000n && index < suffixes.length - 1) {
    divisor *= 1000n
    index += 1
    hundredths = (amount * 100n + divisor / 2n) / divisor
  }
  if (amount > 0n && hundredths === 0n) return '<0.01'
  const fraction = (hundredths % 100n).toString().padStart(2, '0').replace(/0+$/, '')
  return `${hundredths / 100n}${fraction ? `.${fraction}` : ''}${suffixes[index]}`
}

function httpUrl(value: unknown): string | undefined {
  if (typeof value !== 'string' || !value.trim()) return undefined
  try {
    const url = new URL(value)
    return ['https:', 'http:'].includes(url.protocol) && !url.username && !url.password ? url.href : undefined
  } catch {
    return undefined
  }
}

function decodeLaunch(value: unknown): FeaturedLaunch | null {
  const item = record(value)
  if (item.network !== 'public') throw new Error('Unexpected launch network')
  // Projects without an indexed curve or a public detail route cannot fill a card yet.
  if (!item.bonding || !item.slug) return null
  const metadata = record(item.metadata)
  const bonding = record(item.bonding)
  const state = record(bonding.state)
  const curve = record(bonding.curve)
  const buckets = record(bonding.buckets)
  const statuses = { Open: 'live', Scheduled: 'upcoming', Graduated: 'graduated', Failed: 'failed' } as const
  const apiStatus = requiredText(bonding.status)
  if (!Object.hasOwn(statuses, apiStatus)) throw new Error('Unexpected launch status')
  if (typeof state.graduated !== 'boolean' || typeof bonding.stateStale !== 'boolean') throw new Error('Invalid launch state')
  const progressBps = bonding.progressBps
  if (typeof progressBps !== 'number' || !Number.isFinite(progressBps) || progressBps < 0) throw new Error('Invalid launch progress')
  const status = state.graduated ? 'graduated' : statuses[apiStatus as keyof typeof statuses]
  const filled = status === 'live' && (progressBps >= 10_000 || BigInt(rawAmount(state.sold)) >= BigInt(rawAmount(buckets.curve)))
  const labels = { live: 'Live', upcoming: 'Upcoming', graduated: 'Graduated', failed: 'Failed' }
  const pair = requiredText(item.pair)
  const currency = pair === USDC ? 'USDC' : shortAddress(pair)
  // Stellar quote assets use seven decimal places, independently of token supply.
  const reserve = compactLaunchAmount(rawAmount(state.quoteReserve), 7)
  const target = compactLaunchAmount(rawAmount(curve.graduationTarget), 7)
  const socials: Social[] = []
  if (httpUrl(metadata.website)) socials.push('globe')
  if (httpUrl(metadata.xAccount)) socials.push('x')
  if (httpUrl(metadata.github)) socials.push('github')
  const description = typeof metadata.description === 'string'
    ? metadata.description.replace(/\\r\\n|\\n|\\r/g, ' ').replace(/\s+/g, ' ').trim()
    : ''
  return {
    id: requiredText(item.contractId),
    href: `https://platform.lumenrise.app/projects/${encodeURIComponent(requiredText(item.slug))}?network=stellar-mainnet`,
    name: requiredText(metadata.name),
    symbol: requiredText(metadata.symbol),
    description,
    logo: httpUrl(metadata.logo),
    owner: requiredText(item.owner),
    socials,
    status,
    statusLabel: bonding.stateStale ? 'Updating' : filled ? 'Filled' : labels[status],
    metric: [`${reserve} ${currency}`, bonding.stateStale ? 'Last indexed reserve' : 'Curve reserve'],
    detail: [`${target} ${currency}`, 'Graduation target'],
    progress: bonding.stateStale || status === 'upcoming' || status === 'failed' ? undefined : Math.min(progressBps / 10_000, 1),
  }
}

export function decodeFeaturedLaunches(value: unknown): FeaturedLaunch[] {
  const envelope = record(value)
  if (envelope.status !== 'success') throw new Error('Launch request failed')
  const result = record(envelope.result)
  if (!Array.isArray(result.launches)) throw new Error('Invalid launch list')
  const launches = result.launches.map(decodeLaunch).filter((launch) => launch !== null)
  return [...new Map(launches.map((launch) => [launch.id, launch])).values()].slice(0, 3)
}

export async function fetchFeaturedLaunches(signal: AbortSignal): Promise<FeaturedLaunch[]> {
  const base = apiBase.endsWith('/v1') ? apiBase : `${apiBase}/v1`
  const query = new URLSearchParams({ network: 'public', page: '1', limit: '3', sort: 'newest', direction: 'desc' })
  const response = await fetch(`${base}/launches?${query}`, {
    signal: AbortSignal.any([signal, AbortSignal.timeout(12_000)]),
    credentials: 'omit',
  })
  if (!response.ok) throw new Error(`Launch request failed (${response.status})`)
  return decodeFeaturedLaunches(await response.json())
}
