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
              <p className="text-sm text-muted">Completed {project.year}</p>
            </div>
          </div>
        )

        if (linkTo) {
          return (
            <Link key={project.title} to={linkTo} className="block focus-ring rounded-3xl">
              {Card}
            </Link>
          )
        }

        return <div key={project.title}>{Card}</div>
      })}
    </div>
  )
}

export default ProjectGrid
