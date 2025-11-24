import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './ui/PhoneMockup';
import { HomeScreen } from './ui/ScreenContent';

const Hero = () => {
  return (
    <section className="hero-section" style={{ paddingTop: '160px', paddingBottom: '100px', overflow: 'hidden' }}>
      <div className="container grid-2-cols">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            background: 'rgba(0, 119, 182, 0.1)', 
            color: 'var(--primary-blue)', 
            borderRadius: '50px', 
            fontWeight: '600', 
            fontSize: '14px',
            marginBottom: '24px'
          }}>
            🚀 The Future of Currency Exchange
          </div>
          <h1 className="hero-title" style={{ lineHeight: '1.1', marginBottom: '24px', color: 'var(--text-main)' }}>
            Your Financial Journey, <span className="gradient-text-animated">Simplified</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '500px' }}>
            Join the secure peer-to-peer marketplace. Negotiate real-time rates, exchange instantly, and save on every transaction.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Demo</button>
          </div>
          
          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'inherit' }}>
            <div style={{ display: 'flex' }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                  backgroundSize: 'cover',
                  border: '3px solid white',
                  marginLeft: i > 0 ? '-12px' : 0
                }} />
              ))}
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Trusted by <strong>10,000+</strong> users worldwide
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Abstract Background Elements */}
          <div style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-20%', 
            width: '600px', 
            height: '600px', 
            background: 'radial-gradient(circle, rgba(72, 202, 228, 0.2) 0%, rgba(255,255,255,0) 70%)', 
            zIndex: -1 
          }} />

          {/* Phone Mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup scale={1}>
              <HomeScreen />
            </PhoneMockup>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
