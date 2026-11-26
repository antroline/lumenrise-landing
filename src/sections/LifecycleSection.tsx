import { useState, type KeyboardEvent } from 'react'
import { Float } from '../components/Float.tsx'
import { ShieldIcon } from '../components/icons/ShieldIcon.tsx'
import { Scene } from '../components/Scene.tsx'
import { SectionHead } from '../components/SectionHead.tsx'
import { cssVars } from '../lib/css-vars.ts'

const stages = [
  {
    tab: 'Project', title: 'Give your project a home.', tone: 'cream',
    text: 'Put your product, team, roadmap, token distribution, and intended use of funds beside your launch terms. Give participants the context to understand what they are joining.',
  },
  {
    tab: 'Token', title: 'Set the supply. Keep your word.', tone: 'olive',
    text: 'Launch an ERC-20 token on Base or an issued asset on Stellar. On Stellar, a separate issuer is locked after issuance to prevent additional supply. Launch contracts enforce the token allocations and vesting schedule.',
  },
  {
    tab: 'Launch', title: 'Turn participation into momentum.', tone: 'lime',
    text: 'Raise funds and distribute tokens through a bonding curve. Open participation to everyone or design rules around the contributors you want to reach.',
  },
  {
    tab: 'Market', title: 'A launch is only the beginning.', tone: 'orange',
    text: 'At graduation, reserved tokens and a portion of the proceeds can fund a liquidity pool for continued trading. On Base, that market is Uniswap. On Stellar, the launch-to-market flow is designed around Soroswap.',
  },
] as const

function ProjectStage() {
  return (
    <>
      <div className="journey-paper-heading"><span className="journey-project-mark" aria-hidden="true"><ShieldIcon /></span><div><strong>Your project</strong><span>A clear picture before participation.</span></div></div>
      <div className="project-document">
        <div><span>Product & vision</span><p>What you’re building. Why it matters.</p></div>
        <div><span>Team & roadmap</span><p>The people and milestones behind it.</p></div>
        <div><span>Token distribution</span><p>Supply, allocations, and release terms.</p></div>
        <div><span>Use of funds</span><p>Where the capital will go.</p></div>
      </div>
      <p className="journey-paper-foot">Project information and launch terms, together.</p>
    </>
  )
}

function TokenStage() {
  return (
    <>
      <div className="journey-paper-heading"><span className="journey-project-mark" aria-hidden="true"><ShieldIcon /></span><div><strong>Supply with boundaries</strong><span>Enforced onchain.</span></div></div>
      <dl className="journey-terms">
        <div><dt>Base token</dt><dd>ERC-20</dd></div>
        <div><dt>Stellar token</dt><dd>Issued asset</dd></div>
        <div><dt>Stellar issuer</dt><dd>Permanently locked</dd></div>
        <div><dt>Team allocation</dt><dd>Released on schedule</dd></div>
      </dl>
      <p className="journey-paper-foot">Contracts hold and release tokens according to the launch terms.</p>
    </>
  )
}

function LaunchStage() {
  return (
    <>
      <div className="journey-paper-heading"><div><strong>One launch. Clear terms.</strong><span>From the first purchase to graduation.</span></div></div>
      <div className="journey-trading"><span>Buy tokens</span><span className="journey-curve-label">Bonding curve</span><span>Sell tokens</span></div>
      <dl className="journey-terms">
        <div><dt>Price</dt><dd>Adjusts with supply</dd></div>
        <div><dt>Participation</dt><dd>Open entry</dd></div>
        <div><dt>Next milestone</dt><dd>Graduation target</dd></div>
      </dl>
    </>
  )
}

function MarketStage() {
  return (
    <>
      <div className="journey-paper-heading"><div><strong>Beyond graduation</strong><span>From the bonding curve to a liquidity pool.</span></div></div>
      <div className="liquidity-sources"><span>Reserved tokens</span><span>Launch proceeds</span></div>
      <div className="liquidity-connector" aria-hidden="true" />
      <div className="liquidity-pool"><strong>Liquidity pool</strong><span>Uniswap on Base · Soroswap on Stellar</span></div>
    </>
  )
}

const panels = [ProjectStage, TokenStage, LaunchStage, MarketStage]

export function LifecycleSection() {
  const [{ active, leaving, hasSwitched }, setSelection] = useState({
    active: 0,
    leaving: null as number | null,
    hasSwitched: false,
  })

  function selectTab(next: number) {
    setSelection((current) => current.active === next ? current : {
      active: next,
      leaving: current.active,
      hasSwitched: true,
    })
  }

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    if (event.key === 'ArrowRight') next = (index + 1) % stages.length
    else if (event.key === 'ArrowLeft') next = (index + stages.length - 1) % stages.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = stages.length - 1
    else return
    event.preventDefault()
    selectTab(next)
    document.getElementById(`journey-tab-${next}`)?.focus()
  }

  return (
    <section id="lifecycle" className="section" aria-labelledby="lifecycle-title">
      <div className="container">
        <SectionHead id="lifecycle-title" title="From launch" follow="to liquidity."
          lede={['A token is the start. Bring the project, its distribution, and its next market into one connected launch experience.']} />
        <div className="journey-tabs" role="tablist" aria-label="The launch journey" style={cssVars({ '--journey-tab': active })}>
          {stages.map((item, index) => (
            <button key={item.tab} id={`journey-tab-${index}`} type="button" role="tab"
              aria-selected={active === index} aria-controls="journey-panel" tabIndex={active === index ? 0 : -1}
              onClick={() => selectTab(index)} onKeyDown={(event) => onTabKey(event, index)}>{item.tab}</button>
          ))}
        </div>
        <div id="journey-panel" className="journey-stack" role="tabpanel" aria-labelledby={`journey-tab-${active}`} tabIndex={0}>
          {(leaving === null ? [active] : [leaving, active]).map((index) => {
            const stage = stages[index]
            const Panel = panels[index]
            const outgoing = index === leaving

            return (
              <div key={index} className="journey-panel"
                data-motion={outgoing ? 'out' : hasSwitched ? 'in' : undefined}
                inert={outgoing} aria-hidden={outgoing || undefined}
                onAnimationEnd={(event) => {
                  if (!outgoing || event.target !== event.currentTarget) return
                  setSelection((current) => current.leaving === index ? { ...current, leaving: null } : current)
                }}>
                <div className="journey-copy">
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </div>
                <Scene tone={stage.tone} className="journey-scene">
                  <Float order={0} className="journey-paper"><Panel /></Float>
                </Scene>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
