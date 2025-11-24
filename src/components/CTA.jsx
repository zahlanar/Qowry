import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-dark))', 
            borderRadius: '32px', 
            padding: '60px', 
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background circles */}
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />

          <h2 style={{ fontSize: '42px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', position: 'relative', zIndex: 1 }}>
            Join thousands of users who are saving money and time with Qwory. Download the app today.
          </p>
          
          <div className="cta-buttons" style={{ position: 'relative', zIndex: 1 }}>
            <a href="#" style={{ display: 'block' }}>
              <img 
                src="/app-store.png" 
                alt="Download on the App Store" 
                style={{ 
                  height: '60px', 
                  width: 'auto', 
                  cursor: 'pointer', 
                  transition: 'transform 0.2s',
                  filter: 'brightness(1.1)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>
            
            <a href="#" style={{ display: 'block' }}>
              <img 
                src="/google-play.png" 
                alt="Get it on Google Play" 
                style={{ 
                  height: '60px', 
                  width: 'auto', 
                  cursor: 'pointer', 
                  transition: 'transform 0.2s',
                  filter: 'brightness(1.1)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
