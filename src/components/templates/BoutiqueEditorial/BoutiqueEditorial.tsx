import React, { useState } from 'react';
import { EditorialHeader } from './EditorialHeader';
import { EditorialHero } from './EditorialHero';
import { StoryOfTheSeason } from './StoryOfTheSeason';
import { CuratedCollections } from './CuratedCollections';
import { ArtisanCraftStory } from './ArtisanCraftStory';
import { ShopTheLook } from './ShopTheLook';
import { PressStrip } from './PressStrip';
import { AppointmentBooking } from './AppointmentBooking';
import { EditorialFooter } from './EditorialFooter';
import { ImageZoomModal } from '../../common/ImageZoomModal';
import { EnquiryModal } from '../../common/EnquiryModal';
import { AppointmentModal } from '../../common/AppointmentModal';
import { SareeProduct } from '../../../types';
import './editorial.css';

export const BoutiqueEditorial: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<SareeProduct | null>(null);
  const [selectedEnquiryProduct, setSelectedEnquiryProduct] = useState<SareeProduct | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const scrollToStory = () => {
    const el = document.getElementById('editorial-story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCurations = () => {
    const el = document.getElementById('editorial-curations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="boutique-editorial-wrapper">
      {/* Editorial Header / Masthead */}
      <EditorialHeader onBookSalon={() => setIsAppointmentOpen(true)} />

      {/* Large Editorial Hero Banner with Featured Collection Story */}
      <EditorialHero
        onReadStory={scrollToStory}
        onExploreCurations={scrollToCurations}
      />

      {/* Featured Story of the Season with narrative text & image blocks */}
      <StoryOfTheSeason />

      {/* Collections presented as curated features rather than plain categories */}
      <CuratedCollections
        onSelectCuration={(title) => {
          setSelectedEnquiryProduct({
            id: 'curation-inquiry',
            name: `${title} Archival Collection`,
            fabric: 'Kanjeevaram',
            price: 65000,
            description: `Private curation inquiry for ${title}. Each drape is one of one and woven with natural pigments and pure zari.`,
            color: 'Curated Palette',
            image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85',
            secondaryImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=85',
            inStock: true
          });
        }}
      />

      {/* About the Artisans or About the Maker Section */}
      <ArtisanCraftStory />

      {/* Shop-The-Look Style Layout linking editorial photos to buyable products */}
      <ShopTheLook
        onAcquirePiece={(prod) => setSelectedEnquiryProduct(prod)}
      />

      {/* Press or Media Mentions Strip */}
      <PressStrip />

      {/* Contact & Appointment Booking Section for in-store visits */}
      <AppointmentBooking onOpenBookingModal={() => setIsAppointmentOpen(true)} />

      {/* Editorial Colophon Footer */}
      <EditorialFooter />

      {/* Modals */}
      <ImageZoomModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={(prod) => {
          setSelectedProduct(null);
          setSelectedEnquiryProduct(prod);
        }}
      />

      <EnquiryModal
        product={selectedEnquiryProduct}
        onClose={() => setSelectedEnquiryProduct(null)}
        brandName="Aura Atelier"
      />

      {isAppointmentOpen && (
        <AppointmentModal onClose={() => setIsAppointmentOpen(false)} />
      )}
    </div>
  );
};
