import React from 'react';

const PhoneMockup = ({ children, style, scale = 0.85 }) => {
  return (
    <div style={{ 
      width: '280px', 
      height: '560px', 
      background: 'white', 
      borderRadius: '35px', 
      boxShadow: '0 20px 50px rgba(0,0,0,0.2), 0 0 0 10px #1a1a1a', 
      position: 'relative',
      overflow: 'hidden',
      margin: '0 auto',
      transform: `scale(${scale})`,
      ...style
    }}>
      {/* Notch */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '100px', 
        height: '20px', 
        background: '#1a1a1a', 
        borderBottomLeftRadius: '14px', 
        borderBottomRightRadius: '14px',
        zIndex: 100
      }} />

      {/* Status Bar Area */}
      <div style={{ 
        height: '36px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '0 16px',
        fontSize: '10px',
        fontWeight: '600',
        color: '#1a1a1a',
        paddingTop: '8px'
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '3px' }}>
          <div style={{ width: '14px', height: '9px', border: '1px solid #1a1a1a', borderRadius: '2px' }} />
        </div>
      </div>

      {/* Screen Content */}
      <div style={{ 
        height: 'calc(100% - 44px)', 
        overflow: 'hidden',
        position: 'relative'
      }}>
        {children}
      </div>

      {/* Home Indicator */}
      <div style={{ 
        position: 'absolute', 
        bottom: '6px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '80px', 
        height: '3px', 
        background: '#1a1a1a', 
        borderRadius: '2px',
        opacity: 0.2
      }} />
    </div>
  );
};

export default PhoneMockup;
