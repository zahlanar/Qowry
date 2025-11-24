import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-white)', padding: '80px 0 40px', borderTop: '1px solid #eee' }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: '60px' }}>
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/qwory-logo.png" alt="Qwory" style={{ width: '40px', height: '40px' }} />
              Qwory
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', marginBottom: '24px' }}>
              The secure peer-to-peer currency exchange marketplace. Your financial journey, simplified.
            </p>
            <div className="footer-social">
              <FaTwitter style={{ cursor: 'pointer' }} />
              <FaFacebook style={{ cursor: 'pointer' }} />
              <FaInstagram style={{ cursor: 'pointer' }} />
              <FaLinkedin style={{ cursor: 'pointer' }} />
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px' }}>Company</h4>
            <ul className="footer-links-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px' }}>Product</h4>
            <ul className="footer-links-list">
              <li><a href="#">Features</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '20px' }}>Support</h4>
            <ul className="footer-links-list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #eee', paddingTop: '40px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} Qwory Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
