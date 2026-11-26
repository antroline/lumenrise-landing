import { CliPreview } from '../components/CliPreview.tsx'
import { Scene } from '../components/Scene.tsx'
import { SectionHead } from '../components/SectionHead.tsx'
import { Studio } from '../components/Studio.tsx'
import { TextCta } from '../components/TextCta.tsx'
import { WorkflowPath } from '../components/WorkflowPath.tsx'

export function WorkflowSection() {
  return (
    <section id="workflow" className="section" aria-labelledby="workflow-title">
      <div className="container">
        <SectionHead
          id="workflow-title"
          eyebrow="Built for Every Workflow"
          title="Your launch."
          follow="Your workflow."
          lede={[
            'Set up your launch in the visual interface or work from the terminal with the same launch terms and participation rules.',
          ]}
        />
        <div className="paths">
          <WorkflowPath
            title="Launch with Interface"
            tagline="Everything you need, in one place."
            text="Configure your token, choose a launch mechanism, set parameters, and manage your launch through a streamlined web interface."
            cta={<TextCta label="Open Interface" href="https://platform.lumenrise.app/create" />}
          >
            <Scene tone="sun" className="path-scene">
              <Studio />
            </Scene>
          </WorkflowPath>
          <WorkflowPath
            title="Launch with CLI"
            tagline="From terminal to launch."
            text="A command-line workflow for creating launches, checking progress, and participating through authorized transactions. Built for developers and AI agents."
          >
            <Scene tone="olive" className="path-scene path-scene-cli">
              <CliPreview />
            </Scene>
          </WorkflowPath>
        </div>
      </div>
    </section>
  )
}
