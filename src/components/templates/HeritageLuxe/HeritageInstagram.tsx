import React from 'react';
import { HERITAGE_INSTAGRAM } from '../../../data/heritageData';
import { InstagramLogo, Heart, ChatCircle } from '@phosphor-icons/react';

export const HeritageInstagram: React.FC = () => {
  return (
    <section className="heritage-section instagram-section">
      <div className="heritage-container">
        <div className="instagram-header-row">
          <div>
            <span className="heritage-eyebrow">VISUAL DIARY</span>
            <h2 className="heritage-section-title">Follow the Atelier @AuraSilks</h2>
            <div className="heritage-gold-rule"></div>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram-follow-btn"
          >
            <InstagramLogo size={18} weight="bold" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        <div className="instagram-grid">
          {HERITAGE_INSTAGRAM.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
              className="instagram-card"
            >
              <div className="instagram-img-wrap">
                <img src={post.imageUrl} alt={post.caption} loading="lazy" />
                <div className="instagram-overlay">
                  <div className="instagram-stats">
                    <span className="stat-item">
                      <Heart size={18} weight="fill" />
                      <span>{post.likes.toLocaleString()}</span>
                    </span>
                    <span className="stat-item">
                      <ChatCircle size={18} weight="fill" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
              <p className="instagram-caption">{post.caption}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
