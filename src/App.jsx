import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Loader from './shared/components/Loader'
import Blog from './components/company/Blog'
import Login from './components/auth/Login'

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
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isLoggedIn', status);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/'; // Simple way to reset app state
  };

  if (!isAuthenticated) {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Login onLogin={handleLogin} />
        </Suspense>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navbar onLogout={handleLogout} />

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

            {/* Catch all for authenticated users */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

