import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import VillaDetail from './pages/VillaDetail';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function AppContent() {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (!isHomePage || isNavScrolled) ? 'scrolled' : 'transparent';

  return (
    <>
      <ScrollToTop />
      <div className="app-container">
        {/* Navigation */}
        <nav className={`navbar ${navClass}`}>
          <div className="container nav-content">
            <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{
                width: '40px',
                height: '40px',
                marginRight: '10px',
                backgroundColor: 'currentColor',
                WebkitMaskImage: 'url(/logo.svg)',
                maskImage: 'url(/logo.svg)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                display: 'inline-block'
              }}></span>
              Omah Son9o
            </Link>
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
              <h2 className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  width: '50px',
                  height: '50px',
                  marginRight: '12px',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url(/logo.svg)',
                  maskImage: 'url(/logo.svg)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                  display: 'inline-block'
                }}></span>
                Omah Son9o
              </h2>
              <p className="body-md text-secondary">Mendefinisikan ulang kemewahan dan kenyamanan tempat tinggal Anda.</p>
            </div>
            <div className="footer-links">
              <h4 className="title-md">Lokasi Kami</h4>
              <p className="body-md text-secondary" style={{ lineHeight: '1.6' }}>
                Kayana Regency,<br />
                Jalan Ir. Soekarno, Mojorejo,<br />
                Kec. Junrejo, Kota Batu,<br />
                Jawa Timur 65322
              </p>
            </div>
            <div className="footer-links">
              <h4 className="title-md">Kontak Kami</h4>
              <p className="body-md text-secondary">info@omahson9o.com</p>
              <p className="body-md text-secondary">+62 851 9657 1952</p>
            </div>
            <div className="footer-links">
              <h4 className="title-md">Sosial Media</h4>
              <div className="social-links-vertical">
                <a href="https://www.instagram.com/omahsongo_?igsh=emtxZDZ3ZTMybzN4" target="_blank" rel="noopener noreferrer" className="social-card" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@omahsongo_?_r=1&_t=ZS-98WEZr43Qt6" target="_blank" rel="noopener noreferrer" className="social-card" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 1 1-7-7v3a4 4 0 0 0 0 8 4 4 0 0 0 4-4v-5z" /></svg>
                  TikTok
                </a>
                <a href="https://www.airbnb.co.id/rooms/1737574623202584351?unique_share_id=a5f1a6f5-d956-4690-b2b2-6d1238b9304d&viralityEntryPoint=1&s=76" target="_blank" rel="noopener noreferrer" className="social-card" aria-label="Airbnb">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  Airbnb
                </a>
                <a href="https://wa.me/6285196571952" target="_blank" rel="noopener noreferrer" className="social-card" aria-label="WhatsApp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
