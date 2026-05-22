import { Link } from 'react-router-dom'

// ─────────────────────────────────────────────────────────────────
// HOW TO ADD YOUR PHOTOS:
// 1. Drop your image into src/assets/portfolio/
// 2. Import it: import proj1 from '../../assets/portfolio/living-room.jpg'
// 3. Add an `img` key to the project object: { ..., img: proj1 }
// 4. The card will automatically render it
// ─────────────────────────────────────────────────────────────────

interface Project {
  cat: string
  name: string
  location: string
  bg: string
  img?: string
}

const projects: Project[] = [
  { cat: 'Living Room', name: 'The Maia Residence',  location: 'Bishan, HDB 5-Room',     bg: '#C9AA85' },
  { cat: 'Bedroom',     name: 'Dusk Retreat',         location: 'Clementi, Condominium',  bg: '#B08860' },
  { cat: 'Kitchen',     name: 'Terranova Kitchen',    location: 'Orchard, Landed',        bg: '#D4BAA0' },
  { cat: 'Dining',      name: 'Ember Dining',         location: 'Sentosa, GC',            bg: '#C2956A' },
  { cat: 'Study',       name: 'The Scholar Nook',     location: 'Novena, Condominium',    bg: '#A87B52' },
]

const PortfolioPreview = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5 sm:gap-6">
          <div>
            <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[#7A8C6E] mb-3 sm:mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[#2C2825] leading-[1.02] max-w-[12ch]">
              Our Recent{' '}
              <em className="text-[#A0784A] not-italic">Projects</em>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#8B6F52] hover:text-[#A0784A] transition-colors duration-300 flex items-center gap-3 group whitespace-nowrap"
          >
            View All Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#D9CFC4]">
          {projects.map((p, i) => (
            <Link
              key={i}
              to="/portfolio"
              className={`relative overflow-hidden group bg-[#F2EDE6] aspect-[4/3] md:aspect-auto ${
                i === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ minHeight: i === 0 ? '20rem' : '16rem' }}
            >
              {/* Image or colour placeholder */}
              {p.img ? (
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundColor: p.bg }}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-[#C4A882] mb-1">
                  {p.cat} · {p.location}
                </p>
                <p className="font-serif text-lg sm:text-xl font-light text-white">{p.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview