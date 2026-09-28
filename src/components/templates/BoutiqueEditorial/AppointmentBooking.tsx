import React from 'react';
import { CalendarCheck, MapPin, Phone, Envelope, Sparkle } from '@phosphor-icons/react';

interface AppointmentBookingProps {
  onOpenBookingModal: () => void;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="editorial-booking" className="editorial-section booking-section">
      <div className="editorial-container">
        <div className="booking-card-wrapper">
          <div className="booking-text-col">
            <span className="editorial-eyebrow">BY PRIVATE INVITATION</span>
            <h2 className="booking-title">Reserve a Salon Viewing</h2>
            <div className="editorial-sep-line left-aligned"></div>

            <p className="booking-desc">
              We welcome brides, textile collectors, and connoisseurs to our private salon chambers. Experience the tactile weight of pure mulberry silk in natural daylight, accompanied by traditional artisanal South Indian filter coffee or heritage teas.
            </p>

            <div className="booking-salons-list">
              <div className="salon-location-item">
                <MapPin size={20} weight="fill" className="loc-icon" />
                <div>
                  <strong>Chennai Flagship Salon</strong>
                  <p>14 Bishop Garden, Poes Garden, Chennai — By appointment only</p>
                </div>
              </div>

              <div className="salon-location-item">
                <MapPin size={20} weight="fill" className="loc-icon" />
                <div>
                  <strong>Bengaluru Suite</strong>
                  <p>100 Feet Road, Indiranagar, Bengaluru — By appointment only</p>
                </div>
              </div>
            </div>

            <div className="booking-action-row">
              <button className="booking-primary-btn" onClick={onOpenBookingModal}>
                <CalendarCheck size={18} weight="bold" />
                <span>Schedule Private Appointment</span>
              </button>
              <a href="tel:+919840012345" className="booking-tel-link">
                <Phone size={16} weight="fill" />
                <span>Concierge Desk: +91 98400 12345</span>
              </a>
            </div>
          </div>

          <div className="booking-media-col">
            <div className="booking-image-frame">
              <img
                src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=85"
                alt="Private salon suite with silk draping mirrors"
                loading="lazy"
              />
              <div className="booking-image-badge">
                <Sparkle size={14} weight="fill" />
                <span>Private Viewing Suite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
