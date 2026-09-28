import React from 'react';
import { MODERN_LOOKBOOK } from '../../../data/modernData';
import { ArrowUpRight } from '@phosphor-icons/react';

interface LookbookGalleryProps {
  onSelectLook: (sareeName: string) => void;
}

export const LookbookGallery: React.FC<LookbookGalleryProps> = ({ onSelectLook }) => {
  return (
    <section id="modern-lookbook" className="modern-section lookbook-section">
      <div className="modern-container">
        <div className="modern-section-header">
          <span className="modern-section-pill">EDITORIAL STYLING</span>
          <h2 className="modern-section-title">The Urban Lookbook</h2>
          <p className="modern-section-desc">
            How our community styles their sarees: paired with blazers, crop tops, and sneakers.
          </p>
        </div>

        <div className="lookbook-grid">
          {MODERN_LOOKBOOK.map((look) => (
            <div
              key={look.id}
              className="lookbook-item"
              onClick={() => onSelectLook(look.saree)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectLook(look.saree)}
            >
              <div className="lookbook-media">
                <img src={look.image} alt={look.title} loading="lazy" />
                <div className="lookbook-overlay">
                  <div className="lookbook-cta-circle">
                    <ArrowUpRight size={20} weight="bold" />
                  </div>
                </div>
              </div>

              <div className="lookbook-caption">
                <h3 className="lookbook-title">{look.title}</h3>
                <p className="lookbook-tagline">{look.tagline}</p>
                <div className="lookbook-saree-link">Featuring: {look.saree}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
