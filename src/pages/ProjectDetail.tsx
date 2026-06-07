import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import CtaSection from '../components/CtaSection'
import { projects } from '../data/siteData'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)

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

  const selectedPhoto = project.photos[selectedPhotoIndex]

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
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-bg">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-bg-soft">
                Featured photo
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{selectedPhoto.label}</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-bg-soft">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <aside className="rounded-3xl border border-subtle bg-bg p-6 shadow-soft sm:p-7">
            <p className="eyebrow text-accent">Project scope</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-muted">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-accent">Photo gallery</p>
              <h2 className="display font-serif text-ink">Completed project photos</h2>
              <p className="body-lg max-w-2xl text-muted">
                Browse the key views for this project. These placeholders are ready for the final photos once they are added.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {project.photos.map((photo, index) => (
                <button
                  key={photo.label}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`focus-ring overflow-hidden rounded-2xl border bg-bg text-left transition-transform hover:-translate-y-0.5 ${
                    selectedPhotoIndex === index ? 'border-accent' : 'border-subtle'
                  }`}
                >
                  <div className="relative aspect-4/3">
                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.label}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: photo.accent ?? project.accent }}
                      />
                    )}
                  </div>
                  <span className="block px-3 py-3 text-xs font-semibold text-ink">
                    {photo.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.photos.map((photo) => (
                <article
                  key={photo.label}
                  className="overflow-hidden rounded-3xl border border-subtle bg-bg shadow-soft"
                >
                  <div className="relative aspect-4/3">
                    {photo.image ? (
                      <img
                        src={photo.image}
                        alt={photo.label}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: photo.accent ?? project.accent }}
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/85">
                      Photo placeholder
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <h3 className="text-lg font-semibold text-ink">{photo.label}</h3>
                    <p className="text-sm leading-relaxed text-muted">{photo.caption}</p>
                  </div>
                </article>
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