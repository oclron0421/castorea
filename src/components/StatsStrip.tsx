import type { Stat } from '../data/siteData'

type StatsStripProps = {
  items: Stat[]
}

const StatsStrip = ({ items }: StatsStripProps) => {
  return (
    <section className="section-pad-sm bg-surface-alt">
      <div className="shell grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
        {items.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-subtle bg-surface px-5 py-6 text-center shadow-soft"
          >
            <p className="text-2xl md:text-3xl font-semibold text-ink">{stat.value}</p>
            <p className="mt-2 min-h-10 text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-muted text-center flex items-center justify-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
