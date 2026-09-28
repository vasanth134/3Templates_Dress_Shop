import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';

export const ModernFooter: React.FC = () => {
  return (
    <footer className="modern-footer">
      <div className="modern-container">
        <div className="modern-footer-top">
          <div className="modern-footer-brand">
            <div className="modern-brand-logo footer-logo">
              <span className="modern-logo-text">AURA</span>
              <span className="modern-logo-sub">STUDIO</span>
            </div>
            <p className="modern-footer-motto">
              Next-generation sarees engineered for modern ease. Sustainable, zero-waste pure silk, made by artisan partners in small ethical batches.
            </p>
          </div>

          <div className="modern-footer-links-grid">
            <div className="footer-link-group">
              <span className="group-title">EXPLORE</span>
              <a href="#modern-new-in">New Arrivals</a>
              <a href="#modern-occasions">Shop by Occasion</a>
              <a href="#modern-best-sellers">Bestsellers</a>
              <a href="#modern-lookbook">Lookbook 2026</a>
            </div>

            <div className="footer-link-group">
              <span className="group-title">GUIDES</span>
              <a href="#modern-drape-guide">3-Minute Drape Guide</a>
              <a href="#modern-drape-guide">Silk Care & Storage</a>
              <a href="#">Blouse Stitching Specs</a>
              <a href="#">Size & Height Chart</a>
            </div>

            <div className="footer-link-group">
              <span className="group-title">CUSTOMER CARE</span>
              <a href="https://wa.me/919840012345" target="_blank" rel="noreferrer">
                WhatsApp Concierge <ArrowUpRight size={12} weight="bold" />
              </a>
              <a href="#">Complimentary Shipping</a>
              <a href="#">7-Day Easy Returns</a>
              <a href="#">Worldwide DHL Tracking</a>
            </div>
          </div>
        </div>

        <div className="modern-footer-bottom">
          <div className="modern-copyright">
            © {new Date().getFullYear()} Aura Studio Design Lab. All rights reserved.
          </div>
          <div className="modern-legal">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
