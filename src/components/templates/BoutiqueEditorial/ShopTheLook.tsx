import React, { useState } from 'react';
import { SHOP_THE_LOOK_ITEMS } from '../../../data/editorialData';
import { HotspotLook, SareeProduct } from '../../../types';
import { Sparkle, ArrowRight, X, Handbag } from '@phosphor-icons/react';

interface ShopTheLookProps {
  onAcquirePiece: (product: SareeProduct) => void;
}

export const ShopTheLook: React.FC<ShopTheLookProps> = ({ onAcquirePiece }) => {
  const [activeHotspot, setActiveHotspot] = useState<HotspotLook>(SHOP_THE_LOOK_ITEMS[0]);

  return (
    <section id="editorial-look" className="editorial-section shop-look-section">
      <div className="editorial-container">
        <div className="editorial-section-header">
          <span className="editorial-eyebrow">INTERACTIVE EDITORIAL</span>
          <h2 className="editorial-title">Shop The Editorial Look</h2>
          <div className="editorial-sep-line"></div>
          <p className="editorial-subhead">
            Tap the interactive pins on the muse to explore and reserve archival drapes from this shoot.
          </p>
        </div>

        <div className="shop-look-interactive-stage">
          {/* Main Visual with Hotspot Pins */}
          <div className="look-image-canvas">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
              alt="Editorial bridal model draped in heirloom silk"
              className="look-stage-img"
            />

            {/* Interactive Pins */}
            {SHOP_THE_LOOK_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`look-hotspot-pin ${activeHotspot.id === item.id ? 'is-active' : ''}`}
                style={{ top: `${item.y}%`, left: `${item.x}%` }}
                onClick={() => setActiveHotspot(item)}
                aria-label={`Inspect ${item.title}`}
              >
                <span className="pin-pulse"></span>
                <span className="pin-core">+</span>
              </button>
            ))}

            <div className="look-canvas-hint">
              <span>Tap the pins to inspect items</span>
            </div>
          </div>

          {/* Active Hotspot Piece Details Card */}
          <div className="look-detail-card">
            <div className="look-detail-badge">
              <Sparkle size={12} weight="fill" />
              <span>SELECTED ARCHIVAL PIECE</span>
            </div>

            <div className="look-thumb-preview">
              <img src={activeHotspot.image} alt={activeHotspot.title} />
            </div>

            <div className="look-fabric-tag">{activeHotspot.fabric}</div>
            <h3 className="look-item-title">{activeHotspot.title}</h3>
            <p className="look-item-sub">{activeHotspot.subtitle}</p>

            <div className="look-price-row">
              <span className="look-price-label">Atelier Valuation:</span>
              <span className="look-price-num">₹{activeHotspot.price.toLocaleString('en-IN')}</span>
            </div>

            <button
              className="look-acquire-btn"
              onClick={() =>
                onAcquirePiece({
                  id: activeHotspot.id,
                  name: activeHotspot.title,
                  fabric: 'Kanjeevaram',
                  price: activeHotspot.price,
                  description: activeHotspot.subtitle,
                  color: 'Madder & Gold',
                  image: activeHotspot.image,
                  secondaryImage: activeHotspot.image,
                  inStock: true
                })
              }
            >
              <span>Acquire Archival Piece</span>
              <ArrowRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
