import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Shield, Home as HomeIcon, Key, MapPin, MessageSquare, CheckCircle, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';
import { villas } from '../data/villas';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const heroVideos = ['video-depan.mp4', 'video2.mp4', 'video3.mp4'];

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled((prev) => {
      if (latest > 50 && !prev) return true;
      if (latest <= 50 && prev) return false;
      return prev;
    });
  });

  return (
    <>
      {/* Dynamic Hero Section */}
      <motion.section
        id="hero"
        className={isScrolled ? "hero-state-scrolled" : "hero-state-full"}
        layout
      >
        <motion.div
          className="container hero-text-wrapper"
          layout
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div layout="position" className="hero-text-box">
            <div className="hero-logo-container" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'inherit' }}>
                <img src="/LogoOmahSongoKecil.PNG" alt="Logo Omah Songo" className="dyn-icon" style={{
                  width: '32px',
                  height: '32px',
                  objectFit: 'contain',
                  display: 'inline-block'
                }} />
                <span className="dyn-title" style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '1px' }}>VILLA</span>
              </div>
              <h1 className="display-lg dyn-title" style={{ fontSize: '2.5rem', lineHeight: '1' }}>Omah Son9o</h1>
            </div>

            <p className="body-md dyn-desc" style={{ marginBottom: '32px', lineHeight: '1.6' }}>
              Pengalaman liburan eksklusif dengan kenyamanan tanpa batas di Omah Son9o.
            </p>

            <a href="#villas" className="btn dyn-btn" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: '600', display: 'inline-block' }}>
              Jelajahi Villa &rarr;
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-bg-wrapper"
          layout
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            key={heroVideos[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="hero-video"
          >
            <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
            Browser Anda tidak mendukung video tag.
          </video>
        </motion.div>
      </motion.section>

      {/* Villa Collection Section */}
      <section id="villas" className="villas-section horizontal-scroll-section">
        <div className="container scroll-container-wrapper">

          <div className="scroll-sidebar">
            <motion.div
              className="section-header sticky-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <span className="label-caps">KOLEKSI KAMI</span>
              <h2 className="headline-md">Tipe Villa</h2>
              <p className="body-md text-secondary" style={{ marginTop: '16px' }}>
                Dari desain esensial hingga kemewahan maksimal, setiap villa di Omah Son9o dirancang khusus untuk memanjakan jiwa dan memberikan pengalaman yang tak terlupakan.
                Geser ke kanan untuk menjelajahi karya arsitektur kami.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="horizontal-villa-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {villas.map((villa) => (
              <motion.article
                key={villa.id}
                className="villa-card horizontal-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="villa-image-placeholder">
                  {villa.image ? (
                    <img src={villa.image} alt={villa.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="placeholder-lines"></div>
                  )}
                </div>
                <div className="villa-info">
                  <h3 className="headline-sm">{villa.name}</h3>
                  <p className="body-md text-secondary">{villa.desc}</p>
                  <Link to={`/villa/${villa.id}`} className="btn btn-secondary">Lihat Detail</Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="amenities-section">
        <div className="container">
          <motion.div
            className="section-header center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="label-caps">FASILITAS</span>
            <h2 className="headline-md">Kenyamanan Premium</h2>
          </motion.div>

          <motion.div
            className="amenities-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, title: 'Keamanan 24/7', desc: 'Sistem keamanan terpadu memastikan privasi dan ketenangan Anda.' },
              { icon: HomeIcon, title: 'Arsitektur Modern', desc: 'Desain minimalis dengan pencahayaan alami yang optimal.' },
              { icon: Headset, title: 'Pelayanan Cepat', desc: 'Pengelola kami selalu siap sedia memberikan respons instan dan layanan terbaik untuk memastikan kenyamanan Anda selama menginap.' },
              { icon: MapPin, title: 'Lokasi Strategis', desc: 'Dekat dengan banyak tempat wisata dan pusat oleh-oleh' },
            ].map((item, index) => (
              <motion.div key={index} className="amenity-card" variants={fadeInUp}>
                <div className="icon-wrapper">
                  <item.icon size={32} />
                </div>
                <h4 className="title-lg">{item.title}</h4>
                <p className="body-md text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Order / Cara Pesan Section */}
      <section id="cara-pesan" className="order-steps-section">
        <div className="container">
          <motion.div
            className="section-header center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="label-caps">SEAMLESS EXPERIENCE</span>
            <h2 className="headline-md">Cara Pesan</h2>
          </motion.div>

          <motion.div
            className="order-timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: HomeIcon,
                step: '01',
                title: 'PILIH VILLA',
                desc: 'Browse our collection and select the architectural masterpiece that resonates with your soul.'
              },
              {
                icon: MessageSquare,
                step: '02',
                title: 'VERIFIKASI WHATSAPP',
                desc: 'Connect directly with our personal concierge via WhatsApp for seamless verification.'
              },
              {
                icon: CheckCircle,
                step: '03',
                title: 'KONFIRMASI',
                desc: 'Receive your digital key and confirmation. Your private sanctuary awaits your arrival.'
              }
            ].map((item, index) => (
              <motion.div key={index} className="step-item" variants={fadeInUp}>
                <div className="step-icon">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="step-content">
                  <h4 className="label-caps step-title">{item.step}. {item.title}</h4>
                  <p className="body-md text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
