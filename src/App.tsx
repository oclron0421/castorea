import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.tsx'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio.tsx'
import ProjectDetail from './pages/ProjectDetail.tsx'
import Services from './pages/Services.tsx'
import Cabinetry from './pages/Cabinetry.tsx'
import About from './pages/About.tsx'
import Reviews from './pages/Reviews.tsx'
import Book from './pages/Book.tsx'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cabinetry" element={<Cabinetry />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App