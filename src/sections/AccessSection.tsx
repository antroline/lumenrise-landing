import { Float } from '../components/Float.tsx'
import { BaseLogo } from '../components/icons/BaseLogo.tsx'
import { StellarLogo } from '../components/icons/StellarLogo.tsx'
import { Scene } from '../components/Scene.tsx'
import { SectionHead } from '../components/SectionHead.tsx'

const routes = [
  { name: 'Email & social login', provider: 'Privy', text: 'Sign in to Base with your email or a social account.' },
  { name: 'Your Stellar wallet', provider: 'Stellar Wallets Kit', text: 'Connect an external wallet and authorize participation from your own account.' },
  { name: 'Cross-chain funding', provider: 'NEAR Intents', text: 'Move supported assets into your Stellar account before authorizing a launch purchase.' },
  { name: 'Cash deposits & withdrawals', provider: 'MoneyGram', text: 'Access its on/off-ramp service through supported locations.' },
]

export function AccessSection() {
  return (
    <section id="access" className="section" aria-labelledby="access-title">
      <div className="container">
        <SectionHead id="access-title" title="Join from" follow="where you are."
          lede={['Explore launches across Base and Stellar, with different ways to connect an account and fund participation.']} />
        <div className="access-layout">
          <Scene tone="olive" className="access-scene">
            <Float order={0} className="access-account">
              <div className="access-network"><BaseLogo /><StellarLogo /><span>Base &amp; Stellar</span></div>
              <p>More ways in.<br /><span>One place to participate.</span></p>
              <ul className="account-routes">
                <li><span>Base sign-in</span><strong>Privy</strong></li>
                <li><span>Stellar wallet</span><strong>Wallets Kit</strong></li>
                <li><span>Cross-chain assets</span><strong>NEAR Intents</strong></li>
                <li><span>Cash in / out</span><strong>MoneyGram</strong></li>
              </ul>
              <div className="access-authorization">You authorize every launch purchase.</div>
            </Float>
          </Scene>
          <div className="access-route-list">
            {routes.map((route) => <article key={route.provider}><span className="access-provider">{route.provider}</span><h3>{route.name}</h3><p>{route.text}</p></article>)}
          </div>
        </div>
        <div className="community-bridge">
          <div className="bridge-networks" aria-label="Base and Stellar"><BaseLogo /><span aria-hidden="true" /><StellarLogo /></div>
          <div><h3>A community that reaches further.</h3><p>LumenRise will feature Stellar launches through its social channels, helping teams reach its existing Base community.</p></div>
          <a className="bridge-link" href="https://x.com/lumenRiseApp">Follow LumenRise</a>
        </div>
      </div>
    </section>
  )
}
