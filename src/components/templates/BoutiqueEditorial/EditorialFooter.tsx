import React from 'react';

export const EditorialFooter: React.FC = () => {
  return (
    <footer className="editorial-footer">
      <div className="editorial-container">
        <div className="editorial-colophon-grid">
          <div className="colophon-main">
            <span className="colophon-eyebrow">COLOPHON & ARCHIVE</span>
            <h3 className="colophon-title">AURA</h3>
            <p className="colophon-desc">
              Published quarterly as a tactile compendium celebrating Indian textile geography, living heritage looms, and slow luxury.
            </p>
          </div>

          <div className="colophon-col">
            <h4 className="colophon-col-head">CURRENT ISSUE</h4>
            <ul className="colophon-list">
              <li><a href="#editorial-story">Chapter 01: The Alchemical Warp</a></li>
              <li><a href="#editorial-story">Chapter 02: Temple Towers</a></li>
              <li><a href="#editorial-curations">Curations: Monastic Reds</a></li>
              <li><a href="#editorial-artisans">National Award Weavers</a></li>
            </ul>
          </div>

          <div className="colophon-col">
            <h4 className="colophon-col-head">ATELIERS</h4>
            <ul className="colophon-list">
              <li><span>Poes Garden, Chennai</span></li>
              <li><span>Indiranagar, Bengaluru</span></li>
              <li><span>Chowk, Varanasi</span></li>
              <li><span>Pillayar Kovil St, Kanchipuram</span></li>
            </ul>
          </div>

          <div className="colophon-col">
            <h4 className="colophon-col-head">PRIVATE CONCIERGE</h4>
            <ul className="colophon-list">
              <li><a href="mailto:salon@aurasilks.com">salon@aurasilks.com</a></li>
              <li><a href="tel:+919840012345">+91 98400 12345</a></li>
              <li><span>Mon - Sat: 11 AM - 7 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="editorial-footer-sub">
          <div>
            © {new Date().getFullYear()} Aura Maison Des Soies. Published under patronship of traditional handloom guilds.
          </div>
          <div className="editorial-sub-links">
            <span>Silk Provenance</span>
            <span>•</span>
            <span>Artisan Ethics</span>
            <span>•</span>
            <span>Private Archive Access</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
