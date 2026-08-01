import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import VillaDetail from './pages/VillaDetail';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Navigation */}
        <nav className={`navbar ${isNavScrolled ? 'scrolled' : 'transparent'}`}>
          <div className="container nav-content">
            <Link to="/" className="logo">Omah Son9o</Link>
            <ul className="nav-links">
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/#villas">Tipe Villa</Link></li>
              <li><Link to="/#amenities">Fasilitas</Link></li>
              <li><Link to="/#contact">Kontak</Link></li>
            </ul>
          </div>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villa/:id" element={<VillaDetail />} />
        </Routes>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <h2 className="logo">Omah Son9o</h2>
              <p className="body-md text-secondary">Mendefinisikan ulang kemewahan dan kenyamanan tempat tinggal Anda.</p>
            </div>
            <div className="footer-links">
              <h4 className="title-md">Kontak Kami</h4>
              <p className="body-md text-secondary">info@omahson9o.com</p>
              <p className="body-md text-secondary">+62 812 3456 7890</p>
            </div>
            <div className="footer-links">
              <h4 className="title-md">Sosial Media</h4>
              <div className="social-links-vertical">
                <a href="#" className="social-card" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  Instagram
                </a>
                <a href="#" className="social-card" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
                <a href="#" className="social-card" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
                  X (Twitter)
                </a>
                <a href="#" className="social-card" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="body-md text-secondary">&copy; 2026 Omah Son9o Villa. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
