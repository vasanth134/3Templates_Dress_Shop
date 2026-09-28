import React from 'react';
import { MODERN_REVIEWS } from '../../../data/modernData';
import { Star, CheckCircle, Sparkle } from '@phosphor-icons/react';

export const ModernReviews: React.FC = () => {
  return (
    <section className="modern-section reviews-section">
      <div className="modern-container">
        <div className="modern-section-header">
          <div className="modern-rating-summary">
            <div className="summary-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} weight="fill" className="star-filled" />
              ))}
            </div>
            <span className="summary-score">4.9 / 5.0 Rated by 1,400+ Verified Buyers</span>
          </div>
          <h2 className="modern-section-title">Community Love</h2>
        </div>

        <div className="modern-reviews-grid">
          {MODERN_REVIEWS.map((review) => (
            <div key={review.id} className="modern-review-card">
              <div className="review-card-top">
                <div className="review-stars-row">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} weight="fill" className="star-filled" />
                  ))}
                </div>
                <span className="review-date">{review.date}</span>
              </div>

              <p className="review-text">"{review.comment}"</p>

              <div className="review-buyer-row">
                <div>
                  <div className="buyer-name-verified">
                    <strong>{review.name}</strong>
                    <CheckCircle size={14} weight="fill" className="verified-check" />
                  </div>
                  <div className="buyer-loc">{review.location}</div>
                </div>

                {review.sareePurchased && (
                  <span className="buyer-product-tag">{review.sareePurchased}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
