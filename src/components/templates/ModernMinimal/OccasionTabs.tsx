import React from 'react';
import { MODERN_OCCASIONS } from '../../../data/modernData';
import { ArrowRight } from '@phosphor-icons/react';

interface OccasionTabsProps {
  onSelectOccasion: (occasion: string) => void;
  selectedOccasion: string;
}

export const OccasionTabs: React.FC<OccasionTabsProps> = ({
  onSelectOccasion,
  selectedOccasion
}) => {
  return (
    <section id="modern-occasions" className="modern-section occasion-section">
      <div className="modern-container">
        <div className="modern-section-header">
          <span className="modern-section-pill">WARDROBE EDIT</span>
          <h2 className="modern-section-title">Shop by Occasion</h2>
          <p className="modern-section-desc">
            Curated silhouettes engineered for your actual calendar.
          </p>
        </div>

        <div className="occasion-grid">
          {MODERN_OCCASIONS.map((occ) => (
            <div
              key={occ.id}
              className={`occasion-card ${selectedOccasion === occ.name ? 'is-selected' : ''}`}
              onClick={() => onSelectOccasion(occ.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectOccasion(occ.name)}
            >
              <div className="occasion-media">
                <img src={occ.image} alt={occ.name} loading="lazy" />
                <div className="occasion-scrim"></div>
                <div className="occasion-badge">{occ.count}</div>
              </div>

              <div className="occasion-info">
                <h3 className="occasion-name">{occ.name}</h3>
                <p className="occasion-sub">{occ.subtitle}</p>
                <div className="occasion-cta">
                  <span>Explore edit</span>
                  <ArrowRight size={14} weight="bold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
