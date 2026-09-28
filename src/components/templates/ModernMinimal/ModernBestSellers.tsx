import React from 'react';
import { MODERN_PRODUCTS } from '../../../data/modernData';
import { ProductCardModern } from './ProductCardModern';
import { SareeProduct } from '../../../types';
import { Fire } from '@phosphor-icons/react';

interface ModernBestSellersProps {
  onQuickView: (product: SareeProduct) => void;
  onToggleWishlist: (product: SareeProduct) => void;
  onAddToCart: (product: SareeProduct) => void;
  wishlistIds: string[];
}

export const ModernBestSellers: React.FC<ModernBestSellersProps> = ({
  onQuickView,
  onToggleWishlist,
  onAddToCart,
  wishlistIds
}) => {
  const bestSellers = MODERN_PRODUCTS.filter((p) => p.isBestSeller).slice(0, 3);

  return (
    <section id="modern-best-sellers" className="modern-section best-sellers-section">
      <div className="modern-container">
        <div className="best-sellers-header">
          <div className="bestseller-badge">
            <Fire size={16} weight="fill" />
            <span>MOST LOVED SILHOUETTES</span>
          </div>
          <h2 className="modern-section-title">The Best Sellers Edit</h2>
          <p className="modern-section-desc">
            Restocked 3 times this month. Loved for their zero-crease fabric and breathable drape.
          </p>
        </div>

        <div className="modern-grid-layout">
          {bestSellers.map((product) => (
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
