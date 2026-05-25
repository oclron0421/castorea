import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import ProcessSteps from '../components/ProcessSteps'
import SectionHeader from '../components/SectionHeader'
import ServiceGrid from '../components/ServiceGrid'
import { packages, processSteps, services } from '../data/siteData'

const Services = () => {
  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,170,130,0.3),transparent_55%)]" />
        <div className="shell relative flex flex-col gap-6">
          <p className="eyebrow text-accent">Services</p>
          <h1 className="display-hero font-serif text-ink">
            Full service furnishing with
            <span className="text-accent"> boutique care</span>
          </h1>
          <p className="body-lg text-muted max-w-2xl">
            From space planning to the final styling pass, we handle the details so you can enjoy the result.
          </p>
          <Link to="/book" className="btn-primary">
            Book Consultation
          </Link>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="What we do"
            title={
              <>
                Services tailored to
                <span className="text-accent"> your home</span>
              </>
            }
            description="Choose full furnishing, a single room refresh, or staging support for a listing."
          />
          <ServiceGrid items={services} columns={2} />
        </div>
      </section>

      <section className="section-pad">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="Packages"
            title={
              <>
                Start with a
                <span className="text-accent"> signature package</span>
              </>
            }
            description="Select a package, then customize the finish level and scope."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-3xl border border-subtle bg-surface p-6 sm:p-7 shadow-soft flex flex-col gap-4"
              >
                <h3 className="text-xl font-semibold text-ink">{pkg.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{pkg.description}</p>
                <p className="text-sm font-semibold text-accent">{pkg.priceNote}</p>
                <ul className="flex flex-col gap-2 text-sm text-muted">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ink" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-alt">
        <div className="shell flex flex-col gap-10">
          <SectionHeader
            eyebrow="How it works"
            title={
              <>
                A guided, transparent
                <span className="text-accent"> design process</span>
              </>
            }
            description="We keep timelines and sourcing clear at each step."
          />
          <ProcessSteps items={processSteps} />
        </div>
      </section>

      <CtaSection
        eyebrow="Start planning"
        title={
          <>
            Let us plan the
            <span className="text-accent"> perfect home edit</span>
          </>
        }
        description="Share your space and goals, then we take care of the rest."
        primary={{ label: 'Book Consultation', to: '/book' }}
        secondary={{ label: 'View Portfolio', to: '/portfolio' }}
      />
    </>
  )
}

export default Services
