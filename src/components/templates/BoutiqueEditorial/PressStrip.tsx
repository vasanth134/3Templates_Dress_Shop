import React from 'react';
import { EDITORIAL_PRESS } from '../../../data/editorialData';
import { Quotes } from '@phosphor-icons/react';

export const PressStrip: React.FC = () => {
  return (
    <section className="editorial-section press-strip-section">
      <div className="editorial-container">
        <div className="press-strip-header">
          <span className="editorial-eyebrow">ACCLAIM & MEDIA</span>
          <h2 className="editorial-title">In The Cultural Press</h2>
          <div className="editorial-sep-line"></div>
        </div>

        <div className="press-mentions-grid">
          {EDITORIAL_PRESS.map((item, i) => (
            <div key={i} className="press-card">
              <div className="press-brand-logo">{item.logoText}</div>
              <p className="press-quote">"{item.quote}"</p>
              <span className="press-issue-note">{item.publication} • {item.issue}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
