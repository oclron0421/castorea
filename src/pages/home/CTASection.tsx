import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <section className="relative bg-[#2C2825] overflow-hidden">
      {/* Watermark text */}
      <span
        aria-hidden="true"
        className="absolute font-serif font-light text-white/[0.04] whitespace-nowrap pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ fontSize: 'clamp(4rem, 15vw, 14rem)', letterSpacing: '0.15em' }}
      >
        CASTOREA
      </span>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-20 sm:py-24 md:py-36 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
        <div>
          <p className="text-[10px] sm:text-[11px] font-medium tracking-[0.24em] sm:tracking-[0.28em] uppercase text-[#C4A882] mb-4 sm:mb-6">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light text-white leading-[1.04] max-w-[12ch]">
            Let's create your<br />
            <em className="text-[#C4A882] not-italic">dream home together.</em>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto md:flex-shrink-0">
          {/* Primary */}
          <Link
            to="/book"
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase bg-[#F2EDE6] text-[#2C2825] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-center hover:bg-white transition-colors duration-300 w-full sm:w-auto"
          >
            Book a Free Consultation
          </Link>
          {/* Secondary */}
          <Link
            to="/portfolio"
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase border border-white/30 text-white/70 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-center hover:border-white hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection