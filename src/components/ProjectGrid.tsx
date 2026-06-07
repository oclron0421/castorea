import { Link } from 'react-router-dom'
import type { Project } from '../data/siteData'

type ProjectGridProps = {
  items: Project[]
  linkTo?: string
}

const ProjectGrid = ({ items, linkTo }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((project) => {
        const projectLink = linkTo ?? `/portfolio/${project.slug}`
        const actionLabel = linkTo ? 'View portfolio' : 'View project'

        const Card = (
          <div className="group rounded-3xl border border-subtle bg-surface overflow-hidden shadow-soft flex flex-col">
            <div className="relative h-52 sm:h-60">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundColor: project.accent }}
                />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/0" />
              <span className="pill absolute right-4 top-4 bg-white/85 text-ink">
                {project.photos.length} photos
              </span>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <span className="pill bg-white/85 text-ink">{project.category}</span>
                <span className="pill bg-white/75 text-ink">{project.style}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">{project.location}</p>
                <h3 className="text-lg font-semibold text-ink mt-2">{project.title}</h3>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm text-muted">
                <p>Completed {project.year}</p>
                <p className="font-semibold text-accent">{actionLabel}</p>
              </div>
            </div>
          </div>
        )

        return (
          <Link key={project.title} to={projectLink} className="block focus-ring rounded-3xl">
            {Card}
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectGrid
