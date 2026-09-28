import React, { useRef } from 'react';
import { HERITAGE_PRODUCTS } from '../../../data/heritageData';
import { SareeProduct } from '../../../types';
import { CaretLeft, CaretRight, MagnifyingGlassPlus, WhatsappLogo, Sparkle } from '@phosphor-icons/react';

interface NewArrivalsCarouselProps {
  onZoomProduct: (product: SareeProduct) => void;
  onEnquireProduct: (product: SareeProduct) => void;
}

export const NewArrivalsCarousel: React.FC<NewArrivalsCarouselProps> = ({
  onZoomProduct,
  onEnquireProduct
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const newArrivals = HERITAGE_PRODUCTS.filter((p) => p.isNewArrival);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="heritage-arrivals" className="heritage-section arrivals-section">
      <div className="heritage-container">
        <div className="arrivals-header-row">
          <div>
            <span className="heritage-eyebrow">JUST OFF THE LOOM</span>
            <h2 className="heritage-section-title">New Arrivals Collection</h2>
            <div className="heritage-gold-rule"></div>
          </div>

          {/* Carousel Desktop/Tablet Controls */}
          <div className="carousel-nav-controls">
            <button
              className="carousel-control-btn"
              onClick={() => scroll('left')}
              aria-label="Previous arrivals"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              className="carousel-control-btn"
              onClick={() => scroll('right')}
              aria-label="Next arrivals"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>

        {/* Scrollable / Swipable Carousel Track */}
        <div className="arrivals-carousel-track" ref={carouselRef}>
          {newArrivals.map((product) => (
            <div key={product.id} className="arrival-card">
              {/* Product Media with Zoom On Tap badge */}
              <div
                className="arrival-media-wrap"
                onClick={() => onZoomProduct(product)}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${product.name} weave details`}
              >
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="arrival-silk-badge">
                  <Sparkle size={12} weight="fill" /> Pure Silk
                </span>
                {product.tag && <span className="arrival-status-tag">{product.tag}</span>}

                <div className="arrival-zoom-cta">
                  <MagnifyingGlassPlus size={16} weight="bold" />
                  <span>Tap to inspect weave</span>
                </div>
              </div>

              {/* Card Meta & Actions */}
              <div className="arrival-info">
                <div className="arrival-fabric-type">{product.fabric} Silk</div>
                <h3 className="arrival-title" onClick={() => onZoomProduct(product)}>
                  {product.name}
                </h3>

                <div className="arrival-specs-pill">
                  <span>{product.zariType || 'Tested Pure Zari'}</span>
                </div>

                <div className="arrival-price-row">
                  <div className="arrival-prices">
                    <span className="arrival-price">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                      <span className="arrival-orig-price">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                  <button
                    className="arrival-enquire-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquireProduct(product);
                    }}
                    title="Enquire on WhatsApp"
                  >
                    <WhatsappLogo size={18} weight="fill" />
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
