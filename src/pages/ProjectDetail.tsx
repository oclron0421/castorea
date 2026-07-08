import { Link, useParams } from 'react-router-dom'
import CtaSection from '../components/CtaSection'
import { projects } from '../data/siteData'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="section-pad-lg">
        <div className="shell flex flex-col items-center gap-6 text-center">
          <p className="eyebrow text-accent">Project not found</p>
          <h1 className="display-hero font-serif text-ink">We could not find that project.</h1>
          <p className="body-lg max-w-xl text-muted">
            Return to the portfolio to explore the current Castorea collection.
          </p>
          <Link to="/portfolio" className="btn-primary">
            View Portfolio
          </Link>
        </div>
      </section>
    )
  }

  const selectedPhoto = project.photos[0]

  return (
    <>
      <section className="section-pad-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,180,140,0.35),transparent_55%)]" />
        <div className="shell relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="flex flex-col gap-5">
            <Link to="/portfolio" className="link-muted text-sm">
              Back to Portfolio
            </Link>
            <p className="eyebrow text-accent">{project.category}</p>
            <h1 className="display-hero font-serif text-ink">{project.title}</h1>
            <p className="body-lg max-w-2xl text-muted">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              <span className="pill">{project.location}</span>
              <span className="pill">{project.style}</span>
              <span className="pill">Completed {project.year}</span>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-subtle shadow-soft">
            {selectedPhoto.image ? (
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.label}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{ backgroundColor: selectedPhoto.accent ?? project.accent }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell flex flex-col gap-10">
          <aside className="rounded-3xl border border-subtle bg-bg p-6 shadow-soft sm:p-7">
            <p className="eyebrow text-accent">Project scope</p>
            <ul className="mt-5 flex flex-wrap gap-3 text-sm leading-relaxed text-muted">
              {project.scope.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-full bg-surface px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-accent">Photo gallery</p>
              <h2 className="display font-serif text-ink">Completed project photos</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.photos.map((photo, index) => (
                <figure
                  key={photo.label}
                  className="group overflow-hidden rounded-3xl bg-bg shadow-soft"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.label}
                        loading={index > 2 ? 'lazy' : undefined}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: photo.accent ?? project.accent }}
                      />
                    )}
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Inspired by this project"
        title={
          <>
            Let us shape your
            <span className="text-accent"> next home story</span>
          </>
        }
        description="Share your floor plan, inspiration, and timeline so we can guide the next steps."
        primary={{ label: 'Book Consultation', to: '/book' }}
        secondary={{ label: 'Back to Portfolio', to: '/portfolio' }}
      />
    </>
  )
}

export default ProjectDetail