import React from 'react';
import { Crown, Sparkle, WhatsappLogo, CaretRight } from '@phosphor-icons/react';

interface BridalBannerProps {
  onBridalClick: () => void;
  onConsultationClick: () => void;
}

export const BridalBanner: React.FC<BridalBannerProps> = ({
  onBridalClick,
  onConsultationClick
}) => {
  return (
    <section id="heritage-bridal" className="bridal-banner-section">
      <div className="bridal-banner-wrap">
        <div className="bridal-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1600&q=85"
            alt="Royal Bridal Silk Saree Collection"
          />
          <div className="bridal-banner-gradient"></div>
        </div>

        <div className="bridal-banner-content">
          <div className="bridal-eyebrow-pill">
            <Crown size={16} weight="fill" />
            <span>THE ROYAL BRIDAL PAVILION</span>
            <Sparkle size={14} weight="fill" />
          </div>

          <h2 className="bridal-headline">
            Muhurtham & Festive Heirloom Drapes
          </h2>

          <p className="bridal-subtext">
            Handwoven in Kanchipuram with consecrated pure gold zari warp and bespoke matching unstitched blouse brocades. Made to become your family’s most cherished heirloom.
          </p>

          <div className="bridal-cta-group">
            <button className="bridal-primary-btn" onClick={onBridalClick}>
              <span>Explore Bridal Edit</span>
              <CaretRight size={18} weight="bold" />
            </button>
            <button className="bridal-secondary-btn" onClick={onConsultationClick}>
              <WhatsappLogo size={20} weight="fill" />
              <span>Book Bridal WhatsApp Stylist</span>
            </button>
          </div>

          <div className="bridal-perks-row">
            <div className="perk-item">
              <span className="perk-bullet">✦</span>
              <span>Complimentary Matching Blouse Fabric</span>
            </div>
            <div className="perk-item">
              <span className="perk-bullet">✦</span>
              <span>Direct Video Call Loom Preview</span>
            </div>
            <div className="perk-item">
              <span className="perk-bullet">✦</span>
              <span>Heirloom Cedar Presentation Chest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
