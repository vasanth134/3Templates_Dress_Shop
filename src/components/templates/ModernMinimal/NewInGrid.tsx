import React, { useState } from 'react';
import { MODERN_PRODUCTS } from '../../../data/modernData';
import { ProductCardModern } from './ProductCardModern';
import { SareeProduct } from '../../../types';

interface NewInGridProps {
  onQuickView: (product: SareeProduct) => void;
  onToggleWishlist: (product: SareeProduct) => void;
  onAddToCart: (product: SareeProduct) => void;
  wishlistIds: string[];
  activeOccasion?: string;
}

export const NewInGrid: React.FC<NewInGridProps> = ({
  onQuickView,
  onToggleWishlist,
  onAddToCart,
  wishlistIds,
  activeOccasion = 'All'
}) => {
  const [filter, setFilter] = useState(activeOccasion);

  const filterOptions = ['All', 'Wedding', 'Festive', 'Office Wear', 'Casual'];

  const displayedProducts = filter === 'All'
    ? MODERN_PRODUCTS
    : MODERN_PRODUCTS.filter((p) => p.occasion === filter);

  return (
    <section id="modern-new-in" className="modern-section new-in-section">
      <div className="modern-container">
        <div className="modern-section-header">
          <span className="modern-section-pill">LATEST ARRIVALS</span>
          <h2 className="modern-section-title">New In This Week</h2>
          <p className="modern-section-desc">
            Hover or tap any card to view the pallu angle and fabric weight in motion.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="modern-filter-tabs">
          {filterOptions.map((f) => (
            <button
              key={f}
              className={`modern-filter-btn ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="modern-grid-layout">
          {displayedProducts.map((product) => (
            <ProductCardModern
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              isWishlisted={wishlistIds.includes(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
