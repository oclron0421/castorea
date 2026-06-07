import { Link } from 'react-router-dom'
import bcaLogo from '../assets/BCA.png'
import bizsafeLogo from '../assets/bizsafe.png'
import hdbLogo from '../assets/HDB-LICENSED-RENOVATION-CONTRACTOR-LOGO.png'
import CtaSection from '../components/CtaSection'
import ProjectJourney from '../components/ProjectJourney'
import ProjectGrid from '../components/ProjectGrid'
import ReviewGrid from '../components/ReviewGrid'
import SectionHeader from '../components/SectionHeader'
import ServiceGrid from '../components/ServiceGrid'
import StatsStrip from '../components/StatsStrip'
import {
  projectJourneyStages,
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
        <div className="shell relative flex flex-col gap-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div className="flex flex-col gap-6">
              <p className="eyebrow text-base text-accent">Singapore home furnishing and interior design studio</p>
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
        </div>
      </section>

      <StatsStrip items={stats} />

      <section className="section-pad-sm bg-surface-alt">
        <div className="shell flex justify-center">
          <div className="flex flex-wrap items-center gap-8 sm:gap-10 lg:gap-12">
            <img src={bizsafeLogo} alt="BizSAFE logo" className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28" />
            <img src={bcaLogo} alt="BCA logo" className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28" />
            <img src={hdbLogo} alt="HDB licensed renovation contractor logo" className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28" />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow=""
            title="Signature services"
            description="Refined Living, Beautifully Designed."
          >
            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </SectionHeader>
          <ServiceGrid items={services.slice(0, 3)} />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Our project journey"
            title={
              <>
                A thoughtful path from
                <span className="text-accent"> brief to handover</span>
              </>
            }
            description="A clear three-stage process keeps your design vision, visuals, and final execution moving with care."
          />
          <ProjectJourney items={projectJourneyStages} />
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
