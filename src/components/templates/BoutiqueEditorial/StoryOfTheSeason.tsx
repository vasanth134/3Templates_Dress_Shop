import React from 'react';
import { EDITORIAL_STORY_BLOCKS } from '../../../data/editorialData';
import { Quotes, Sparkle } from '@phosphor-icons/react';

export const StoryOfTheSeason: React.FC = () => {
  return (
    <section id="editorial-story" className="editorial-section story-season-section">
      <div className="editorial-container">
        <div className="editorial-section-header">
          <span className="editorial-eyebrow">FEATURED STORY OF THE SEASON</span>
          <h2 className="editorial-title">The Alchemy of Gold & Mulberry</h2>
          <div className="editorial-sep-line"></div>
          <p className="editorial-subhead">
            A narrative in two movements documenting the quiet communion between weaver and raw silk.
          </p>
        </div>

        {/* Vertical Story Blocks Stack */}
        <div className="editorial-story-blocks-stack">
          {EDITORIAL_STORY_BLOCKS.map((block, idx) => (
            <article
              key={block.id}
              className={`editorial-story-block ${idx % 2 === 1 ? 'is-reversed' : ''}`}
            >
              {/* Asymmetric Imagery Pair */}
              <div className="story-block-visuals">
                <div className="visual-primary">
                  <img src={block.image} alt={block.title} loading="lazy" />
                  <span className="visual-caption-tag">{block.chapter} • ARCHIVE</span>
                </div>
                {block.detailImage && (
                  <div className="visual-secondary">
                    <img src={block.detailImage} alt="Detail weave texture" loading="lazy" />
                  </div>
                )}
              </div>

              {/* Narrative & Quote */}
              <div className="story-block-narrative">
                <span className="story-chapter-label">{block.chapter}</span>
                <h3 className="story-block-title">{block.title}</h3>

                <p className="story-block-text">{block.narrative}</p>

                <div className="story-quote-box">
                  <Quotes size={28} weight="fill" className="story-quote-icon" />
                  <blockquote className="story-quote-body">{block.quote}</blockquote>
                  <cite className="story-artisan-cite">— {block.artisanName}</cite>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
