import React from 'react';
import { X, Trash, ArrowRight, ShieldCheck, WhatsappLogo } from '@phosphor-icons/react';
import { SareeProduct } from '../../../types';

interface ModernCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: SareeProduct[];
  onRemoveItem: (id: string) => void;
  onCheckoutEnquiry: () => void;
}

export const ModernCartDrawer: React.FC<ModernCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onCheckoutEnquiry
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="modern-drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modern-drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-panel-header">
          <div>
            <h3 className="drawer-panel-title">Shopping Bag ({items.length})</h3>
            <span className="drawer-panel-sub">Complimentary Insured Shipping</span>
          </div>
          <button className="drawer-panel-close" onClick={onClose} aria-label="Close cart">
            <X size={20} weight="bold" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-empty-state">
            <p className="empty-message">Your shopping bag is empty.</p>
            <button className="empty-action-btn" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="drawer-body">
            <div className="drawer-items-list">
              {items.map((item) => (
                <div key={item.id} className="drawer-item-row">
                  <img src={item.image} alt={item.name} className="drawer-item-thumb" />
                  <div className="drawer-item-info">
                    <span className="drawer-item-fabric">{item.fabric} Silk</span>
                    <h4 className="drawer-item-name">{item.name}</h4>
                    <span className="drawer-item-price">₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    className="drawer-item-remove"
                    onClick={() => onRemoveItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash size={18} weight="regular" />
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer-footer-actions">
              <div className="drawer-subtotal-row">
                <span>Estimated Subtotal</span>
                <strong>₹{total.toLocaleString('en-IN')}</strong>
              </div>

              <div className="drawer-free-shipping">
                <ShieldCheck size={16} weight="fill" />
                <span>Express DHL / Blue Dart Delivery Included</span>
              </div>

              <button className="drawer-checkout-btn" onClick={onCheckoutEnquiry}>
                <span>Proceed to Boutique Order</span>
                <ArrowRight size={18} weight="bold" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
