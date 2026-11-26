export function FeesSection() {
  return (
    <section id="fees" className="section fees-section" aria-labelledby="fees-title">
      <div className="container">
        <div className="fees-layout">
          <div><h2 id="fees-title" className="section-title">Start free.<br /><span className="text-muted-foreground">Grow together.</span></h2><p className="fees-intro">For founders, established projects, and communities bringing their tokens to market.</p></div>
          <dl className="fee-terms">
            <div><dt>Create a launch</dt><dd><span className="fee-figure">Free</span><p>No platform charge to get started.</p></dd></div>
            <div><dt>At graduation</dt><dd><span className="fee-figure">1<span>%</span></span><p>Of the funds raised, collected only when the launch graduates.</p></dd></div>
          </dl>
        </div>
        <div className="open-source-note"><p>Open source. Built for a connected ecosystem.</p><a href="https://docs.lumenrise.app">Read the documentation</a></div>
      </div>
    </section>
  )
}
