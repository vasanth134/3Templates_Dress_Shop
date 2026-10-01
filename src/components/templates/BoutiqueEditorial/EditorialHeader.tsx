import React, { useState } from 'react';
import { CalendarCheck, List, X, ArrowRight, Phone } from '@phosphor-icons/react';

interface EditorialHeaderProps {
  onBookSalon: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({ onBookSalon }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="editorial-issue-masthead">
        <div className="masthead-container">
          <span className="masthead-issue">ÉDITION NO. 14 / AUTUMN-WINTER 2026</span>
          <span className="masthead-sep">•</span>
          <span className="masthead-theme">THE HANDLOOM ANTHOLOGY</span>
          <span className="masthead-sep">•</span>
          <span className="masthead-loc">CHENNAI • VARANASI • LONDON</span>
        </div>
      </div>

      <header className="editorial-header">
        <div className="editorial-header-inner">
          {/* Mobile Menu Toggle Button */}
          <button
            className="editorial-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close table of contents' : 'Open table of contents'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
          </button>

          {/* Masthead Left: Magazine Navigation (Desktop) */}
          <nav className="editorial-nav" aria-label="Editorial Table of Contents">
            <a href="#editorial-story">The Story</a>
            <a href="#editorial-curations">Curations</a>
            <a href="#editorial-artisans">Artisans</a>
            <a href="#editorial-look">Shop The Look</a>
          </nav>

          {/* Center Brand Identity */}
          <div
            className="editorial-brand-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="editorial-brand-prefix">ATELIER & ARCHIVE</span>
            <h1 className="editorial-brand-name">AURA</h1>
            <span className="editorial-brand-suffix">MAISON DES SOIES</span>
          </div>

          {/* Right Action: Private Salon Appointment */}
          <div className="editorial-header-right">
            <button className="editorial-salon-btn" onClick={onBookSalon}>
              <CalendarCheck size={16} weight="bold" />
              <span className="salon-btn-text">Book Salon Visit</span>
              <span className="salon-btn-mobile">Salon</span>
            </button>
          </div>
        </div>

        {/* Mobile Editorial Table of Contents Drawer */}
        {mobileMenuOpen && (
          <div
            className="editorial-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="editorial-drawer-panel" onClick={(e) => e.stopPropagation()}>
              <div className="editorial-drawer-header">
                <div>
                  <span className="editorial-drawer-edition">ÉDITION NO. 14</span>
                  <div className="editorial-drawer-brand">AURA</div>
                  <span className="editorial-drawer-sub">TABLE OF CONTENTS</span>
                </div>
                <button
                  className="editorial-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} weight="light" />
                </button>
              </div>

              <nav className="editorial-drawer-nav" aria-label="Mobile Navigation">
                <a
                  href="#editorial-story"
                  className="editorial-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="drawer-num">01</span>
                  <span className="drawer-name">The Story of the Season</span>
                  <ArrowRight size={14} className="drawer-arrow" />
                </a>
                <a
                  href="#editorial-curations"
                  className="editorial-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="drawer-num">02</span>
                  <span className="drawer-name">Curated Chapters</span>
                  <ArrowRight size={14} className="drawer-arrow" />
                </a>
                <a
                  href="#editorial-artisans"
                  className="editorial-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="drawer-num">03</span>
                  <span className="drawer-name">Artisan Weavers</span>
                  <ArrowRight size={14} className="drawer-arrow" />
                </a>
                <a
                  href="#editorial-look"
                  className="editorial-drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="drawer-num">04</span>
                  <span className="drawer-name">Shop The Look</span>
                  <ArrowRight size={14} className="drawer-arrow" />
                </a>
                <a
                  href="#editorial-booking"
                  className="editorial-drawer-link"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookSalon();
                  }}
                >
                  <span className="drawer-num">05</span>
                  <span className="drawer-name">Reserve Salon Viewing</span>
                  <ArrowRight size={14} className="drawer-arrow" />
                </a>
              </nav>

              <div className="editorial-drawer-footer">
                <span className="editorial-drawer-city">CHENNAI • VARANASI • LONDON</span>
                <a href="tel:+919840012345" className="editorial-drawer-tel">
                  <Phone size={14} weight="fill" />
                  <span>Concierge Desk: +91 98400 12345</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
