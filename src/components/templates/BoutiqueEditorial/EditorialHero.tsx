import React from 'react';
import { EDITORIAL_HERO_STORY } from '../../../data/editorialData';
import { ArrowDown, Sparkle } from '@phosphor-icons/react';

interface EditorialHeroProps {
  onReadStory: () => void;
  onExploreCurations: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onReadStory,
  onExploreCurations
}) => {
  return (
    <section className="editorial-hero-section">
      <div className="editorial-container">
        {/* Editorial Top Headline Banner */}
        <div className="editorial-hero-masthead-story">
          <div className="editorial-hero-tagline-row">
            <span className="editorial-issue-tag">{EDITORIAL_HERO_STORY.issueNumber}</span>
            <span className="editorial-collection-tag">{EDITORIAL_HERO_STORY.collectionName}</span>
          </div>

          <h2 className="editorial-hero-main-title">
            {EDITORIAL_HERO_STORY.title}
          </h2>

          <p className="editorial-hero-lead-text">
            {EDITORIAL_HERO_STORY.subtitle}
          </p>
        </div>

        {/* Large Editorial Photograph */}
        <div className="editorial-hero-media-wrapper">
          <div className="editorial-hero-img-box">
            <img
              src={EDITORIAL_HERO_STORY.heroImage}
              alt="Editorial silk drape composition in heritage courtyard"
              className="editorial-hero-img"
            />
            <div className="editorial-image-credit">
              <span>PHOTO: ATELIER ARCHIVE • MODEL WEARING 24K KORVAI KANJEEVARAM</span>
            </div>
          </div>

          {/* Curator Note Card (Asymmetric Magazine Placement) */}
          <div className="editorial-curator-note">
            <div className="curator-note-heading">CURATOR'S NOTE</div>
            <p className="curator-note-text">{EDITORIAL_HERO_STORY.curatorNote}</p>
            <div className="editorial-hero-cta-row">
              <button className="editorial-read-btn" onClick={onReadStory}>
                <span>Begin Story of the Season</span>
                <ArrowDown size={14} weight="bold" />
              </button>
              <button className="editorial-explore-btn" onClick={onExploreCurations}>
                <span>View Curated Edits</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
