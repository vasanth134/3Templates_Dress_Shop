import React from 'react';
import { EDITORIAL_CURATED_COLLECTIONS } from '../../../data/editorialData';
import { ArrowRight, Sparkle } from '@phosphor-icons/react';

interface CuratedCollectionsProps {
  onSelectCuration: (curationTitle: string) => void;
}

export const CuratedCollections: React.FC<CuratedCollectionsProps> = ({ onSelectCuration }) => {
  return (
    <section id="editorial-curations" className="editorial-section curations-section">
      <div className="editorial-container">
        <div className="editorial-section-header">
          <span className="editorial-eyebrow">CURATED CHAPTERS</span>
          <h2 className="editorial-title">Curations, Not Catalogues</h2>
          <div className="editorial-sep-line"></div>
          <p className="editorial-subhead">
            Each curation is conceived as a tactile exhibition. Rare botanical dyes, unhurried handloom counts, and archival silhouettes.
          </p>
        </div>

        <div className="curations-magazine-grid">
          {EDITORIAL_CURATED_COLLECTIONS.map((item, index) => (
            <article
              key={item.id}
              className="curation-feature-card"
              onClick={() => onSelectCuration(item.curationTitle)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectCuration(item.curationTitle)}
            >
              <div className="curation-media-frame">
                <img src={item.image} alt={item.curationTitle} loading="lazy" />
                <div className="curation-number">0{index + 1}</div>
              </div>

              <div className="curation-content-block">
                <span className="curation-descriptor">{item.descriptor}</span>
                <h3 className="curation-title">{item.curationTitle}</h3>
                <p className="curation-story-summary">{item.story}</p>

                <div className="curation-footer-row">
                  <span className="curation-pieces">{item.piecesCount}</span>
                  <div className="curation-view-link">
                    <span>Explore Feature</span>
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
