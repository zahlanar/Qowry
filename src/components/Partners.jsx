import React from 'react';
import { motion } from 'framer-motion';
import wiseLogo from '../assets/wise.svg';
import wemaLogo from '../assets/wemabank.png';
import visaLogo from '../assets/visa.png';

const Partners = () => {
  const partners = [
    { name: 'Wise', logo: wiseLogo, height: '45px' },
    { name: 'Wema Bank', logo: wemaLogo, height: '55px' },
    { name: 'Visa', logo: visaLogo, height: '40px' },
  ];

  return (
    <section className="partners-section" style={{ padding: '60px 0', background: 'var(--bg-white)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          color: 'var(--text-secondary)', 
          fontSize: '16px', 
          fontWeight: '600', 
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '50px'
        }}>
          Trusted by Industry Leaders
        </p>
        
        <div className="partners-container">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, filter: 'grayscale(0%)', opacity: 1 }}
              style={{ 
                filter: 'grayscale(100%)',
                opacity: 0.6,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                style={{ 
                  height: partner.height, 
                  width: 'auto',
                  objectFit: 'contain',
                  maxWidth: '180px'
                }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
