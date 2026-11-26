import assert from 'node:assert/strict'
import { test } from 'node:test'
import { compactLaunchAmount, decodeFeaturedLaunches, fetchFeaturedLaunches } from '../src/lib/featured-launches.ts'

const USDC = 'CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75'
const launch = (overrides = {}) => ({
  network: 'public', contractId: 'contract-1', slug: 'evo-genesis', owner: 'GCREATOR', pair: USDC,
  metadata: { name: 'Evo Genesis', symbol: 'EVO', description: 'First paragraph.\\r\\nSecond paragraph.', logo: 'https://cdn.lumenrise.app/evo.png', website: 'https://example.com', xAccount: 'https://x.com/evo' },
  bonding: {
    status: 'Open', stateStale: false, progressBps: 68,
    state: { quoteReserve: '688407160', graduated: false, sold: '100' },
    curve: { graduationTarget: '100000000000' }, buckets: { curve: '1000' },
  },
  ...overrides,
})
const envelope = (launches) => ({ status: 'success', result: { launches } })

test('maps mainnet metadata, precise quote amounts, progress and the project route', () => {
  const [card] = decodeFeaturedLaunches(envelope([launch()]))
  assert.equal(card.name, 'Evo Genesis')
  assert.equal(card.href, 'https://platform.lumenrise.app/projects/evo-genesis?network=stellar-mainnet')
  assert.deepEqual(card.metric, ['68.84 USDC', 'Curve reserve'])
  assert.deepEqual(card.detail, ['10K USDC', 'Graduation target'])
  assert.equal(card.progress, 0.0068)
  assert.equal(card.statusLabel, 'Live')
  assert.equal(card.description, 'First paragraph. Second paragraph.')
  assert.deepEqual(card.socials, ['globe', 'x'])
  assert.equal(card.logo, 'https://cdn.lumenrise.app/evo.png')
})

test('shows scheduled, filled, graduated, failed and stale states truthfully', () => {
  for (const [change, label, progress] of [
    [{ status: 'Scheduled' }, 'Upcoming', undefined],
    [{ progressBps: 10000 }, 'Filled', 1],
    [{ state: { ...launch().bonding.state, sold: '1000' } }, 'Filled', 0.0068],
    [{ status: 'Graduated' }, 'Graduated', 0.0068],
    [{ state: { ...launch().bonding.state, graduated: true } }, 'Graduated', 0.0068],
    [{ status: 'Failed' }, 'Failed', undefined],
    [{ stateStale: true }, 'Updating', undefined],
  ]) {
    const [card] = decodeFeaturedLaunches(envelope([launch({ bonding: { ...launch().bonding, ...change } })]))
    assert.equal(card.statusLabel, label)
    assert.equal(card.progress, progress)
    if (change.stateStale) assert.equal(card.metric[1], 'Last indexed reserve')
  }
})

test('caps at three distinct indexed projects and supports an empty result', () => {
  const projects = Array.from({ length: 5 }, (_, i) => launch({ contractId: `contract-${i}` }))
  const cards = decodeFeaturedLaunches(envelope([projects[0], projects[0], ...projects]))
  assert.equal(cards.length, 3)
  assert.equal(new Set(cards.map((card) => card.id)).size, 3)
  assert.deepEqual(decodeFeaturedLaunches(envelope([])), [])
  assert.deepEqual(decodeFeaturedLaunches(envelope([launch({ bonding: null }), launch({ slug: null })])), [])
})

test('rejects malformed responses, incorrect networks and unknown states', () => {
  for (const value of [null, {}, { status: 'error' }, envelope({}), envelope([launch({ network: 'testnet' })]), envelope([launch({ bonding: { ...launch().bonding, status: 'toString' } })]), envelope([launch({ bonding: { ...launch().bonding, progressBps: '68' } })]), envelope([launch({ bonding: { ...launch().bonding, state: { ...launch().bonding.state, quoteReserve: '-1' } } })])]) {
    assert.throws(() => decodeFeaturedLaunches(value))
  }
})

test('drops unsafe media and social URLs; encodes project slugs', () => {
  const [card] = decodeFeaturedLaunches(envelope([launch({ slug: 'a/b?network=testnet', metadata: { name: 'Safe', symbol: 'SAFE', logo: 'javascript:alert(1)', website: 'https://user:password@example.com', xAccount: 'data:text/plain,x' } })]))
  assert.equal(card.logo, undefined)
  assert.deepEqual(card.socials, [])
  assert.equal(card.href, 'https://platform.lumenrise.app/projects/a%2Fb%3Fnetwork%3Dtestnet?network=stellar-mainnet')
})

test('formats large integer amounts without loss, rounds suffix boundaries and preserves tiny amounts', () => {
  assert.equal(compactLaunchAmount('0', 7), '0')
  assert.equal(compactLaunchAmount('1', 7), '<0.01')
  assert.equal(compactLaunchAmount('9999999999', 7), '1K')
  assert.equal(compactLaunchAmount('123456789012345678901', 7), '12.35T')
  assert.throws(() => compactLaunchAmount('NaN', 7))
  assert.throws(() => compactLaunchAmount('100', -1))
})

test('requests three latest mainnet projects without credentials and propagates HTTP errors and cancellation', async (t) => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    const request = new URL(url)
    assert.equal(request.origin, 'https://api.lumenrise.app')
    assert.equal(request.pathname, '/v1/launches')
    assert.equal(request.searchParams.get('network'), 'public')
    assert.equal(request.searchParams.get('limit'), '3')
    assert.equal(request.searchParams.get('sort'), 'newest')
    assert.equal(request.searchParams.get('direction'), 'desc')
    assert.equal(options.credentials, 'omit')
    return new Response(JSON.stringify(envelope([launch()])), { status: 200 })
  })
  assert.equal((await fetchFeaturedLaunches(new AbortController().signal)).length, 1)
  globalThis.fetch.mock.mockImplementation(async () => new Response('', { status: 503 }))
  await assert.rejects(fetchFeaturedLaunches(new AbortController().signal), /503/)
  globalThis.fetch.mock.mockImplementation(async (_url, options) => {
    options.signal.throwIfAborted()
  })
  const controller = new AbortController()
  controller.abort()
  await assert.rejects(fetchFeaturedLaunches(controller.signal), { name: 'AbortError' })
})
