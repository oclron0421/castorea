import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import SectionHeader from '../components/SectionHeader'
import StatsStrip from '../components/StatsStrip'
import { stats, values } from '../data/siteData'

const About = () => {
  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,130,0.35),transparent_55%)]" />
        <div className="shell relative flex flex-col gap-6">
          <p className="eyebrow text-accent">About Castorea</p>
          <h1 className="display-hero font-serif text-ink">
            Boutique interiors shaped by
            <span className="text-accent"> comfort and craft</span>
          </h1>
          <p className="body-lg text-muted max-w-2xl">
            Castorea is a home furnishing studio in Singapore focused on creating layered, functional spaces that
            feel deeply personal.
          </p>
          <Link to="/book" className="btn-primary">
            Book Consultation
          </Link>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Our story"
              title={
                <>
                  A studio built on
                  <span className="text-accent"> thoughtful living</span>
                </>
              }
              description="We believe a home should support your routines, celebrate your taste, and invite rest."
            />
            <p className="text-sm text-muted leading-relaxed">
              We work closely with homeowners to build a furnishing plan that feels intentional and elevated, without
              losing the ease of daily life. Each project blends practical layouts with a palette of textures and
              materials that age beautifully.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface p-7 shadow-soft">
            <p className="eyebrow text-accent">Studio focus</p>
            <div className="flex flex-col gap-4 mt-4">
              {[
                'Warm, neutral palettes with layered textures',
                'Custom carpentry and styling services',
                'Transparent timelines and sourcing updates',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-ink" />
                  <p className="text-sm text-muted leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsStrip items={stats} />

      <section className="section-pad bg-surface-alt">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Values"
            title={
              <>
                What guides our
                <span className="text-accent"> design decisions</span>
              </>
            }
            description="Every home reflects these pillars of our work."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-3">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-subtle bg-surface p-7 shadow-soft">
            <p className="eyebrow text-accent">Studio touch</p>
            <h2 className="text-2xl font-serif text-ink mt-4">A calm and layered home, made easy.</h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              We manage sourcing, logistics, and styling so you can focus on the final feeling of the space.
            </p>
          </div>
          <div className="rounded-3xl border border-subtle bg-surface-alt p-7 shadow-soft">
            <p className="eyebrow text-accent">Work with us</p>
            <p className="text-sm text-muted leading-relaxed">
              Ready to start? Share your goals and we will map out the project together.
            </p>
            <Link to="/book" className="btn-primary mt-6 inline-flex">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Meet the team"
        title={
          <>
            We are ready to
            <span className="text-accent"> design your next home</span>
          </>
        }
        description="Tell us about your space and we will craft the rest."
        primary={{ label: 'Book Consultation', to: '/book' }}
        secondary={{ label: 'View Portfolio', to: '/portfolio' }}
      />
    </>
  )
}

export default About
