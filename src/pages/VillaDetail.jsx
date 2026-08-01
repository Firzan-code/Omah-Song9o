import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, ChefHat, Wifi, Dumbbell, Car, Headset, Tv, Wind, Shield, MessageSquare } from 'lucide-react';
import { villas } from '../data/villas';

// Icon Map helper to render Lucide icons by name
const IconMap = {
  Droplets, ChefHat, Wifi, Dumbbell, Car, Headset, Tv, Wind, Shield
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

  if (!villa) {
    return (
      <div className="container" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 className="headline-md">Villa Tidak Ditemukan</h2>
        <Link to="/" className="btn btn-secondary" style={{ marginTop: '24px' }}>Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="villa-detail-page">
      <div className="container">
        
        {/* Back Link */}
        <div style={{ paddingTop: '40px' }}>
          <Link to="/" className="back-link text-secondary">
            <ArrowLeft size={20} />
            <span>Kembali ke Koleksi</span>
          </Link>
        </div>

        {/* Hero Image */}
        <motion.div 
          className="detail-hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {villa.image ? (
            <img src={villa.image} alt={villa.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
          ) : (
            <div className="placeholder-lines"></div>
          )}
        </motion.div>

        {/* Header (Title & Price) */}
        <motion.div 
          className="detail-header-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="display-lg">{villa.name}</h1>
          <div className="detail-price-box">
            <span className="label-caps">STARTING FROM</span>
            <h3 className="title-lg">{villa.price}</h3>
          </div>
        </motion.div>

        {/* Two Column Content */}
        <motion.div 
          className="detail-two-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Left Column */}
          <div className="detail-col-left">
            <motion.div variants={fadeInUp} className="detail-section-block">
              <span className="label-caps detail-section-label">ARCHITECTURAL NOTES</span>
              <p className="body-md text-secondary">
                {villa.architecturalNotes}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="detail-section-block">
              <span className="label-caps detail-section-label">GALLERY</span>
              <div className="gallery-row-grid">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="gallery-square">
                    <div className="placeholder-lines"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="detail-col-right">
            <motion.div variants={fadeInUp} className="detail-section-block">
              <span className="label-caps detail-section-label">FACILITIES & SERVICES</span>
              <div className="facilities-grid">
                {villa.facilities.map((fac, idx) => {
                  const IconComponent = IconMap[fac.icon] || Droplets;
                  return (
                    <div key={idx} className="facility-item">
                      <div className="facility-icon-box">
                        <div className="placeholder-lines" style={{opacity: 0.1}}></div>
                        <IconComponent size={20} strokeWidth={1.5} />
                      </div>
                      <span className="body-sm">{fac.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="detail-section-block" style={{ borderTop: '1px solid var(--clr-surface)', paddingTop: '24px' }}>
              <span className="label-caps detail-section-label">LOCATION</span>
              <p className="body-md text-secondary">{villa.location}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="secure-experience-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="headline-md" style={{ marginBottom: '32px' }}>SECURE YOUR EXPERIENCE</h3>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-primary btn-large btn-whatsapp">
            <MessageSquare size={20} style={{ marginRight: '8px' }} />
            PESAN VIA WHATSAPP
          </a>
        </motion.div>

      </div>
    </div>
  );
}
