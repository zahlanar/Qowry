import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=11",
    text: "Qwory has saved me hundreds of dollars in exchange fees. The peer-to-peer model is genius and the app is super easy to use."
  },
  {
    name: "Sarah Johnson",
    role: "Digital Nomad",
    image: "https://i.pravatar.cc/100?img=5",
    text: "I travel constantly and Qwory is the only app I trust for moving money between my accounts. Fast, secure, and reliable."
  },
  {
    name: "David Okon",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?img=3",
    text: "The negotiation feature allows me to get rates that banks simply can't match. Highly recommended for international business."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Loved by <span className="gradient-text">Thousands</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>See what our community has to say about Qwory.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                background: 'white', 
                padding: '32px', 
                borderRadius: '24px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', color: 'var(--warning)', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', fontStyle: 'italic' }}>
                "{item.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={item.image} alt={item.name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                <div>
                  <div style={{ fontWeight: '600' }}>{item.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
