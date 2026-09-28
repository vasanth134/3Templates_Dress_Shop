import React from 'react';
import { EDITORIAL_ARTISANS } from '../../../data/editorialData';
import { UsersThree, Certificate, Sparkle } from '@phosphor-icons/react';

export const ArtisanCraftStory: React.FC = () => {
  return (
    <section id="editorial-artisans" className="editorial-section artisans-section">
      <div className="editorial-container">
        <div className="artisan-editorial-card">
          <div className="artisan-editorial-grid">
            {/* Visual Portrait */}
            <div className="artisan-media-col">
              <div className="artisan-portrait-frame">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85"
                  alt="Master handloom weaver threading the warp"
                  loading="lazy"
                />
                <div className="artisan-portrait-caption">
                  <span>AT THE LOOM • WEAVING SETHURAM RED PALLU</span>
                </div>
              </div>
            </div>

            {/* Content & Pillars */}
            <div className="artisan-content-col">
              <span className="editorial-eyebrow">ABOUT THE MAKERS</span>
              <h2 className="artisan-main-heading">{EDITORIAL_ARTISANS.title}</h2>
              <div className="editorial-sep-line left-aligned"></div>

              <p className="artisan-lead-p">
                {EDITORIAL_ARTISANS.description}
              </p>

              {/* Artisan Stats Strip */}
              <div className="artisan-stats-grid">
                {EDITORIAL_ARTISANS.stats.map((stat, i) => (
                  <div key={i} className="artisan-stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Master Quote */}
              <div className="artisan-pullquote">
                <p className="pullquote-text">"{EDITORIAL_ARTISANS.artisanQuote}"</p>
                <div className="pullquote-author">{EDITORIAL_ARTISANS.leadArtisan}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
