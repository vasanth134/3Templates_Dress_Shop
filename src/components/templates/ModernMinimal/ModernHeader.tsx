import React, { useState } from 'react';
import { MagnifyingGlass, Heart, Bag, User, Sparkle } from '@phosphor-icons/react';

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

  const navItems = ['New In', 'Occasions', 'Best Sellers', 'Lookbook', 'Drape Guide'];

  return (
    <>
      {/* Sleek Announcement Strip */}
      <div className="modern-ticker">
        <span>NEW DROP: THE SAGE MINERAL SILK COLLECTION • COMPLIMENTARY EXPRESS SHIPPING ACROSS INDIA</span>
      </div>

      <header className="modern-header">
        <div className="modern-header-container">
          {/* Brand Logo */}
          <div className="modern-brand-logo">
            <span className="modern-logo-text">AURA</span>
            <span className="modern-logo-sub">STUDIO</span>
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
            <button className="modern-tool-btn" aria-label="Search collection">
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
      </header>
    </>
  );
};
