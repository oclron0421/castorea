import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const SiteLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
