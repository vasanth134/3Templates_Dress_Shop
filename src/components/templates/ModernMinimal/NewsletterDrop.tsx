import React, { useState } from 'react';
import { PaperPlaneTilt, CheckCircle, Sparkle } from '@phosphor-icons/react';

export const NewsletterDrop: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsJoined(true);
  };

  return (
    <section className="modern-section newsletter-section">
      <div className="modern-container">
        <div className="newsletter-card">
          <div className="newsletter-content">
            <span className="modern-section-pill">VIP EARLY ACCESS</span>
            <h2 className="newsletter-title">Never Miss a Saree Drop</h2>
            <p className="newsletter-desc">
              Each edition is woven in limited numbers of 20 pieces. Join our private drop list for 24-hour priority access and special member events.
            </p>

            {!isJoined ? (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <span>Get VIP Access</span>
                  <PaperPlaneTilt size={16} weight="bold" />
                </button>
              </form>
            ) : (
              <div className="newsletter-success">
                <CheckCircle size={22} weight="fill" className="newsletter-success-icon" />
                <div>
                  <strong>You're on the VIP Drop List!</strong>
                  <p>Use code <strong>AURAFIRST10</strong> for 10% off your first contemporary drape.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
