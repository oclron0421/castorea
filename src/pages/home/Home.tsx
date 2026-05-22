import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import PortfolioPreview from './PortfolioPreview'
import ReviewsPreview from './ReviewsPreview'
import CTASection from './CTASection'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <HeroSection />
        <StatsSection />
        <PortfolioPreview />
        <ReviewsPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default Home