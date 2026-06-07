import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/castorea_logo.svg'
import { navLinks } from '../data/siteData'

const Navbar = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-bg-translucent backdrop-blur-md border-b border-subtle">
        <div className="shell h-16 md:h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 focus-ring rounded-2xl" aria-label="Castorea home">
            <img src={logo} alt="" className="h-10 w-10 rounded-full object-contain" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-serif text-lg text-ink">Castorea</span>
              <span className="mt-1 text-[0.58rem] uppercase tracking-[0.22em] text-muted">Singapore</span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={`nav-link ${location.pathname === link.path ? 'text-ink' : 'text-muted'}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/book" className="btn-primary">
              Book Consultation
            </Link>
          </div>

          <button
            className="md:hidden h-10 w-10 rounded-full border border-subtle bg-surface flex flex-col items-center justify-center gap-1"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-px w-5 bg-ink transition-all duration-300 ${
                menuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-subtle bg-bg px-5 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`nav-link ${location.pathname === link.path ? 'text-ink' : 'text-muted'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
              Book Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar