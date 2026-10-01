import React, { useState } from 'react';
import { MagnifyingGlass, Heart, Bag, List, X, ArrowRight, ChatTeardropDots } from '@phosphor-icons/react';

interface ModernHeaderProps {
  wishlistCount: number;
  cartCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  wishlistCount,
  cartCount,
  onOpenCart,
  onOpenWishlist
}) => {
  const [activeNav, setActiveNav] = useState('New In');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['New In', 'Occasions', 'Best Sellers', 'Lookbook', 'Drape Guide'];

  return (
    <>
      {/* Sleek Announcement Strip */}
      <div className="modern-ticker">
        <span>NEW DROP: THE SAGE MINERAL SILK COLLECTION • COMPLIMENTARY EXPRESS SHIPPING ACROSS INDIA</span>
      </div>

      <header className="modern-header">
        <div className="modern-header-container">
          <div className="modern-header-left">
            {/* Mobile Menu Toggle Button */}
            <button
              className="modern-mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
            </button>

            {/* Brand Logo */}
            <div
              className="modern-brand-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="modern-logo-text">AURA</span>
              <span className="modern-logo-sub">STUDIO</span>
            </div>
          </div>

          {/* Desktop Clean Sans Nav */}
          <nav className="modern-nav-links" aria-label="Desktop Navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#modern-${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`modern-nav-link ${activeNav === item ? 'is-active' : ''}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Utility Action Icons */}
          <div className="modern-header-tools">
            <button className="modern-tool-btn modern-search-btn" aria-label="Search collection">
              <MagnifyingGlass size={20} weight="regular" />
            </button>

            <button
              className="modern-tool-btn modern-badge-wrap"
              onClick={onOpenWishlist}
              aria-label={`Wishlist (${wishlistCount})`}
            >
              <Heart size={20} weight="regular" />
              {wishlistCount > 0 && <span className="modern-counter">{wishlistCount}</span>}
            </button>

            <button
              className="modern-tool-btn modern-badge-wrap"
              onClick={onOpenCart}
              aria-label={`Cart (${cartCount})`}
            >
              <Bag size={20} weight="bold" />
              {cartCount > 0 && <span className="modern-counter">{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="modern-mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            role="dialog"
            aria-modal="true"
          >
            <div className="modern-mobile-drawer" onClick={(e) => e.stopPropagation()}>
              <div className="modern-mobile-drawer-header">
                <div className="modern-brand-logo">
                  <span className="modern-logo-text">AURA</span>
                  <span className="modern-logo-sub">STUDIO</span>
                </div>
                <button
                  className="modern-mobile-drawer-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              <nav className="modern-mobile-nav-list" aria-label="Mobile Navigation">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#modern-${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`modern-mobile-nav-item ${activeNav === item ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveNav(item);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <span>{item}</span>
                    <ArrowRight size={16} weight="bold" className="mobile-nav-arrow" />
                  </a>
                ))}
              </nav>

              <div className="modern-mobile-drawer-footer">
                <div className="drawer-contact-card">
                  <span className="drawer-contact-title">Need Styling Advice?</span>
                  <p className="drawer-contact-desc">
                    Connect directly with our senior saree stylist on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20AURA%20Studio%20Stylist%2C%20I%20would%20like%20assistance%20with%20your%20saree%20collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-drawer-wa-btn"
                  >
                    <ChatTeardropDots size={18} weight="fill" />
                    <span>Chat with Stylist</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
