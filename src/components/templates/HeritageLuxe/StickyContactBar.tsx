import React from 'react';
import { WhatsappLogo, PhoneCall, Sparkle } from '@phosphor-icons/react';

interface StickyContactBarProps {
  onDirectEnquiry: () => void;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ onDirectEnquiry }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Aura Silks, I would like to consult with your silk specialist for upcoming wedding/festive drapes.'
    );
    window.open(`https://wa.me/919840012345?text=${text}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919840012345', '_self');
  };

  return (
    <div className="heritage-sticky-contact-bar" role="complementary" aria-label="Quick Boutique Assistance">
      <div className="sticky-contact-inner">
        {/* Boutique status badge */}
        <div className="sticky-status-hint">
          <span className="status-live-dot"></span>
          <span className="status-text">Master Draper Online</span>
        </div>

        <div className="sticky-actions-group">
          {/* WhatsApp Primary */}
          <button className="sticky-whatsapp-btn" onClick={handleWhatsApp} aria-label="Chat on WhatsApp">
            <WhatsappLogo size={20} weight="fill" />
            <span className="btn-label">WhatsApp Stylist</span>
          </button>

          {/* Call to Order */}
          <button className="sticky-call-btn" onClick={handleCall} aria-label="Call to Order">
            <PhoneCall size={19} weight="fill" />
            <span className="btn-label">Call To Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};
