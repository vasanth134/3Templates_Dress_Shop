import React, { useState } from 'react';
import { SareeProduct } from '../../../types';
import { Heart, Bag, Eye, Sparkle } from '@phosphor-icons/react';

interface ProductCardModernProps {
  product: SareeProduct;
  onQuickView: (product: SareeProduct) => void;
  onToggleWishlist: (product: SareeProduct) => void;
  onAddToCart: (product: SareeProduct) => void;
  isWishlisted?: boolean;
}

export const ProductCardModern: React.FC<ProductCardModernProps> = ({
  product,
  onQuickView,
  onToggleWishlist,
  onAddToCart,
  isWishlisted = false
}) => {
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <article
      className="modern-product-card"
      onMouseEnter={() => setIsSwapped(true)}
      onMouseLeave={() => setIsSwapped(false)}
    >
      {/* Product Image Stage with hover/tap angle swap */}
      <div
        className="modern-card-stage"
        onClick={() => setIsSwapped(!isSwapped)}
        role="button"
        tabIndex={0}
        aria-label={`View angle of ${product.name}`}
      >
        <img
          src={isSwapped ? product.secondaryImage : product.image}
          alt={product.name}
          className="modern-card-img"
          loading="lazy"
        />

        {/* Angle indicator pill */}
        <div className="modern-angle-pill">
          <span className="angle-pill-desktop">{isSwapped ? 'Pallu Angle' : 'Front Drape (Tap)'}</span>
          <span className="angle-pill-mobile">{isSwapped ? 'Pallu' : 'Front'}</span>
        </div>

        {/* Top Badges */}
        <div className="modern-card-badges">
          {product.tag && <span className="modern-status-badge">{product.tag}</span>}
          {product.originalPrice && <span className="modern-sale-badge">SALE</span>}
        </div>

        {/* Wishlist Button */}
        <button
          className={`modern-card-wish-btn ${isWishlisted ? 'is-active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label="Add to wishlist"
        >
          <Heart size={18} weight={isWishlisted ? 'fill' : 'regular'} />
        </button>

        {/* Quick View Button on Card */}
        <button
          className="modern-quick-view-btn"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          aria-label={`Quick view ${product.name}`}
        >
          <Eye size={16} weight="bold" />
          <span className="quick-view-text">Quick View</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="modern-card-info">
        <div className="modern-card-meta">
          <span className="modern-card-fabric">{product.fabric} Silk</span>
          {product.occasion && <span className="modern-card-occ">{product.occasion}</span>}
        </div>

        <h3 className="modern-card-title" onClick={() => onQuickView(product)}>
          {product.name}
        </h3>

        <div className="modern-card-price-row">
          <div className="modern-card-prices">
            <span className="modern-price">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice && (
              <span className="modern-orig-price">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            className="modern-add-btn"
            onClick={() => onAddToCart(product)}
            title="Add to shopping bag"
            aria-label={`Add ${product.name} to shopping bag`}
          >
            <Bag size={16} weight="bold" />
            <span className="add-btn-text">Add</span>
          </button>
        </div>
      </div>
    </article>
  );
};
