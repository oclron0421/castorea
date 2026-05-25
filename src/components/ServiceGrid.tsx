import type { Service } from '../data/siteData'

type ServiceGridProps = {
  items: Service[]
  columns?: 2 | 3
}

const ServiceGrid = ({ items, columns = 3 }: ServiceGridProps) => {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 xl:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
      {items.map((service) => (
        <article
          key={service.title}
          className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-3 w-12 rounded-full"
              style={{ backgroundColor: service.accent }}
            />
            <p className="text-xs uppercase tracking-[0.32em] text-muted">Signature</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{service.summary}</p>
          </div>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            {service.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

export default ServiceGrid
