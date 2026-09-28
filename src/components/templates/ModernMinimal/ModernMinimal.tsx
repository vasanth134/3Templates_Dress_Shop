import React, { useState } from 'react';
import { ModernHeader } from './ModernHeader';
import { ModernHero } from './ModernHero';
import { OccasionTabs } from './OccasionTabs';
import { NewInGrid } from './NewInGrid';
import { ModernBestSellers } from './ModernBestSellers';
import { LookbookGallery } from './LookbookGallery';
import { DrapeGuideSection } from './DrapeGuideSection';
import { ModernReviews } from './ModernReviews';
import { NewsletterDrop } from './NewsletterDrop';
import { ModernFooter } from './ModernFooter';
import { BottomTabBar } from './BottomTabBar';
import { ModernCartDrawer } from './ModernCartDrawer';
import { ImageZoomModal } from '../../common/ImageZoomModal';
import { EnquiryModal } from '../../common/EnquiryModal';
import { DrapeGuideModal } from '../../common/DrapeGuideModal';
import { SareeProduct } from '../../../types';
import './modern.css';

export const ModernMinimal: React.FC = () => {
  const [wishlist, setWishlist] = useState<string[]>(['mm-01']);
  const [cartItems, setCartItems] = useState<SareeProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeBottomTab, setActiveBottomTab] = useState<'shop' | 'wishlist' | 'cart' | 'contact'>('shop');
  const [selectedProduct, setSelectedProduct] = useState<SareeProduct | null>(null);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState<SareeProduct | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string>('All');
  const [isDrapeGuideOpen, setIsDrapeGuideOpen] = useState(false);

  const handleToggleWishlist = (product: SareeProduct) => {
    setWishlist((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleAddToCart = (product: SareeProduct) => {
    setCartItems((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSelectOccasion = (occasion: string) => {
    setSelectedOccasion(occasion);
    const el = document.getElementById('modern-new-in');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBottomTab = (tab: 'shop' | 'wishlist' | 'cart' | 'contact') => {
    setActiveBottomTab(tab);
    if (tab === 'cart') {
      setIsCartOpen(true);
    } else if (tab === 'contact') {
      setSelectedEnquiryProduct({
        id: 'stylist-chat',
        name: 'Aura Studio Stylist Consultation',
        fabric: 'Organza',
        price: 18000,
        description: 'Instant styling consultation for your upcoming event, drape recommendations, and custom blouse sizing.',
        color: 'Contemporary Silk',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
        secondaryImage: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
        inStock: true
      });
    }
  };

  return (
    <div className="modern-minimal-wrapper">
      {/* Header with Tools */}
      <ModernHeader
        wishlistCount={wishlist.length}
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => {
          const el = document.getElementById('modern-new-in');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section */}
      <ModernHero
        onShopClick={() => {
          const el = document.getElementById('modern-new-in');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onLookbookClick={() => {
          const el = document.getElementById('modern-lookbook');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Shop by Occasion */}
      <OccasionTabs
        selectedOccasion={selectedOccasion}
        onSelectOccasion={handleSelectOccasion}
      />

      {/* New In Grid with 2nd-Angle Image Swap */}
      <NewInGrid
        wishlistIds={wishlist}
        activeOccasion={selectedOccasion}
        onQuickView={(p) => setSelectedProduct(p)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Best Sellers */}
      <ModernBestSellers
        wishlistIds={wishlist}
        onQuickView={(p) => setSelectedProduct(p)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Lookbook Style Gallery */}
      <LookbookGallery
        onSelectLook={(sareeName) => {
          const el = document.getElementById('modern-new-in');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Size and Drape Guide Section */}
      <DrapeGuideSection
        onOpenInteractiveGuide={() => setIsDrapeGuideOpen(true)}
      />

      {/* Customer Reviews with Star Ratings */}
      <ModernReviews />

      {/* Newsletter Signup for New Drops */}
      <NewsletterDrop />

      {/* Footer */}
      <ModernFooter />

      {/* Mobile App Style Bottom Tab Bar */}
      <BottomTabBar
        activeTab={activeBottomTab}
        onSelectTab={handleBottomTab}
        wishlistCount={wishlist.length}
        cartCount={cartItems.length}
      />

      {/* Interactive Cart Drawer */}
      <ModernCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckoutEnquiry={() => {
          setIsCartOpen(false);
          if (cartItems.length > 0) {
            setSelectedEnquiryProduct(cartItems[0]);
          }
        }}
      />

      {/* Quick View / Zoom Modal */}
      <ImageZoomModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={(prod) => {
          setSelectedProduct(null);
          setSelectedEnquiryProduct(prod);
        }}
      />

      {/* Simple Enquiry Modal */}
      <EnquiryModal
        product={selectedEnquiryProduct}
        onClose={() => setSelectedEnquiryProduct(null)}
        brandName="Aura Studio"
      />

      {/* Interactive Drape Guide Modal */}
      {isDrapeGuideOpen && (
        <DrapeGuideModal onClose={() => setIsDrapeGuideOpen(false)} />
      )}
    </div>
  );
};
