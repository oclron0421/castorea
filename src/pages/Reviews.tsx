import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import ReviewGrid from '../components/ReviewGrid'
import SectionHeader from '../components/SectionHeader'
import StatsStrip from '../components/StatsStrip'
import { reviews, stats } from '../data/siteData'

const Reviews = () => {
  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,130,0.3),transparent_55%)]" />
        <div className="shell relative flex flex-col gap-6">
          <p className="eyebrow text-accent">Reviews</p>
          <h1 className="display-hero font-serif text-ink">
            Real words from
            <span className="text-accent"> real homes</span>
          </h1>
          <p className="body-lg text-muted max-w-2xl">
            We are grateful for the trust our clients place in us. Here are a few stories from their projects.
          </p>
          <Link to="/book" className="btn-primary">
            Book Consultation
          </Link>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Client stories"
            title={
              <>
                Homes styled with
                <span className="text-accent"> intention</span>
              </>
            }
            description="Client notes on comfort, clarity, and the small decisions that make a home feel finished."
          />
          <ReviewGrid items={reviews} />
        </div>
      </section>

      <StatsStrip items={stats} />

      <CtaSection
        eyebrow="Work with us"
        title={
          <>
            Ready to create your
            <span className="text-accent"> dream space?</span>
          </>
        }
        description="We respond to all inquiries within 2 business days."
        primary={{ label: 'Book Consultation', to: '/book' }}
        secondary={{ label: 'View Portfolio', to: '/portfolio' }}
      />
    </>
  )
}

export default Reviews
