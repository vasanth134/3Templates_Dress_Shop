import React, { useState } from 'react';
import { X, CalendarCheck, Clock, User, CheckCircle, Sparkle } from '@phosphor-icons/react';

interface AppointmentModalProps {
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '11:00 AM - 1:00 PM',
    salonLocation: 'Flagship Private Salon (Poes Garden, Chennai)',
    partySize: 'Bridal Party (Bride + 2 Guests)',
    interests: 'Kanjeevaram Bridal Silks'
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="appointment-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="appointment-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="appointment-close-btn" onClick={onClose} aria-label="Close booking modal">
          <X size={20} weight="bold" />
        </button>

        {!isBooked ? (
          <>
            <div className="appointment-header">
              <span className="appointment-pill">
                <Sparkle size={13} weight="fill" /> By Private Invitation
              </span>
              <h3 className="appointment-title">Reserve a Salon Viewing</h3>
              <p className="appointment-subtitle">
                Experience our archive in private. A dedicated master draper and textile archivist will present curated pieces tailored to your trousseau.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="appointment-form-group">
                <label>Select Atelier Location</label>
                <select
                  value={formData.salonLocation}
                  onChange={(e) => setFormData({ ...formData, salonLocation: e.target.value })}
                >
                  <option>Flagship Private Salon (Poes Garden, Chennai)</option>
                  <option>Heritage Weaving Suite (Chetpet, Chennai)</option>
                  <option>Private Showroom (Indiranagar, Bengaluru)</option>
                  <option>Virtual Video Viewing (Worldwide HD)</option>
                </select>
              </div>

              <div className="appointment-form-row">
                <div className="appointment-form-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="appointment-form-group">
                  <label>Preferred Time Slot *</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  >
                    <option>11:00 AM - 1:00 PM (Morning Tea)</option>
                    <option>2:30 PM - 4:30 PM (Afternoon Private)</option>
                    <option>5:00 PM - 7:00 PM (Sunset Viewing)</option>
                  </select>
                </div>
              </div>

              <div className="appointment-form-row">
                <div className="appointment-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyamvada Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="appointment-form-group">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="appointment-form-group">
                <label>Trousseau / Saree Focus</label>
                <select
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                >
                  <option>Kanjeevaram Bridal Silks & Korvai</option>
                  <option>Banarasi Brocades & Kadwa Weaves</option>
                  <option>Cocktail Organza & Contemporary Drapes</option>
                  <option>Complete Family Wedding Trousseau</option>
                </select>
              </div>

              <button type="submit" className="appointment-submit-btn">
                <span>Confirm Salon Appointment</span>
                <CalendarCheck size={18} weight="bold" />
              </button>
            </form>
          </>
        ) : (
          <div className="appointment-success">
            <div className="success-icon-wrap editorial">
              <CheckCircle size={52} weight="fill" />
            </div>
            <h3 className="appointment-title">Appointment Confirmed</h3>
            <p className="appointment-subtitle">
              We look forward to welcoming you, <strong>{formData.name}</strong>. Our concierge will send your private entry pass and directions for <strong>{formData.date || 'your selected date'}</strong> at <strong>{formData.timeSlot}</strong>.
            </p>
            <div className="appointment-recap">
              <div><strong>Location:</strong> {formData.salonLocation}</div>
              <div><strong>Focus:</strong> {formData.interests}</div>
            </div>
            <button className="appointment-close-action" onClick={onClose}>
              Return to Story
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
