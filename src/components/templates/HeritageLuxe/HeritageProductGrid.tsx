import React, { useState } from 'react';
import { HERITAGE_PRODUCTS } from '../../../data/heritageData';
import { SareeProduct } from '../../../types';
import { MagnifyingGlassPlus, WhatsappLogo, CheckCircle, Funnel } from '@phosphor-icons/react';

interface HeritageProductGridProps {
  onZoomProduct: (product: SareeProduct) => void;
  onEnquireProduct: (product: SareeProduct) => void;
  activeFilter?: string;
}

export const HeritageProductGrid: React.FC<HeritageProductGridProps> = ({
  onZoomProduct,
  onEnquireProduct,
  activeFilter: initialFilter = 'All'
}) => {
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  const filters = ['All', 'Kanjeevaram', 'Banarasi', 'Mysore Silk', 'Cotton Silk'];

  const filteredProducts = selectedFilter === 'All'
    ? HERITAGE_PRODUCTS
    : HERITAGE_PRODUCTS.filter((p) => p.fabric === selectedFilter);

  return (
    <section id="heritage-products" className="heritage-section products-section">
      <div className="heritage-container">
        <div className="heritage-section-header">
          <span className="heritage-eyebrow">CURATED ATELIER REPERTORY</span>
          <h2 className="heritage-section-title">Heirloom Silk Saree Collection</h2>
          <div className="heritage-gold-rule"></div>
          <p className="heritage-section-desc">
            Tap on any drape to inspect the microscopic zari weave, Korvai temple border, and pallu craftsmanship.
          </p>
        </div>

        {/* Filter Pills with gold accents */}
        <div className="heritage-filter-bar">
          <div className="filter-pill-scroll">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`heritage-filter-pill ${selectedFilter === filter ? 'is-active' : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Product Grid */}
        <div className="heritage-product-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="heritage-prod-card">
              {/* Product Media with mobile zoom-on-tap */}
              <div
                className="prod-card-media"
                onClick={() => onZoomProduct(product)}
                role="button"
                tabIndex={0}
                aria-label={`Zoom into ${product.name}`}
              >
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="prod-badge-stack">
                  {product.tag && <span className="prod-tag-pill">{product.tag}</span>}
                  <span className="prod-certified-pill">
                    <CheckCircle size={12} weight="fill" /> Silk Mark
                  </span>
                </div>

                {/* Mobile & Desktop Hover/Tap Zoom CTA Overlay */}
                <div className="prod-zoom-overlay">
                  <div className="zoom-btn-pill">
                    <MagnifyingGlassPlus size={16} weight="bold" />
                    <span>Tap to Zoom Weave</span>
                  </div>
                </div>
              </div>

              {/* Card Meta & Simple Enquiry CTA */}
              <div className="prod-card-body">
                <div className="prod-fabric-origin">
                  <span>{product.fabric} Silk</span>
                  {product.origin && <span> • {product.origin}</span>}
                </div>

                <h3 className="prod-name" onClick={() => onZoomProduct(product)}>
                  {product.name}
                </h3>

                <p className="prod-card-snippet">{product.description}</p>

                <div className="prod-card-bottom">
                  <div className="prod-price-box">
                    <span className="prod-price-val">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="prod-price-struck">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>

                  <button
                    className="prod-enquire-btn"
                    onClick={() => onEnquireProduct(product)}
                    aria-label={`Enquire about ${product.name}`}
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
