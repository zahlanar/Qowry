import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'all 0.3s ease',
      padding: '20px 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '24px', fontWeight: '700', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1001 }}>
          <img src="/qwory-logo.png" alt="Qwory" style={{ width: '40px', height: '40px' }} />
          Qwory
        </div>
        
        {/* Desktop Menu */}
        <div className="nav-links" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a href="#features" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Features</a>
          <a href="#how-it-works" style={{ fontWeight: '500', color: 'var(--text-main)' }}>How it Works</a>
          <a href="#testimonials" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Stories</a>
          <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px' }}>Download App</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ zIndex: 1001, cursor: 'pointer' }}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              padding: '40px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
              boxShadow: 'var(--shadow-lg)',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: 'var(--text-main)', fontSize: '18px' }}>Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: 'var(--text-main)', fontSize: '18px' }}>How it Works</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: '500', color: 'var(--text-main)', fontSize: '18px' }}>Stories</a>
            <button className="btn-primary" style={{ width: '100%', maxWidth: '300px' }}>Download App</button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
