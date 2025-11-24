import React from 'react';
import { motion } from 'framer-motion';
import PhoneMockup from './ui/PhoneMockup';
import { DealsScreen } from './ui/ScreenContent';

const steps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up in minutes. Verify your identity to unlock higher limits and premium features."
  },
  {
    number: "02",
    title: "Add Funds",
    description: "Top up your wallet via bank transfer, card, or QR code instantly."
  },
  {
    number: "03",
    title: "Negotiate & Exchange",
    description: "Find an offer or create your own. Chat with traders and agree on a rate."
  },
  {
    number: "04",
    title: "Transfer Anywhere",
    description: "Send money to friends, family, or bank accounts globally with low fees."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="grid-2-cols">
          <div>
            <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Simple Steps to <br />Financial Freedom</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Qwory makes it easy to manage your money across borders. No complicated forms, no hidden fees.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ display: 'flex', gap: '24px' }}
                >
                  <div style={{ 
                    fontSize: '24px', 
                    fontWeight: '700', 
                    color: 'var(--primary-light)',
                    opacity: 0.5
                  }}>
                    {step.number}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>{step.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <PhoneMockup>
                <DealsScreen />
              </PhoneMockup>
            </motion.div>
            
            {/* Decorative background blob */}
            <div style={{ 
              position: 'absolute', 
              top: '-10%', 
              right: '-10%', 
              width: '100%', 
              height: '100%', 
              background: 'var(--primary-light)', 
              borderRadius: '32px', 
              opacity: 0.1,
              zIndex: -1,
              transform: 'rotate(5deg)'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
