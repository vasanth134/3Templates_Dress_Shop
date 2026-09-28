import React from 'react';
import { CalendarCheck, Sparkle } from '@phosphor-icons/react';

interface EditorialHeaderProps {
  onBookSalon: () => void;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({ onBookSalon }) => {
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
          {/* Masthead Left: Magazine Navigation */}
          <nav className="editorial-nav" aria-label="Editorial Table of Contents">
            <a href="#editorial-story">The Story</a>
            <a href="#editorial-curations">Curations</a>
            <a href="#editorial-artisans">Artisans</a>
            <a href="#editorial-look">Shop The Look</a>
          </nav>

          {/* Center Brand Identity */}
          <div className="editorial-brand-center">
            <span className="editorial-brand-prefix">ATELIER & ARCHIVE</span>
            <h1 className="editorial-brand-name">AURA</h1>
            <span className="editorial-brand-suffix">MAISON DES SOIES</span>
          </div>

          {/* Right Action: Private Salon Appointment */}
          <div className="editorial-header-right">
            <button className="editorial-salon-btn" onClick={onBookSalon}>
              <CalendarCheck size={16} weight="bold" />
              <span>Book Salon Visit</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
