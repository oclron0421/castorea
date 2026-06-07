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
            <span className="text-accent"> dedication to quality and customer satisfaction</span>
          </h1>
          
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
            description="A curated look at room concepts, material palettes, and furnishing directions for calm Singapore homes."
          />
          <ProjectGrid items={projects} />
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
