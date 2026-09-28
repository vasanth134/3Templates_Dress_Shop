import React from 'react';
import { Storefront, Heart, Bag, ChatTeardropDots } from '@phosphor-icons/react';

interface BottomTabBarProps {
  activeTab: 'shop' | 'wishlist' | 'cart' | 'contact';
  onSelectTab: (tab: 'shop' | 'wishlist' | 'cart' | 'contact') => void;
  wishlistCount: number;
  cartCount: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onSelectTab,
  wishlistCount,
  cartCount
}) => {
  return (
    <nav className="modern-bottom-tab-bar" aria-label="Mobile Bottom App Navigation">
      <div className="tab-bar-inner">
        {/* Shop Tab */}
        <button
          className={`tab-bar-item ${activeTab === 'shop' ? 'is-active' : ''}`}
          onClick={() => {
            onSelectTab('shop');
            const el = document.getElementById('modern-new-in');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Shop sarees"
        >
          <div className="tab-icon-holder">
            <Storefront size={22} weight={activeTab === 'shop' ? 'fill' : 'regular'} />
          </div>
          <span className="tab-label">Shop</span>
        </button>

        {/* Wishlist Tab */}
        <button
          className={`tab-bar-item ${activeTab === 'wishlist' ? 'is-active' : ''}`}
          onClick={() => onSelectTab('wishlist')}
          aria-label={`Wishlist (${wishlistCount})`}
        >
          <div className="tab-icon-holder">
            <Heart size={22} weight={activeTab === 'wishlist' ? 'fill' : 'regular'} />
            {wishlistCount > 0 && <span className="tab-badge">{wishlistCount}</span>}
          </div>
          <span className="tab-label">Wishlist</span>
        </button>

        {/* Cart Tab */}
        <button
          className={`tab-bar-item ${activeTab === 'cart' ? 'is-active' : ''}`}
          onClick={() => onSelectTab('cart')}
          aria-label={`Cart (${cartCount})`}
        >
          <div className="tab-icon-holder">
            <Bag size={22} weight={activeTab === 'cart' ? 'fill' : 'bold'} />
            {cartCount > 0 && <span className="tab-badge cart-accent">{cartCount}</span>}
          </div>
          <span className="tab-label">Bag</span>
        </button>

        {/* Contact / WhatsApp Tab */}
        <button
          className={`tab-bar-item ${activeTab === 'contact' ? 'is-active' : ''}`}
          onClick={() => onSelectTab('contact')}
          aria-label="Stylist Chat"
        >
          <div className="tab-icon-holder">
            <ChatTeardropDots size={22} weight={activeTab === 'contact' ? 'fill' : 'regular'} />
          </div>
          <span className="tab-label">Stylist</span>
        </button>
      </div>
    </nav>
  );
};
