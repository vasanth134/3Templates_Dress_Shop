import React, { useState } from 'react';
import { HeritageNav } from './HeritageNav';
import { HeritageHero } from './HeritageHero';
import { FabricCategories } from './FabricCategories';
import { NewArrivalsCarousel } from './NewArrivalsCarousel';
import { BridalBanner } from './BridalBanner';
import { HeritageStory } from './HeritageStory';
import { HeritageProductGrid } from './HeritageProductGrid';
import { HeritageTestimonials } from './HeritageTestimonials';
import { HeritageInstagram } from './HeritageInstagram';
import { StickyContactBar } from './StickyContactBar';
import { HeritageFooter } from './HeritageFooter';
import { ImageZoomModal } from '../../common/ImageZoomModal';
import { EnquiryModal } from '../../common/EnquiryModal';
import { SareeProduct } from '../../../types';
import './heritage.css';

export const HeritageLuxe: React.FC = () => {
  const [selectedZoomProduct, setSelectedZoomProduct] = useState<SareeProduct | null>(null);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState<SareeProduct | null>(null);
  const [activeFabricFilter, setActiveFabricFilter] = useState('All');

  const handleSelectFabric = (fabricName: string) => {
    setActiveFabricFilter(fabricName);
    const el = document.getElementById('heritage-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToArrivals = () => {
    const el = document.getElementById('heritage-arrivals');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBridal = () => {
    const el = document.getElementById('heritage-bridal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="heritage-luxe-wrapper">
      {/* Header & Nav */}
      <HeritageNav
        onOpenEnquiry={() =>
          setSelectedEnquiryProduct({
            id: 'general-consult',
            name: 'Boutique Silk Consultation',
            fabric: 'Kanjeevaram',
            price: 45000,
            description: 'Speak with our master stylists for customized silk recommendations, trousseau planning, or specific color requests.',
            color: 'Custom Choice',
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
            secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
            inStock: true
          })
        }
      />

      {/* Hero Section with Gold Foil Effect */}
      <HeritageHero
        onExploreClick={scrollToArrivals}
        onEnquireClick={() =>
          setSelectedEnquiryProduct({
            id: 'hero-enquiry',
            name: 'Autumn Bridal Trousseau Silk Collection',
            fabric: 'Kanjeevaram',
            price: 48500,
            description: 'Certified pure gold zari bridal drapes handwoven by master artisan guilds in Kanchipuram.',
            color: 'Crimson & Emerald Gold',
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
            secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
            inStock: true
          })
        }
      />

      {/* New Arrivals Carousel */}
      <NewArrivalsCarousel
        onZoomProduct={(prod) => setSelectedZoomProduct(prod)}
        onEnquireProduct={(prod) => setSelectedEnquiryProduct(prod)}
      />

      {/* Shop By Fabric (Kanjeevaram, Banarasi, Mysore, Cotton Silk) */}
      <FabricCategories onSelectFabric={handleSelectFabric} />

      {/* Bridal & Festive Collection Banner */}
      <BridalBanner
        onBridalClick={() => handleSelectFabric('Kanjeevaram')}
        onConsultationClick={() =>
          setSelectedEnquiryProduct({
            id: 'bridal-consult',
            name: 'Royal Bridal Pavilion Trousseau Consultation',
            fabric: 'Kanjeevaram',
            price: 65000,
            description: 'Custom bridal trousseau package with pure 24K gold zari weave and matching unstitched blouse.',
            color: 'Muhurtham Red & Gold',
            image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85',
            secondaryImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
            inStock: true
          })
        }
      />

      {/* Our Heritage Story & Craftsmanship Lineage */}
      <HeritageStory />

      {/* Product Grid with Zoom-on-Tap & Simple Enquiry Form */}
      <HeritageProductGrid
        activeFilter={activeFabricFilter}
        onZoomProduct={(prod) => setSelectedZoomProduct(prod)}
        onEnquireProduct={(prod) => setSelectedEnquiryProduct(prod)}
      />

      {/* Customer Testimonials */}
      <HeritageTestimonials />

      {/* Instagram Feed Embed */}
      <HeritageInstagram />

      {/* Footer */}
      <HeritageFooter />

      {/* Sticky WhatsApp & Call to Order Bar */}
      <StickyContactBar
        onDirectEnquiry={() =>
          setSelectedEnquiryProduct({
            id: 'direct-wa',
            name: 'Direct Boutique Styling Consultation',
            fabric: 'Kanjeevaram',
            price: 45000,
            description: 'Connect directly with our master drapers in Poes Garden, Chennai.',
            color: 'Heritage Silks',
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
            secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
            inStock: true
          })
        }
      />

      {/* Interactive Modals */}
      <ImageZoomModal
        product={selectedZoomProduct}
        onClose={() => setSelectedZoomProduct(null)}
        onEnquire={(prod) => {
          setSelectedZoomProduct(null);
          setSelectedEnquiryProduct(prod);
        }}
      />

      <EnquiryModal
        product={selectedEnquiryProduct}
        onClose={() => setSelectedEnquiryProduct(null)}
        brandName="Aura Silks"
      />
    </div>
  );
};
