import React from 'react';
import { Sparkle, SealCheck, UsersThree, Medal } from '@phosphor-icons/react';

export const HeritageStory: React.FC = () => {
  return (
    <section id="heritage-story" className="heritage-section story-section">
      <div className="heritage-container">
        <div className="story-split-grid">
          {/* Visual Showcase with Layered Frame */}
          <div className="story-media-column">
            <div className="story-image-main">
              <img
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85"
                alt="Master weaver working on pit loom with jacquard cards"
              />
              <div className="story-stamp-badge">
                <span className="stamp-year">1984</span>
                <span className="stamp-text">AUTHENTIC HANDLOOM</span>
              </div>
            </div>
            <div className="story-image-secondary">
              <img
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=85"
                alt="Pure gold zari spools"
              />
              <div className="story-caption-box">
                <Sparkle size={14} weight="fill" />
                <span>Pure Silver Wire dipped in 24 Karat Gold</span>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="story-text-column">
            <span className="heritage-eyebrow">OUR CRAFTSMANSHIP & LINEAGE</span>
            <h2 className="heritage-section-title">The Sacred Rhythm of the Pit Loom</h2>
            <div className="heritage-gold-rule"></div>

            <p className="story-lead-p">
              Founded in 1984 in the ancient temple city of Kanchipuram, Aura Silks was born from an unyielding vow: to preserve the uncompromising purity of ancestral handloom weaves against the tide of industrial powerlooms.
            </p>

            <p className="story-body-p">
              Every saree in our boutique is woven by master craftsmen using triple-shuttle Korvai techniques. The warp and weft are interlocked with mathematical precision, ensuring that the contrasting borders never fray, and the pure gold zari catches light with an unmistakable antique glow.
            </p>

            {/* Heritage Pillar Metrics */}
            <div className="story-pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <SealCheck size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="pillar-title">Silk Mark Certified</h4>
                  <p className="pillar-desc">100% natural mulberry silk verified by the Central Silk Board.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <Medal size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="pillar-title">Genuine Precious Zari</h4>
                  <p className="pillar-desc">Tested silver core electroplated with authentic 24K yellow gold.</p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon">
                  <UsersThree size={24} weight="fill" />
                </div>
                <div>
                  <h4 className="pillar-title">Fair Weaver Collective</h4>
                  <p className="pillar-desc">Direct patronship to over 50 hereditary weaver families.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
