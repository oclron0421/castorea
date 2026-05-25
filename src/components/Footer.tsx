import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { contact, navLinks, services, socialLinks } from '../data/siteData'

const Footer = () => {
  return (
    <footer className="bg-ink text-bg">
      <div className="shell section-pad">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
          <div className="flex flex-col gap-5">
            <img src={logo} alt="Castorea" className="h-10 w-auto" />
            <p className="text-sm text-white/70 leading-relaxed">
              Furnishing homes, designing living with warmth, balance, and intention.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="h-10 w-10 rounded-full border border-white/20 text-[10px] tracking-[0.22em] uppercase flex items-center justify-center text-white/70 hover:text-white hover:border-accent transition"
                >
                  {link.short}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="eyebrow text-accent">Navigate</p>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.label} to={link.path} className="footer-link">
                  {link.label}
                </Link>
              ))}
              <Link to="/book" className="footer-link">
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="eyebrow text-accent">Services</p>
            <div className="flex flex-col gap-3">
              {services.slice(0, 3).map((service) => (
                <Link key={service.title} to="/services" className="footer-link">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="eyebrow text-accent">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href={`mailto:${contact.email}`} className="footer-link">
                {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="footer-link">
                {contact.phone}
              </a>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-white/60">
          <p>Copyright 2026 Castorea. All rights reserved.</p>
          <p>castorea.sg</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer