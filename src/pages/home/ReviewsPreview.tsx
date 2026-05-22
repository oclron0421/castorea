import { Link } from 'react-router-dom'

// ── REPLACE WITH YOUR REAL CLIENT REVIEWS ──────────────────────────
const reviews = [
  {
    name: 'Sarah T.',
    type: 'HDB 4-Room · Bishan',
    review:
      'Castorea completely transformed our living room. The team was patient, professional, and truly understood our vision. Every detail was considered.',
    stars: 5,
  },
  {
    name: 'Marcus L.',
    type: 'Condominium · Clementi',
    review:
      'From the first consultation to the final handover, the experience was seamless. Our home feels warm and intentional — exactly what we wanted.',
    stars: 5,
  },
  {
    name: 'Priya R.',
    type: 'Landed Property · Bukit Timah',
    review:
      'The furniture selection was impeccable. They sourced pieces that were beautiful and functional. Would recommend Castorea to anyone.',
    stars: 5,
  },
]
// ───────────────────────────────────────────────────────────────────

const ReviewsPreview = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5 sm:gap-6">
          <div>
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[#7A8C6E] mb-3 sm:mb-4">
              Client Stories
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#2C2825] leading-[1.02] max-w-[12ch]">
              What Our{' '}
              <em className="text-[#A0784A] not-italic">Clients Say</em>
            </h2>
          </div>
          <Link
            to="/reviews"
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#8B6F52] hover:text-[#A0784A] transition-colors duration-300 flex items-center gap-3 group whitespace-nowrap"
          >
            Read All Reviews
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#F2EDE6] p-6 sm:p-8 md:p-10 border border-[#D9CFC4] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between gap-6 sm:gap-8"
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-5 sm:mb-6">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-[#A0784A] text-sm sm:text-base">★</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base font-light leading-relaxed text-[#2C2825] italic">
                  "{r.review}"
                </p>
              </div>

              {/* Client */}
              <div className="border-t border-[#D9CFC4] pt-5 sm:pt-6">
                <p className="text-sm font-medium text-[#2C2825]">{r.name}</p>
                <p className="text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.15em] uppercase text-[#8B6F52] mt-1">
                  {r.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsPreview