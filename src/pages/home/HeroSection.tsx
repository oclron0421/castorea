import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="min-h-svh grid grid-cols-1 md:grid-cols-2">

      {/* Left — Text */}
      <div className="flex items-start md:items-center px-5 sm:px-6 lg:px-20 py-16 sm:py-20 md:py-24 bg-[#F2EDE6]">
        <div className="max-w-xl">
          <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[#7A8C6E] mb-5 sm:mb-7">
            Singapore's Home Furnishing Studio
          </p>
          <h1 className="font-serif text-[clamp(2.2rem,4.8vw,4.2rem)] lg:text-[clamp(3.2rem,4vw,5rem)] font-light leading-[0.95] text-[#2C2825] mb-6 sm:mb-8 max-w-[9ch]">
            Furnishing Homes,<br />
            <em className="text-[#A0784A] not-italic">Designing Living.</em>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-[#8B6F52] max-w-prose mb-8 sm:mb-12">
            From a single statement piece to a complete interior transformation —
            Castorea brings warmth, craft, and intention to every corner of your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
            <Link
              to="/portfolio"
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase bg-[#2C2825] text-[#F2EDE6] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-center hover:bg-[#A0784A] transition-colors duration-300 w-full sm:w-auto"
            >
              View Our Work
            </Link>
            <Link
              to="/book"
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase border border-[#C4A882] text-[#8B6F52] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-center hover:border-[#2C2825] hover:text-[#2C2825] transition-all duration-300 w-full sm:w-auto"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Right — Image mosaic */}
      <div className="grid grid-cols-2 grid-rows-2 gap-px bg-[#D9CFC4] min-h-[42vh] sm:min-h-[50vh] md:min-h-svh">
        {[
          { label: 'Living Room', bg: '#D4B896' },
          { label: 'Dining',      bg: '#C9A87A' },
          { label: 'Bedroom',     bg: '#C2A070' },
          { label: 'Kitchen',     bg: '#CBAE8E' },
        ].map(({ label, bg }) => (
          <div
            key={label}
            className="relative overflow-hidden flex items-end p-3 sm:p-4"
            style={{ backgroundColor: bg }}
          >
            {/*
              ── PHOTO SLOT ──────────────────────────────────
              To add your photo, replace the div above with:
              <div key={label} className="relative overflow-hidden flex items-end p-4">
                <img
                  src={yourImportedImage}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ────────────────────────────────────────────── */}
            <span className="relative text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-white/55">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection