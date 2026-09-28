import React, { useState } from 'react';
import { X, MagnifyingGlassPlus, MagnifyingGlassMinus, CheckCircle, WhatsappLogo, Phone } from '@phosphor-icons/react';
import { SareeProduct } from '../../types';

interface ImageZoomModalProps {
  product: SareeProduct | null;
  onClose: () => void;
  onEnquire: (product: SareeProduct) => void;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ product, onClose, onEnquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  if (!product) return null;

  const images = [
    product.image,
    product.secondaryImage,
    ...(product.detailImages || [])
  ].filter(Boolean);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="zoom-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="zoom-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="zoom-modal-header">
          <div>
            <span className="zoom-modal-badge">{product.fabric} Pure Silk</span>
            <h3 className="zoom-modal-title">{product.name}</h3>
          </div>
          <button className="zoom-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={22} weight="bold" />
          </button>
        </div>

        {/* Body */}
        <div className="zoom-modal-body">
          {/* Main Visual Display */}
          <div className="zoom-image-stage">
            <div
              className={`zoom-image-wrapper ${zoomLevel > 1 ? 'is-zoomed' : ''}`}
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                cursor: zoomLevel > 1 ? 'grab' : 'zoom-in'
              }}
              onClick={() => {
                if (zoomLevel === 1) setZoomLevel(2);
                else handleResetZoom();
              }}
            >
              <img
                src={images[activeImageIndex] || product.image}
                alt={product.name}
                className="zoom-image-content"
                loading="eager"
              />
            </div>

            {/* Tap/Zoom Hint Pill */}
            <div className="zoom-hint-pill">
              {zoomLevel === 1 ? 'Tap image to zoom weave details' : 'Tap to reset zoom'}
            </div>

            {/* Floating Zoom Controls */}
            <div className="zoom-floating-controls">
              <button onClick={handleZoomIn} aria-label="Zoom in" disabled={zoomLevel >= 3}>
                <MagnifyingGlassPlus size={20} weight="bold" />
              </button>
              <button onClick={handleZoomOut} aria-label="Zoom out" disabled={zoomLevel <= 1}>
                <MagnifyingGlassMinus size={20} weight="bold" />
              </button>
            </div>
          </div>

          {/* Details & Thumbnails Sidebar */}
          <div className="zoom-sidebar">
            {/* Thumbnail switcher */}
            {images.length > 1 && (
              <div className="zoom-thumbnail-strip">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`zoom-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      handleResetZoom();
                    }}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="zoom-price-row">
              <div className="zoom-price-main">₹{product.price.toLocaleString('en-IN')}</div>
              {product.originalPrice && (
                <div className="zoom-price-orig">₹{product.originalPrice.toLocaleString('en-IN')}</div>
              )}
            </div>

            <p className="zoom-product-desc">{product.description}</p>

            {/* Authenticity specs */}
            <div className="zoom-specs-list">
              {product.zariType && (
                <div className="zoom-spec-item">
                  <span className="spec-label">Zari Purity:</span>
                  <span className="spec-val">{product.zariType}</span>
                </div>
              )}
              {product.weaveTime && (
                <div className="zoom-spec-item">
                  <span className="spec-label">Handloom Time:</span>
                  <span className="spec-val">{product.weaveTime}</span>
                </div>
              )}
              {product.origin && (
                <div className="zoom-spec-item">
                  <span className="spec-label">Origin:</span>
                  <span className="spec-val">{product.origin}</span>
                </div>
              )}
              <div className="zoom-spec-item">
                <span className="spec-label">Certification:</span>
                <span className="spec-val spec-verified">
                  <CheckCircle size={15} weight="fill" /> Silk Mark Certified
                </span>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="zoom-actions">
              <button
                className="zoom-btn-enquire"
                onClick={() => {
                  onClose();
                  onEnquire(product);
                }}
              >
                <WhatsappLogo size={20} weight="fill" />
                Enquire to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
