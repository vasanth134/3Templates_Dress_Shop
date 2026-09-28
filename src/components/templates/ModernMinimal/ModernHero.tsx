import React from 'react';
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';

interface ModernHeroProps {
  onShopClick: () => void;
  onLookbookClick: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onShopClick, onLookbookClick }) => {
  return (
    <section className="modern-hero-section">
      <div className="modern-container">
        <div className="modern-hero-layout">
          {/* Text Content */}
          <div className="modern-hero-content">
            <div className="modern-hero-tag">
              <span className="modern-tag-dot"></span>
              <span>DROP 04 / URBAN MINIMALIST SILKS</span>
            </div>

            <h1 className="modern-hero-headline">
              Sarees Re-engineered For The Modern City.
            </h1>

            <p className="modern-hero-body">
              Featherlight pure mulberry silk, pre-pleated precision, and zero-effort drapes designed for boardroom authority and sunset cocktails.
            </p>

            <div className="modern-hero-actions">
              <button className="modern-btn-accent" onClick={onShopClick}>
                <span>Shop New Drops</span>
                <ArrowUpRight size={18} weight="bold" />
              </button>
              <button className="modern-btn-ghost" onClick={onLookbookClick}>
                <span>View Lookbook</span>
              </button>
            </div>

            <div className="modern-hero-stats">
              <div>
                <strong>380g</strong>
                <span>Ultra-Light Drape</span>
              </div>
              <div className="stat-sep">/</div>
              <div>
                <strong>3 Mins</strong>
                <span>Instant Drape</span>
              </div>
              <div className="stat-sep">/</div>
              <div>
                <strong>100%</strong>
                <span>Mulberry Silk</span>
              </div>
            </div>
          </div>

          {/* Large Lifestyle Photo (Not overly ornamental) */}
          <div className="modern-hero-visual">
            <div className="modern-hero-frame">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary woman draped in minimalist sage silk saree"
                className="modern-hero-img"
              />
              <div className="modern-floating-pill">
                <span className="pill-title">The Sage Mineral Drape</span>
                <span className="pill-price">₹14,800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
