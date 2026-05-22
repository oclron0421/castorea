const stats = [
  { number: '100+',  label: 'Projects Completed' },
  { number: '5★',    label: 'Average Rating' },
  { number: '3+',    label: 'Years in Singapore' },
  { number: '100%',  label: 'Client Satisfaction' },
]

const StatsSection = () => {
  return (
    <div className="border-y border-[#D9CFC4] bg-[#FDFCFA]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 text-center hover:bg-[#F2EDE6] transition-colors duration-300 ${
              i % 2 === 0 ? 'border-r border-[#D9CFC4]' : ''
            } ${
              i < 2 ? 'border-b border-[#D9CFC4] md:border-b-0' : ''
            }`}
          >
            <div className="font-serif text-[clamp(2rem,5vw,3rem)] font-light text-[#A0784A] mb-2 leading-none">
              {stat.number}
            </div>
            <div className="text-[9px] sm:text-[10px] font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#8B6F52] leading-tight">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsSection