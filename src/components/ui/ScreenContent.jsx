import React from 'react';
import { FaBell, FaPlus, FaPaperPlane, FaEllipsisH, FaArrowUp, FaArrowDown, FaSearch, FaFilter, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';

// --- Shared Styles ---
const cardStyle = {
  background: 'white',
  borderRadius: '16px',
  padding: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  marginBottom: '16px'
};

const iconButtonStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  background: 'white',
  border: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#333',
  fontSize: '20px',
  marginBottom: '8px'
};

// --- Screen 1: Home/Dashboard ---
export const HomeScreen = () => (
  <div style={{ padding: '12px', background: '#F8F9FA', minHeight: '100%' }}>
    {/* Header */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '11px' }}>MM</div>
        <div>
          <div style={{ fontSize: '9px', color: '#888' }}>Welcome back,</div>
          <div style={{ fontSize: '12px', fontWeight: '700' }}>Michael Mamman</div>
        </div>
      </div>
      <FaBell style={{ fontSize: '16px' }} />
    </div>

    <h2 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px' }}>Account</h2>

    {/* Wallet Cards Carousel */}
    <div style={{ position: 'relative', marginBottom: '16px' }}>
      {/* Scrollable Wallet Cards Container */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        paddingBottom: '4px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {/* GBP Card */}
        <div style={{ 
          minWidth: '180px',
          flex: '0 0 180px',
          background: 'linear-gradient(135deg, #E8D4F8 0%, #D8C4E8 100%)', 
          borderRadius: '16px', 
          padding: '14px',
          color: '#333'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '13px' }}>
              🇬🇧 GBP
            </div>
            <div style={{ background: 'white', padding: '3px 6px', borderRadius: '6px', fontSize: '9px', fontWeight: '600', color: '#7C3AED' }}>Qwory</div>
          </div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Your balance</div>
          <div style={{ fontSize: '20px', fontWeight: '700', margin: '4px 0 10px' }}>£74,000.00</div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Account number</div>
          <div style={{ fontSize: '10px', fontWeight: '500' }}>•••• 4441</div>
        </div>

        {/* EUR Card */}
        <div style={{ 
          minWidth: '180px',
          flex: '0 0 180px',
          background: 'linear-gradient(135deg, #C4E5F8 0%, #B4D5E8 100%)', 
          borderRadius: '16px', 
          padding: '14px',
          color: '#333'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '13px' }}>
              🇪🇺 EUR
            </div>
          </div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Your balance</div>
          <div style={{ fontSize: '20px', fontWeight: '700', margin: '4px 0 10px' }}>€34,000.00</div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Account number</div>
          <div style={{ fontSize: '10px', fontWeight: '500' }}>•••• 1157</div>
        </div>

        {/* CNY Card */}
        <div style={{ 
          minWidth: '180px',
          flex: '0 0 180px',
          background: 'linear-gradient(135deg, #FADCD9 0%, #F8C8C4 100%)', 
          borderRadius: '16px', 
          padding: '14px',
          color: '#333'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '13px' }}>
              🇨🇳 CNY
            </div>
            <div style={{ background: 'white', padding: '3px 6px', borderRadius: '6px', fontSize: '9px', fontWeight: '600', color: '#E94F4F' }}>Qwory</div>
          </div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Your balance</div>
          <div style={{ fontSize: '20px', fontWeight: '700', margin: '4px 0 10px' }}>¥1,000,000</div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Account number</div>
          <div style={{ fontSize: '10px', fontWeight: '500' }}>•••• 4644</div>
        </div>

        {/* USD Card */}
        <div style={{ 
          minWidth: '180px',
          flex: '0 0 180px',
          background: 'linear-gradient(135deg, #D4F8D4 0%, #C4E8C4 100%)', 
          borderRadius: '16px', 
          padding: '14px',
          color: '#333'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600', fontSize: '13px' }}>
              🇺🇸 USD
            </div>
          </div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Your balance</div>
          <div style={{ fontSize: '20px', fontWeight: '700', margin: '4px 0 10px' }}>$25,500.00</div>
          <div style={{ fontSize: '9px', opacity: 0.7 }}>Account number</div>
          <div style={{ fontSize: '10px', fontWeight: '500' }}>•••• 7890</div>
        </div>
      </div>

      {/* Carousel Dots Indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginTop: '8px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0077B6' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D0D0D0' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D0D0D0' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D0D0D0' }} />
      </div>
    </div>

    {/* Quick Actions */}
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '16px 0' }}>
      {[
        { icon: <FaPlus />, label: 'Add' },
        { icon: <BiCommentDetail />, label: 'Bargains' },
        { icon: <FaPaperPlane />, label: 'Send' },
        { icon: <FaEllipsisH />, label: 'More' }
      ].map((action, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', margin: '0 auto 6px' }}>
            {action.icon}
          </div>
          <span style={{ fontSize: '10px', fontWeight: '500' }}>{action.label}</span>
        </div>
      ))}
    </div>

    {/* Transactions */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: '700' }}>Transactions</h3>
      <span style={{ fontSize: '10px', color: '#0077B6', fontWeight: '600' }}>View all</span>
    </div>

    {/* Transaction Items */}
    {[
      { type: 'debit', title: 'Transfer', desc: 'Paid 217143.83 N...', amount: '- NGN 217143.83', time: '14h ago' },
      { type: 'credit', title: 'Top up', desc: 'Bought 150.0 USD...', amount: '+ $150.00', time: 'Yesterday' }
    ].map((tx, i) => (
      <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: tx.type === 'debit' ? '#FFF0F0' : '#F0FFF4', color: tx.type === 'debit' ? '#E94F4F' : '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>
            {tx.type === 'debit' ? <FaArrowUp /> : <FaArrowDown />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '600', fontSize: '11px' }}>{tx.title}</div>
            <div style={{ fontSize: '9px', color: '#888' }}>{tx.desc}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: tx.type === 'debit' ? '#E94F4F' : '#10B981', fontWeight: '600', fontSize: '11px' }}>{tx.amount}</div>
            <div style={{ fontSize: '8px', color: '#888' }}>{tx.time}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// --- Screen 2: Negotiation Chat ---
export const ChatScreen = () => (
  <div style={{ background: '#F8F9FA', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
    {/* Header */}
    <div style={{ padding: '12px', background: 'white', borderBottom: '1px solid #eee' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>ZM</div>
        <div>
          <div style={{ fontWeight: '600', fontSize: '12px' }}>Zahlan Mamman <span style={{ background: '#E0F2F1', color: '#00695C', fontSize: '8px', padding: '2px 4px', borderRadius: '4px' }}>Active</span></div>
          <div style={{ fontSize: '10px', color: '#888' }}>USD → NGN • $200.00</div>
        </div>
      </div>
    </div>

    {/* Market Rate Banner */}
    <div style={{ background: '#E3F2FD', padding: '6px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px' }}>
      <span style={{ color: '#0077B6', fontWeight: '600' }}>↗ Market Rate</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontWeight: '700' }}>1456.0700</span>
        <span style={{ background: '#10B981', color: 'white', padding: '2px 4px', borderRadius: '4px', fontSize: '8px' }}>Live</span>
      </div>
    </div>

    {/* Chat Area */}
    <div style={{ flex: 1, padding: '12px' }}>
      {/* Offer Bubble */}
      <div style={{ background: 'white', borderRadius: '12px', padding: '12px', maxWidth: '90%', marginBottom: '6px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
          <span style={{ fontSize: '16px', fontWeight: '700' }}>🔄 1448.7800</span>
          <span style={{ background: '#E3F2FD', color: '#0077B6', fontSize: '8px', padding: '2px 4px', borderRadius: '4px', fontWeight: '600' }}>rate</span>
        </div>
        <div style={{ fontSize: '10px', color: '#666', marginBottom: '8px' }}>$200.00 USD → 289,756.00 NGN</div>
        <div style={{ fontSize: '11px', marginBottom: '8px' }}>I'd prefer the market rate of 1448.7800</div>
        <div style={{ display: 'inline-block', background: '#F0FFF4', color: '#10B981', fontSize: '8px', padding: '3px 6px', borderRadius: '4px', fontWeight: '600' }}>↘ 0.50% below market</div>
      </div>
      <div style={{ fontSize: '8px', color: '#888', marginLeft: '6px' }}>20:31</div>
    </div>

    {/* Quick Actions Bottom Sheet */}
    <div style={{ background: 'white', padding: '12px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', boxShadow: '0 -4px 20px rgba(0,0,0,0.05)' }}>
      <div style={{ fontSize: '10px', fontWeight: '600', color: '#666', marginBottom: '10px' }}>⚡ Quick Actions</div>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
        <button style={{ flex: 1, background: '#10B981', color: 'white', border: 'none', padding: '8px', borderRadius: '10px', fontWeight: '600', fontSize: '10px' }}>
          ✓ Accept 1448.7800
        </button>
        <button style={{ flex: 1, background: 'white', color: '#0077B6', border: '1px solid #0077B6', padding: '8px', borderRadius: '10px', fontWeight: '600', fontSize: '10px' }}>
          ↗ Market Rate
        </button>
      </div>

      <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
        {['-0.5%', '-1.0%', 'Split'].map(opt => (
          <button key={opt} style={{ flex: 1, padding: '6px', background: 'white', border: '1px solid #eee', borderRadius: '6px', fontSize: '9px', fontWeight: '500' }}>{opt}</button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input type="text" placeholder="Enter custom rate..." style={{ flex: 1, padding: '8px', borderRadius: '10px', border: '1px solid #eee', background: '#F8F9FA', fontSize: '9px' }} />
        <button style={{ width: '40px', background: '#0077B6', color: 'white', border: 'none', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaPaperPlane style={{ fontSize: '12px' }} />
        </button>
      </div>
    </div>
  </div>
);

// --- Screen 3: Deals/Marketplace ---
export const DealsScreen = () => (
  <div style={{ padding: '12px', background: '#F8F9FA', minHeight: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '700' }}>Deals</h2>
      <span style={{ background: '#0077B6', color: 'white', padding: '4px 10px', borderRadius: '16px', fontSize: '10px', fontWeight: '600' }}>● Live</span>
    </div>
    
    <div style={{ fontSize: '10px', color: '#666', marginBottom: '12px' }}>1 offer available</div>

    {/* Search */}
    <div style={{ background: 'white', padding: '10px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <FaSearch style={{ color: '#888', fontSize: '12px' }} />
      <span style={{ color: '#888', fontSize: '11px' }}>Search offers...</span>
    </div>

    {/* Filter Chips */}
    <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
      <span style={{ background: '#0077B6', color: 'white', padding: '6px 12px', borderRadius: '16px', fontSize: '10px', fontWeight: '600' }}>All Pairs</span>
      <span style={{ background: 'white', color: '#333', padding: '6px 12px', borderRadius: '16px', fontSize: '10px', fontWeight: '600', border: '1px solid #eee' }}>USD/NGN</span>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
      <div style={{ display: 'flex', gap: '12px', fontSize: '11px', fontWeight: '500', color: '#666' }}>
        <span style={{ color: '#0077B6', fontWeight: '600', borderBottom: '2px solid #0077B6' }}>All</span>
        <span>Buy</span>
        <span>Sell</span>
      </div>
      <div style={{ fontSize: '10px', fontWeight: '600' }}>Best Rate ▾</div>
    </div>

    {/* Offer Card */}
    <div style={{ background: 'white', borderRadius: '16px', padding: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E0E0E0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>MM</div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '12px' }}>Michael Mamman</div>
            <div style={{ fontSize: '10px', color: '#F59E0B' }}>★ 4.8 • 100 trades</div>
          </div>
        </div>
        <span style={{ background: '#E3F2FD', color: '#0077B6', padding: '3px 10px', borderRadius: '6px', fontSize: '10px', fontWeight: '600', height: 'fit-content' }}>Buy</span>
      </div>

      <div style={{ background: '#F8F9FA', borderRadius: '10px', padding: '12px', marginBottom: '12px' }}>
        <div style={{ fontSize: '10px', color: '#666', marginBottom: '3px' }}>You'll receive</div>
        <div style={{ fontSize: '20px', fontWeight: '700', color: '#0077B6', marginBottom: '3px' }}>200.0 <span style={{ fontSize: '12px', color: '#666' }}>NGN</span></div>
        <div style={{ fontSize: '10px', color: '#888' }}>Rate: 1 USD = 1448.78 NGN</div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
        <div style={{ flex: 1, background: '#F8F9FA', padding: '10px', borderRadius: '10px' }}>
          <div style={{ fontSize: '9px', color: '#888' }}>Available</div>
          <div style={{ fontSize: '11px', fontWeight: '600' }}>200.0 of 200.0</div>
        </div>
        <div style={{ flex: 1, background: '#F8F9FA', padding: '10px', borderRadius: '10px' }}>
          <div style={{ fontSize: '9px', color: '#888' }}>Limits</div>
          <div style={{ fontSize: '11px', fontWeight: '600' }}>$10.00 - $200.00</div>
        </div>
      </div>

      <button style={{ width: '100%', background: '#0077B6', color: 'white', padding: '12px', borderRadius: '10px', fontWeight: '600', border: 'none', fontSize: '12px' }}>
        View Offer
      </button>
    </div>
  </div>
);
