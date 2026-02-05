import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Loader from './components/common/Loader'
import Blog from './components/company/Blog'

// Lazy loaded components for better initial load performance
const Home = lazy(() => import('./components/home/Home'));
const Services = lazy(() => import('./components/services/Services'));
const AboutUs = lazy(() => import('./components/company/AboutUs'));
const ContactUs = lazy(() => import('./components/layout/ContactUs'));

// Solutions
const Essential = lazy(() => import('./components/solutions/Essential'));
const Professional = lazy(() => import('./components/solutions/Professional'));
const Communities = lazy(() => import('./components/solutions/Communities'));
const Villas = lazy(() => import('./components/solutions/Villas'));
const Developers = lazy(() => import('./components/solutions/Developers'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navbar />

        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Solutions Routes */}
            <Route path="/solutions/essential" element={<Essential />} />
            <Route path="/solutions/professional" element={<Professional />} />
            <Route path="/solutions/communities" element={<Communities />} />
            <Route path="/solutions/villas" element={<Villas />} />
            <Route path="/solutions/developers" element={<Developers />} />
          </Routes>
        </main>

        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
