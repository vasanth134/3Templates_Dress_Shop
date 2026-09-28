import React, { useState } from 'react';
import { X, WhatsappLogo, CheckCircle, PaperPlaneRight, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import { SareeProduct } from '../../types';

interface EnquiryModalProps {
  product: SareeProduct | null;
  onClose: () => void;
  brandName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  product,
  onClose,
  brandName = 'Aura Silks'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    eventDate: '',
    customNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ${brandName}, I am interested in inquiring about "${product.name}" (${product.fabric}, ₹${product.price.toLocaleString('en-IN')}). Could you please share more drape details and availability?`
    );
    window.open(`https://wa.me/919840012345?text=${text}`, '_blank');
  };

  return (
    <div className="enquiry-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="enquiry-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="enquiry-close-btn" onClick={onClose} aria-label="Close enquiry form">
          <X size={20} weight="bold" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="enquiry-header">
              <span className="enquiry-pill">
                <Sparkle size={14} weight="fill" /> Boutique Consultation
              </span>
              <h3 className="enquiry-title">Enquire About This Saree</h3>
              <p className="enquiry-subtitle">
                Each handloom drape is exclusive and woven in limited editions. Speak directly with our master drapers.
              </p>
            </div>

            {/* Selected Product Summary Card */}
            <div className="enquiry-product-card">
              <img src={product.image} alt={product.name} className="enquiry-product-img" />
              <div className="enquiry-product-info">
                <span className="enquiry-fabric-tag">{product.fabric} Silk</span>
                <h4 className="enquiry-product-name">{product.name}</h4>
                <div className="enquiry-price-tag">₹{product.price.toLocaleString('en-IN')}</div>
              </div>
            </div>

            {/* Direct Instant WhatsApp Option */}
            <button className="enquiry-whatsapp-btn" onClick={handleWhatsAppDirect} type="button">
              <WhatsappLogo size={22} weight="fill" />
              <span>Instant Enquiry via WhatsApp</span>
            </button>

            <div className="enquiry-divider">
              <span>OR SUBMIT DETAILS BELOW</span>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="enquiry-form-group">
                <label htmlFor="enq-name">Your Full Name *</label>
                <input
                  id="enq-name"
                  type="text"
                  required
                  placeholder="e.g. Radhika Sundaram"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="enquiry-form-row">
                <div className="enquiry-form-group">
                  <label htmlFor="enq-phone">Phone / WhatsApp Number *</label>
                  <input
                    id="enq-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="enquiry-form-group">
                  <label htmlFor="enq-city">City / Country</label>
                  <input
                    id="enq-city"
                    type="text"
                    placeholder="e.g. Chennai, London, US"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="enquiry-form-group">
                <label htmlFor="enq-notes">Any specific questions, matching blouse or occasion details?</label>
                <textarea
                  id="enq-notes"
                  rows={2}
                  placeholder="e.g., Needed for sister's wedding on Dec 12th. Looking for unstitched matching blouse."
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                />
              </div>

              <div className="enquiry-trust-badge">
                <ShieldCheck size={16} weight="fill" />
                <span>100% Genuine Silk Mark Certified. We ship worldwide.</span>
              </div>

              <button type="submit" className="enquiry-submit-btn">
                <span>Send Enquiry to Boutique</span>
                <PaperPlaneRight size={18} weight="bold" />
              </button>
            </form>
          </>
        ) : (
          <div className="enquiry-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={54} weight="fill" />
            </div>
            <h3 className="success-title">Enquiry Received</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Our senior boutique stylist will contact you on{' '}
              <strong>{formData.phone}</strong> within 2 hours with detailed high-res drape videos and pricing consultation.
            </p>
            <div className="success-product-recap">
              <span>Saree: {product.name}</span>
              <span>Fabric: {product.fabric}</span>
            </div>
            <button className="success-close-btn" onClick={onClose}>
              Back to Boutique
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
