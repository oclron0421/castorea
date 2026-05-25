import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import ProcessSteps from '../components/ProcessSteps'
import ProjectGrid from '../components/ProjectGrid'
import ReviewGrid from '../components/ReviewGrid'
import SectionHeader from '../components/SectionHeader'
import ServiceGrid from '../components/ServiceGrid'
import StatsStrip from '../components/StatsStrip'
import {
  processSteps,
  projects,
  reviews,
  services,
  stats,
} from '../data/siteData'

const Home = () => {
  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,130,0.3),transparent_55%)]" />
        <div
          className="absolute -top-24 right-10 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(197, 154, 106, 0.3)' }}
        />
        <div className="shell relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="flex flex-col gap-6">
            <p className="eyebrow text-accent">Singapore home furnishing studio</p>
            <h1 className="display-hero font-serif text-ink">
              Furnishing homes,
              <span className="text-accent"> designing living.</span>
            </h1>
            <p className="body-lg text-muted max-w-xl">
              Castorea creates warm, layered interiors with a boutique, high touch approach.
              From full home furnishing to a single room refresh, we style spaces that feel
              effortless and lived in.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/book" className="btn-primary">
                Book Consultation
              </Link>
              <Link to="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.3em] text-muted">
              <span className="pill">Instagram</span>
              <span className="pill">TikTok</span>
              <span className="pill">Carousell</span>
            </div>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Living Room', accent: '#E5D2BC', height: 'aspect-[4/5]' },
              { label: 'Dining', accent: '#D8BFA2', height: 'aspect-[3/4]' },
              { label: 'Bedroom', accent: '#D1B495', height: 'aspect-[3/4]' },
              { label: 'Kitchen', accent: '#E8D7C4', height: 'aspect-[4/5]' },
            ].map((card) => (
              <div
                key={card.label}
                className={`relative rounded-3xl overflow-hidden shadow-soft ${card.height} float-slow`}
                style={{ backgroundColor: card.accent }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/30" />
                <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white/80">
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip items={stats} />

      <section className="section-pad">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Signature services"
            title={
              <>
                The furnishings your
                <span className="text-accent"> home deserves</span>
              </>
            }
            description="Curated pieces, custom layouts, and full-service styling tailored to your lifestyle."
          >
            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </SectionHeader>
          <ServiceGrid items={services.slice(0, 3)} />
        </div>
      </section>

      <section className="section-pad bg-surface-alt">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Selected projects"
            title={
              <>
                A glimpse of our
                <span className="text-accent"> recent work</span>
              </>
            }
            description="A warm, layered approach to every room we touch."
          >
            <Link to="/portfolio" className="btn-outline">
              View All Work
            </Link>
          </SectionHeader>
          <ProjectGrid items={projects.slice(0, 6)} linkTo="/portfolio" />
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Our process"
            title={
              <>
                From first call to
                <span className="text-accent"> final reveal</span>
              </>
            }
            description="A clear, guided experience that keeps your project on track."
          />
          <ProcessSteps items={processSteps} />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Client stories"
            title={
              <>
                Homes designed with
                <span className="text-accent"> heart</span>
              </>
            }
            description="Words from homeowners who trusted us with their spaces."
          >
            <Link to="/reviews" className="btn-outline">
              Read All Reviews
            </Link>
          </SectionHeader>
          <ReviewGrid items={reviews.slice(0, 3)} />
        </div>
      </section>

      <CtaSection
        eyebrow="Start your project"
        title={
          <>
            Ready to style a
            <span className="text-accent"> home you love?</span>
          </>
        }
        description="Share your vision and we will guide the next steps."
        primary={{ label: 'Book Consultation', to: '/book' }}
        secondary={{ label: 'View Portfolio', to: '/portfolio' }}
      />
    </>
  )
}

export default Home
