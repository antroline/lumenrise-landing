import { LaunchFlow } from '../components/LaunchFlow.tsx';
import { Scene } from '../components/Scene.tsx';
import { SectionHead } from '../components/SectionHead.tsx';
import { MECHANISM_TONES } from '../data/mechanism-tones.ts';
import { MECHANISMS } from '../data/mechanisms.ts';

export function LaunchSection() {
  return (
    <section id="launch" className="section" aria-labelledby="launch-title">
      <div className="container">
        <SectionHead
          id="launch-title"
          eyebrow="Token Launches"
          title="Different launches."
          follow="Different strategies."
          lede={[
            'Every project has its own goals. Choose the launch mechanism that fits your token, community, and distribution strategy.',
          ]}
          cta={{
            label: 'Create a Launch',
            href: 'https://platform.lumenrise.app/create',
          }}
        />
        <div className="launch-methods">
          {MECHANISMS.map((mechanism) => (
            <article
              key={mechanism.id}
              id={`launch-${mechanism.id}`}
              className="launch-method"
              aria-labelledby={`launch-${mechanism.id}-title`}
            >
              <div className="launch-method-copy">
                <h3
                  id={`launch-${mechanism.id}-title`}
                  className="launch-method-title"
                >
                  {mechanism.label}
                </h3>
                <p className="launch-method-tagline">{mechanism.tagline}</p>
                <p className="launch-method-summary">{mechanism.summary}</p>
              </div>
              <Scene
                tone={MECHANISM_TONES[mechanism.id]}
                className="launch-scene"
              >
                <LaunchFlow mechanism={mechanism} />
                <p className="launch-example-note">
                  {mechanism.id === 'curve' ? 'Base bonding curve example' : `${mechanism.label} example on Stellar`}
                </p>
              </Scene>
            </article>
          ))}
        </div>
        <div className="pair-assets">
          <div>
            <h3>Price your launch in USDC.</h3>
            <p>Bonding curves on Base and Stellar use USDC as the trading pair. XLM and EURC are part of the Stellar expansion.</p>
          </div>
          <ul aria-label="Networks for USDC bonding curves">
            <li><strong>Base</strong><span>USDC</span></li>
            <li><strong>Stellar</strong><span>USDC</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
