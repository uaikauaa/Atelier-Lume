import { Routes, Route } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import PageTransition from './components/PageTransition/PageTransition'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader/Preloader'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import ProjectDetail from './pages/ProjectDetail/ProjectDetail'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

export default function App() {
  return (
    <SmoothScroll>
      <Preloader />
      <Header />
      <main id="main-content">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:slug" element={<ProjectDetail />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
