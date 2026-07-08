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
        const Card = (
          <div className="group relative h-80 overflow-hidden rounded-3xl border border-subtle bg-surface shadow-soft sm:h-88">
            <div className="absolute inset-0">
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
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/0" />
            <span className="pill absolute right-4 top-4 bg-white/85 text-ink">
              {project.photos.length} photos
            </span>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-5 text-bg">
              <p className="text-xs uppercase tracking-[0.3em] text-bg-soft">{project.location}</p>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-bg-soft">Completed {project.year}</p>
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
