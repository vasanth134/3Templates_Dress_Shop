import React from 'react';
import { Sparkle, ShieldCheck, WhatsappLogo, CaretRight } from '@phosphor-icons/react';

interface HeritageHeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const HeritageHero: React.FC<HeritageHeroProps> = ({ onExploreClick, onEnquireClick }) => {
  return (
    <section className="heritage-hero-section">
      {/* Full-bleed hero image background */}
      <div className="heritage-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=85"
          alt="Model draped in heritage crimson Kanjeevaram silk saree with pure gold zari"
          className="heritage-hero-img"
        />
        {/* Rich dark maroon & gold gradient scrim overlay */}
        <div className="heritage-hero-overlay"></div>
      </div>

      <div className="heritage-hero-container">
        {/* Subtle gold-foil style badge */}
        <div className="heritage-hero-badge">
          <Sparkle size={14} weight="fill" className="badge-sparkle" />
          <span>AUTUMN / BRIDAL TROUSSEAU 2026</span>
          <Sparkle size={14} weight="fill" className="badge-sparkle" />
        </div>

        {/* Gold-Foil Style Typography for Shop Name & Tagline */}
        <div className="heritage-gold-foil-wrapper">
          <h2 className="heritage-hero-title">
            <span className="gold-foil-text">Timeless Silks Woven in Pure Gold</span>
          </h2>
          <p className="heritage-hero-tagline">
            Four decades of heirloom craftsmanship. Rare Kanjeevaram, Varanasi brocades, and Mysore pure silk drapes handwoven by master artisan guilds.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="heritage-hero-ctas">
          <button className="heritage-btn-primary" onClick={onExploreClick}>
            <span>View New Arrivals</span>
            <CaretRight size={18} weight="bold" />
          </button>
          <button className="heritage-btn-secondary" onClick={onEnquireClick}>
            <WhatsappLogo size={20} weight="fill" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>

        {/* Trust hallmark badges */}
        <div className="heritage-hero-hallmarks">
          <div className="hallmark-item">
            <ShieldCheck size={18} weight="fill" />
            <span>100% Certified Silk Mark</span>
          </div>
          <div className="hallmark-divider"></div>
          <div className="hallmark-item">
            <Sparkle size={18} weight="fill" />
            <span>Certified Real Silver & Gold Zari</span>
          </div>
          <div className="hallmark-divider"></div>
          <div className="hallmark-item">
            <span>Direct From Master Looms</span>
          </div>
        </div>
      </div>
    </section>
  );
};
