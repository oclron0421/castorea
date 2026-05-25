import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import ProjectGrid from '../components/ProjectGrid'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/siteData'

const Portfolio = () => {
  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,180,140,0.35),transparent_55%)]" />
        <div className="shell relative flex flex-col gap-6">
          <p className="eyebrow text-accent">Portfolio</p>
          <h1 className="display-hero font-serif text-ink">
            Projects crafted with
            <span className="text-accent"> care and quiet luxury</span>
          </h1>
          <p className="body-lg text-muted max-w-2xl">
            Each project is designed around daily rituals, natural light, and the textures that make a home feel calm.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Living', 'Dining', 'Bedroom', 'Kitchen', 'Study'].map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Project gallery"
            title={
              <>
                Explore the
                <span className="text-accent"> Castorea collection</span>
              </>
            }
            description="Replace the placeholders with your project photos to complete the gallery."
          />
          <ProjectGrid items={projects} />
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-6 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="rounded-3xl border border-subtle bg-surface p-7 shadow-soft">
            <p className="eyebrow text-accent">Design notes</p>
            <h2 className="text-2xl font-serif text-ink mt-4">
              We design for daily flow, not just the final photo.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              Our process balances comfort, craftsmanship, and easy maintenance. The result is a home that feels
              effortless, warm, and timeless.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-alt p-7 shadow-soft">
            <p className="text-sm text-muted leading-relaxed">
              Want to see a room that matches your style? Share references and we will curate a moodboard to guide
              the full furnishing plan.
            </p>
            <Link to="/book" className="btn-primary mt-6 inline-flex">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Next steps"
        title={
          <>
            Ready to style your
            <span className="text-accent"> own space?</span>
          </>
        }
        description="Start with a consultation and we will take it from there."
        primary={{ label: 'Book Consultation', to: '/book' }}
        secondary={{ label: 'View Services', to: '/services' }}
      />
    </>
  )
}

export default Portfolio
