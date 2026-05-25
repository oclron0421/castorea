import type { Review } from '../data/siteData'

type ReviewGridProps = {
  items: Review[]
}

const ReviewGrid = ({ items }: ReviewGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((review) => (
        <article
          key={`${review.name}-${review.project}`}
          className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft flex flex-col gap-6"
        >
          <div className="flex gap-1 text-sm">
            {Array.from({ length: review.stars }).map((_, index) => (
              <span key={index} className="text-accent">*</span>
            ))}
          </div>
          <p className="text-sm sm:text-base text-ink leading-relaxed">"{review.quote}"</p>
          <div className="border-t border-subtle pt-4">
            <p className="text-sm font-semibold text-ink">{review.name}</p>
            <p className="text-xs uppercase tracking-[0.3em] text-muted mt-2">{review.project}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ReviewGrid
