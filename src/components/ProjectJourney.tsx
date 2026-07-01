import type { ProjectJourneyStage } from '../data/siteData'

type ProjectJourneyProps = {
  items: ProjectJourneyStage[]
}

const getMediaGridClass = (count: number) => {
  if (count === 1) {
    return 'grid-cols-1'
  }

  if (count === 2) {
    return 'sm:grid-cols-2'
  }

  return 'sm:grid-cols-3'
}

const ProjectJourney = ({ items }: ProjectJourneyProps) => {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-3xl border border-subtle bg-bg p-5 shadow-soft sm:p-7"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-semibold text-bg">
                  0{index + 1}
                </span>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">{item.stage}</p>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>

              {item.note && (
                <p className="rounded-2xl border border-accent bg-surface px-4 py-3 text-sm leading-relaxed text-accent">
                  {item.note}
                </p>
              )}

              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`grid gap-3 ${getMediaGridClass(item.media.length)}`}
            >
              {item.media.map((media) => (
                <div
                  key={media.label}
                  className="relative flex min-h-56 overflow-hidden rounded-3xl border border-dashed border-accent bg-surface"
                >
                  {media.image ? (
                    <img
                      src={media.image}
                      alt={media.label}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : null}

                  <div className="relative mt-auto w-full bg-bg/85 p-5 ">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-muted">
                    </p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ProjectJourney