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
            <button style={{ 
              background: 'black', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '24px' }}></div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px' }}>Download on the</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>App Store</div>
              </div>
            </button>
            
            <button style={{ 
              background: 'black', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '12px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ fontSize: '24px' }}>▶</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '10px' }}>GET IT ON</div>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>Google Play</div>
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
