import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaShieldAlt, FaGlobeAmericas, FaChartLine } from 'react-icons/fa';
import PhoneMockup from './ui/PhoneMockup';
import { ChatScreen } from './ui/ScreenContent';

const features = [
  {
    icon: <FaHandshake />,
    title: "Peer-to-Peer Negotiation",
    description: "Don't settle for fixed rates. Negotiate directly with other users to get the best exchange rate possible."
  },
  {
    icon: <FaShieldAlt />,
    title: "Bank-Level Security",
    description: "Your funds are protected with biometric authentication, PIN codes, and locked funds during transactions."
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global Transfers",
    description: "Send money across borders instantly. Support for USD, EUR, GBP, NGN, and many more currencies."
  },
  {
    icon: <FaChartLine />,
    title: "Real-Time Analytics",
    description: "Track your spending, monitor exchange rates, and visualize your financial growth with our advanced dashboard."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Why Choose <span className="gradient-text">Qwory</span>?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We're redefining how you exchange and transfer money globally. Safe, fast, and fair.
          </p>
        </div>

        <div className="grid-2-cols">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ 
                  background: 'white', 
                  padding: '24px', 
                  borderRadius: '24px', 
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}
              >
                <div style={{ 
                  minWidth: '50px', 
                  height: '50px', 
                  background: 'rgba(0, 119, 182, 0.1)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: 'var(--primary-blue)'
                }}>
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
             <PhoneMockup>
               <ChatScreen />
             </PhoneMockup>
             {/* Decorative elements */}
             <div style={{ position: 'absolute', zIndex: -1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '80%', background: 'radial-gradient(circle, rgba(72, 202, 228, 0.2) 0%, rgba(255,255,255,0) 70%)' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
