import React from 'react';
import { motion } from 'framer-motion';

const DownloadPage = () => {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="download-hero" 
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1 className="gradient-text" style={{ fontSize: '48px', marginBottom: '24px' }}>Download Qwory</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
            Get started with the most secure peer-to-peer currency exchange platform today.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
             <a href="#" style={{ display: 'block' }}>
              <img 
                src="/app-store.png" 
                alt="Download on the App Store" 
                style={{ height: '60px', width: 'auto', cursor: 'pointer', transition: 'transform 0.2s' }}
              />
            </a>
            <a href="#" style={{ display: 'block' }}>
              <img 
                src="/google-play.png" 
                alt="Get it on Google Play" 
                style={{ height: '60px', width: 'auto', cursor: 'pointer', transition: 'transform 0.2s' }}
              />
            </a>
          </div>
        </motion.div>

        <div className="setup-guide" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How to Get Started</h2>
          
          <div className="steps">
            {[
              {
                title: "1. Download & Install",
                desc: "Get the app from the App Store or Google Play using the buttons above.",
                icon: "📲"
              },
              {
                title: "2. Create Your Account",
                desc: "Sign up with your email and phone number. Verify your identity in minutes.",
                icon: "🔐"
              },
              {
                title: "3. Add Funds",
                desc: "Go to your Wallet, tap 'Add Funds', and choose your preferred payment method.",
                icon: "💳"
              },
              {
                title: "4. Start Exchanging",
                desc: "Browse offers or create your own. Exchange currency securely with other users.",
                icon: "💱"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  marginBottom: '30px',
                  background: 'var(--bg-light)',
                  padding: '24px',
                  borderRadius: '16px'
                }}
              >
                <div style={{ fontSize: '40px' }}>{step.icon}</div>
                <div>
                  <h3 style={{ marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
