import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home',      path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services',  path: '/services' },
    { label: 'About',     path: '/about' },
    { label: 'Reviews',   path: '/reviews' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2EDE6]/95 backdrop-blur-md border-b border-[#D9CFC4]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Castorea"
              className="block"
              style={{ width: 'clamp(4.5rem, 7vw, 6.5rem)', height: 'auto' }}
            />
          </Link>

          {/* Center links — desktop */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-10 list-none absolute left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`text-[10px] lg:text-[11px] font-medium tracking-[0.16em] lg:tracking-[0.18em] uppercase transition-colors duration-300 whitespace-nowrap ${
                    location.pathname === link.path
                      ? 'text-[#A0784A]'
                      : 'text-[#8B6F52] hover:text-[#2C2825]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <Link
            to="/book"
            className="hidden md:inline-flex items-center justify-center text-[10px] lg:text-[11px] font-medium tracking-[0.16em] lg:tracking-[0.18em] uppercase bg-[#2C2825] text-[#F2EDE6] px-5 lg:px-7 py-2.5 lg:py-3 hover:bg-[#A0784A] transition-colors duration-300 shrink-0 whitespace-nowrap"
          >
            Book Consultation
          </Link>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#2C2825] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-[#2C2825] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-[#2C2825] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#F2EDE6] border-t border-[#D9CFC4] px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-4 sm:gap-5">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.18em] uppercase ${
                  location.pathname === link.path ? 'text-[#A0784A]' : 'text-[#8B6F52]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setMenuOpen(false)}
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.18em] uppercase bg-[#2C2825] text-[#F2EDE6] px-5 sm:px-7 py-2.5 sm:py-3 text-center mt-1 sm:mt-2 hover:bg-[#A0784A] transition-colors duration-300"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar