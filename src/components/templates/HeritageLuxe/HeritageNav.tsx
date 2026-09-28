import React, { useState } from 'react';
import { List, X, WhatsappLogo, PhoneCall, Sparkle, ShieldCheck, MapPin } from '@phosphor-icons/react';

interface HeritageNavProps {
  onOpenEnquiry: () => void;
}

export const HeritageNav: React.FC<HeritageNavProps> = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Shop By Fabric', href: '#heritage-fabrics' },
    { label: 'New Arrivals', href: '#heritage-arrivals' },
    { label: 'Bridal & Festive', href: '#heritage-bridal' },
    { label: 'Our Craftsmanship', href: '#heritage-story' },
    { label: 'Silk Catalogue', href: '#heritage-products' },
    { label: 'Boutique Story', href: '#heritage-testimonials' }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Heritage Announcement Ribbon */}
      <div className="heritage-top-ribbon">
        <div className="ribbon-content">
          <span>
            <Sparkle size={13} weight="fill" /> 100% Certified Pure Silk Mark & Pure Gold Zari
          </span>
          <span className="ribbon-sep">•</span>
          <span>Worldwide Express Insured Shipping</span>
          <span className="ribbon-sep">•</span>
          <span>Flagship Boutique: Poes Garden, Chennai</span>
        </div>
      </div>

      <header className="heritage-header">
        <div className="heritage-header-container">
          {/* Mobile Hamburger Button with large tap target */}
          <button
            className="heritage-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>

          {/* Luxury Brand Logo with Gold Accent */}
          <div className="heritage-logo-area">
            <span className="heritage-logo-pre">ESTD. 1984 • KANCHIPURAM</span>
            <h1 className="heritage-brand-name">
              <span className="gold-text-glow">AURA SILKS</span>
            </h1>
            <span className="heritage-logo-sub">HERITAGE HANDLOOM ATELIER</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="heritage-desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="heritage-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Consultation CTA */}
          <div className="heritage-header-actions">
            <button className="heritage-consult-btn" onClick={onOpenEnquiry}>
              <Sparkle size={15} weight="fill" />
              <span>Boutique Enquiry</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="heritage-mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-header">
            <div className="drawer-brand">
              <span className="drawer-title">AURA SILKS</span>
              <span className="drawer-sub">Heritage Handloom Boutique</span>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={28} weight="bold" />
            </button>
          </div>

          <div className="mobile-drawer-content">
            <nav className="drawer-links-list">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="drawer-link-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  <span className="drawer-link-idx">0{idx + 1}</span>
                  <span className="drawer-link-text">{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="drawer-footer">
              <div className="drawer-contact-card">
                <div className="drawer-contact-title">Direct Boutique Line</div>
                <div className="drawer-buttons-row">
                  <a href="https://wa.me/919840012345" target="_blank" rel="noreferrer" className="drawer-wa-btn">
                    <WhatsappLogo size={20} weight="fill" />
                    <span>WhatsApp Stylist</span>
                  </a>
                  <a href="tel:+919840012345" className="drawer-call-btn">
                    <PhoneCall size={20} weight="fill" />
                    <span>Call To Order</span>
                  </a>
                </div>
              </div>

              <div className="drawer-location">
                <MapPin size={16} weight="fill" />
                <span>No. 14, Bishop Garden, Poes Garden, Chennai</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
