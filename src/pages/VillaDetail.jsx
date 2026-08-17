import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Droplets, ChefHat, Wifi, Dumbbell, Car, Headset, Tv, Wind, Shield, MessageSquare, LayoutGrid, Home, BedDouble, Bath, Mic, Coffee, Mountain, Sofa, Utensils, Users, X, Camera, Compass } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { villas } from '../data/villas';

// Icon Map helper to render Lucide icons by name
const IconMap = {
  Droplets, ChefHat, Wifi, Dumbbell, Car, Headset, Tv, Wind, Shield, Home, BedDouble, Bath, Mic, Coffee, Mountain, Sofa, Utensils, Camera, Compass
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function VillaDetail() {
  const { id } = useParams();
  const villa = villas.find(v => v.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isPromoOpen, setIsPromoOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!villa) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 className="headline-md">Villa Tidak Ditemukan</h2>
        <Link to="/" className="btn btn-secondary" style={{ marginTop: '24px' }}>Kembali ke Beranda</Link>
      </div>
    );
  }

  // Format slides for lightbox
  const slides = villa.gallery ? villa.gallery.map(img => ({ src: img })) : [];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="villa-detail-page">
      <div className="container">

        {/* Back Link & Header */}
        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Link to="/" className="back-link text-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowLeft size={20} />
            <span>Kembali ke Koleksi</span>
          </Link>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="display-lg">{villa.name}</h1>
          <p className="body-md text-secondary" style={{ marginBottom: '8px' }}>{villa.location}</p>
          {villa.capacity && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--clr-text-main)', marginBottom: '24px' }}>
              <Users size={20} color="var(--clr-primary)" />
              <span className="body-md" style={{ fontWeight: '600' }}>Kapasitas: {villa.capacity}</span>
            </div>
          )}
        </motion.div>

        {/* Gallery Grid (Airbnb Style) */}
        <motion.div
          className="gallery-grid-airbnb"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {villa.gallery && villa.gallery.length > 0 ? (
            <>
              {villa.gallery.slice(0, 5).map((img, idx) => (
                <div
                  key={idx}
                  className={`gallery-grid-item item-${idx}`}
                  onClick={() => openLightbox(idx)}
                >
                  <img src={img} alt={`${villa.name} gallery ${idx + 1}`} />
                </div>
              ))}
              <button className="btn btn-secondary btn-show-all" onClick={() => openLightbox(0)}>
                <LayoutGrid size={16} style={{ marginRight: '8px' }} />
                Lihat Semua Foto
              </button>
            </>
          ) : (
            <div className="placeholder-lines" style={{ height: '400px' }}>Belum ada foto galeri</div>
          )}
        </motion.div>

        {/* Two Column Content */}
        <motion.div
          className="detail-two-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{ marginTop: '48px' }}
        >
          {/* Left Column */}
          <div className="detail-col-left">
            <motion.div variants={fadeInUp} className="detail-section-block">
              <span className="label-caps detail-section-label">ARCHITECTURAL NOTES</span>
              <p className="body-lg" style={{ lineHeight: '1.8' }}>
                {villa.architecturalNotes}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="detail-section-block">
              <span className="label-caps detail-section-label">LOKASI KAMI</span>
              <div style={{ width: '100%', height: '300px', borderRadius: '8px', overflow: 'hidden', marginTop: '16px' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Kayana%20Regency%2C%20Jalan%20Ir.%20Soekarno%2C%20Mojorejo%2C%20Kec.%20Junrejo%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065322&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="detail-col-right">
            <div className="booking-card">
              <div style={{ marginBottom: '16px' }}>
                <p className="body-sm text-secondary" style={{ marginBottom: '4px' }}>Harga Weekday</p>
                <h3 className="title-lg">{villa.priceWeekday || villa.price}</h3>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p className="body-sm text-secondary" style={{ marginBottom: '4px' }}>Harga Weekend</p>
                <h3 className="title-lg">{villa.priceWeekend || villa.price}</h3>
              </div>

              <div 
                className="promo-banner" 
                style={{ marginBottom: '24px', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => setIsPromoOpen(true)}
              >
                <div className="promo-text" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
                  Free tiket wisata (S&K)
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="https://wa.me/6285196571952" target="_blank" rel="noreferrer" className="btn btn-primary btn-large btn-whatsapp" style={{ width: '100%' }}>
                  <MessageSquare size={20} style={{ marginRight: '8px' }} />
                  Pesan via WhatsApp
                </a>
                <a href={villa.airbnbLink || "https://www.airbnb.co.id/rooms/1737574623202584351"} target="_blank" rel="noreferrer" className="btn btn-secondary btn-large" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  Pesan via Airbnb
                </a>
              </div>
            </div>

            <motion.div variants={fadeInUp} className="detail-section-block" style={{ marginTop: '48px' }}>
              <span className="label-caps detail-section-label">FASILITAS UTAMA</span>
              <div className="facilities-grid">
                {villa.facilities.map((fac, idx) => {
                  const IconComponent = IconMap[fac.icon] || Droplets;
                  return (
                    <div key={idx} className="facility-item">
                      <div className="facility-icon-box">
                        <IconComponent size={20} strokeWidth={1.5} color="var(--clr-primary)" />
                      </div>
                      <span className="body-sm">{fac.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Room Tour Section */}
        {villa.rooms && villa.rooms.length > 0 && (
          <motion.div
            className="room-tour-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="headline-md" style={{ marginBottom: '40px' }}>Tempat Tidur & Kamar Mandi</h3>

            <div className="room-list">
              {villa.rooms.map((room, idx) => (
                <div key={idx} className="room-item">
                  <div className="room-info">
                    <h4 className="title-lg">{room.name}</h4>
                    <p className="body-md text-secondary">{room.desc}</p>
                  </div>
                  <div className="room-image">
                    <img src={room.image} alt={room.name} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>

      {/* Promo Modal */}
      <AnimatePresence>
        {isPromoOpen && (
          <div className="modal-overlay" onClick={() => setIsPromoOpen(false)} style={{ zIndex: 9999 }}>
            <motion.div 
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <button className="modal-close" onClick={() => setIsPromoOpen(false)}>
                <X size={24} />
              </button>
              <h3 className="title-lg" style={{ marginBottom: '16px' }}>Syarat & Ketentuan Tiket Wisata</h3>
              <ul className="body-md" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--clr-text-secondary)' }}>
                <li>Setiap kali menginap memberikan review yang bagus dan update di sosial media (tag omah songo).</li>
                <li>Setiap reservasi harus dilakukan atas nama yang sama dan menggunakan data tamu yang sama.</li>
                <li>Free Welcome Drink.</li>
                <li>8x Menginap Free tiket Liburan JTP 1, 2, 3.</li>
                <li>5x Menginap Free Tiket Liburan Mikutopia, Baloga, BNS, Museum Angkut.</li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Component */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </div>
  );
}
