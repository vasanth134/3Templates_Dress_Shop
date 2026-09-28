import React from 'react';
import { HERITAGE_FABRICS } from '../../../data/heritageData';
import { CaretRight, MapPin } from '@phosphor-icons/react';

interface FabricCategoriesProps {
  onSelectFabric: (fabricId: string) => void;
}

export const FabricCategories: React.FC<FabricCategoriesProps> = ({ onSelectFabric }) => {
  return (
    <section id="heritage-fabrics" className="heritage-section fabrics-section">
      <div className="heritage-container">
        <div className="heritage-section-header">
          <span className="heritage-eyebrow">ARTISANAL WEAVES</span>
          <h2 className="heritage-section-title">Shop by Sacred Fabric</h2>
          <div className="heritage-gold-rule"></div>
          <p className="heritage-section-desc">
            Explore authentic handloom geography. Each region preserves ancestral weaving techniques refined over centuries.
          </p>
        </div>

        <div className="fabric-grid">
          {HERITAGE_FABRICS.map((fabric) => (
            <div
              key={fabric.id}
              className="fabric-card"
              onClick={() => onSelectFabric(fabric.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectFabric(fabric.name)}
            >
              <div className="fabric-card-media">
                <img src={fabric.image} alt={fabric.name} loading="lazy" />
                <div className="fabric-card-scrim"></div>
                <div className="fabric-origin-pill">
                  <MapPin size={12} weight="fill" />
                  <span>{fabric.origin}</span>
                </div>
              </div>

              <div className="fabric-card-info">
                <div className="fabric-meta">
                  <span className="fabric-tagline">{fabric.tagline}</span>
                  <span className="fabric-count">{fabric.count} Handlooms</span>
                </div>
                <h3 className="fabric-name">{fabric.name}</h3>
                <p className="fabric-description">{fabric.description}</p>
                <div className="fabric-link-wrap">
                  <span className="fabric-link-text">Browse {fabric.name}</span>
                  <CaretRight size={16} weight="bold" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
