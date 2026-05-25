import type { ProcessStep } from '../data/siteData'

type ProcessStepsProps = {
  items: ProcessStep[]
}

const ProcessSteps = ({ items }: ProcessStepsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((step, index) => (
        <div
          key={step.title}
          className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 rounded-full bg-ink text-bg text-xs font-semibold flex items-center justify-center">
              0{index + 1}
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Step</p>
          </div>
          <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
          <p className="text-sm text-muted leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProcessSteps
