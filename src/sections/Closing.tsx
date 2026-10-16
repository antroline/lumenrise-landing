import { CtaNotice } from '../components/CtaNotice.tsx'
import { ShieldIcon } from '../components/icons/ShieldIcon.tsx'
import { PrimaryCta } from '../components/PrimaryCta.tsx'
import { ProjectMark } from '../components/ProjectMark.tsx'
import { Scene } from '../components/Scene.tsx'
import { TextCta } from '../components/TextCta.tsx'

export function Closing() {
  return (
    <section className="container closing" aria-labelledby="closing-title">
      <Scene tone="sun" className="cta-scene">
        <CtaNotice
          order={1}
          place="tl"
          mark={<ProjectMark symbol="QSR" size={36} />}
          title="Quasar graduated"
          sub="Bonding curve · 0.0412 XLM"
          pill="Graduated"
        />
        <CtaNotice
          order={2}
          place="br"
          mark={<ProjectMark symbol="MRDN" size={36} />}
          title="Meridian presale closed"
          sub="1.2M XLM raised"
          pill="Closed"
        />
        <CtaNotice
          order={3}
          place="tr"
          mark={
            <span className="notice-icon">
              <ShieldIcon />
            </span>
          }
          title="Wallet G2VT…T72H"
          sub="Eligible · 5 of 5 signals"
          pill="Tier 5"
        />
        <div className="cta-copy">
          <h2 id="closing-title" className="cta-title text-balance">
            Build what comes next.
          </h2>
          <p className="cta-lede">
            From token launches to reputation-powered applications, LumenRise brings the infrastructure together.
          </p>
          <div className="cta-actions">
            <PrimaryCta label="Create a Launch" />
            <TextCta label="Explore Developer Resources" href="https://platform.lumenrise.app/developers" />
          </div>
        </div>
      </Scene>
    </section>
  )
}
