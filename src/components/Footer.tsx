import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  const cols = [
    {
      title: 'Navigate',
      links: [
        { label: 'Home',      path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Services',  path: '/services' },
        { label: 'About',     path: '/about' },
        { label: 'Reviews',   path: '/reviews' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Interior Design',  path: '/services' },
        { label: 'Home Furnishing',  path: '/services' },
        { label: 'Space Planning',   path: '/services' },
        { label: 'Renovation',       path: '/services' },
      ],
    },
    {
      title: 'Get in Touch',
      links: [
        { label: 'hello@castorea.sg', path: 'mailto:hello@castorea.sg' },
        { label: '+65 9123 4567',     path: 'tel:+6591234567' },
        { label: 'Singapore',         path: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-[#2C2825]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 pb-10 sm:pb-12 border-b border-white/10">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Castorea"
              className="block mb-4 sm:mb-5 opacity-90"
              style={{ width: 'clamp(7rem, 12vw, 9rem)', height: 'auto' }}
            />
            <p className="text-sm font-light text-white/40 leading-relaxed max-w-xs">
              Furnishing Homes, Designing Living.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'IG', href: '#' },
                { label: 'TK', href: '#' },
                { label: 'FB', href: '#' },
              ].map((s) => (
                <a
                
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-[10px] font-medium text-white/40 hover:border-[#C4A882] hover:text-[#C4A882] transition-all duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-medium tracking-[0.2em] sm:tracking-[0.22em] uppercase text-[#C4A882] mb-5 sm:mb-6">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm font-light text-white/40 hover:text-white/80 transition-colors duration-300 wrap-break-word"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-3 pt-6 sm:pt-8 text-center md:text-left">
          <p className="text-xs text-white/20">© 2025 Castorea. All rights reserved.</p>
          <p className="text-xs text-white/20">castorea.sg</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer