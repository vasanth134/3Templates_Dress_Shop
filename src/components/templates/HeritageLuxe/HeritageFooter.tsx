import React from 'react';
import { MapPin, Phone, Envelope, Sparkle, ShieldCheck } from '@phosphor-icons/react';

export const HeritageFooter: React.FC = () => {
  return (
    <footer className="heritage-footer">
      <div className="heritage-container">
        <div className="footer-top-grid">
          <div className="footer-brand-col">
            <span className="footer-sub">ESTD. 1984 • KANCHIPURAM</span>
            <h3 className="footer-brand-title">AURA SILKS</h3>
            <p className="footer-desc">
              Heirloom Kanjeevaram and Banarasi handlooms crafted with generational fidelity, certified mulberry silk, and authentic precious zari.
            </p>
            <div className="footer-silk-mark">
              <ShieldCheck size={20} weight="fill" />
              <span>Registered Central Silk Board Member • Silk Mark India #SM-84910</span>
            </div>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Artisanal Weaves</h4>
            <ul className="footer-links-list">
              <li><a href="#heritage-fabrics">Kanjeevaram Korvai Silks</a></li>
              <li><a href="#heritage-fabrics">Varanasi Kadwa Brocades</a></li>
              <li><a href="#heritage-fabrics">Mysore Crepe & Georgette</a></li>
              <li><a href="#heritage-fabrics">Handspun Chanderi Silk</a></li>
              <li><a href="#heritage-bridal">Bridal Muhurtham Trousseau</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-col-title">Boutique Services</h4>
            <ul className="footer-links-list">
              <li><a href="#heritage-story">Our 40-Year Heritage</a></li>
              <li><a href="#heritage-arrivals">Private Video Call Preview</a></li>
              <li><a href="#heritage-testimonials">Worldwide Express Delivery</a></li>
              <li><a href="#heritage-products">Custom Blouse Weaving</a></li>
              <li><a href="https://wa.me/919840012345" target="_blank" rel="noreferrer">Speak to Senior Draper</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-col-title">Flagship Boutique</h4>
            <div className="footer-address">
              <MapPin size={18} weight="fill" className="footer-icon" />
              <span>No. 14, Bishop Garden, Poes Garden, Chennai - 600086</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} weight="fill" className="footer-icon" />
              <span>+91 98400 12345 / 044 2499 8800</span>
            </div>
            <div className="footer-contact-item">
              <Envelope size={18} weight="fill" className="footer-icon" />
              <span>concierge@aurasilks.com</span>
            </div>
            <div className="footer-timings">
              <strong>Boutique Hours:</strong> Mon - Sun: 10:30 AM – 8:30 PM
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-bottom-copy">
            © {new Date().getFullYear()} Aura Silks Atelier. All rights reserved. Handcrafted with reverence for Indian weaving heritage.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Silk Care Guide</a>
            <span>•</span>
            <a href="#">GI Tag Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
