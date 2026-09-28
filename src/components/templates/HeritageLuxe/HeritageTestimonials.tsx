import React from 'react';
import { HERITAGE_TESTIMONIALS } from '../../../data/heritageData';
import { Star, Quotes, MapPin, Sparkle } from '@phosphor-icons/react';

export const HeritageTestimonials: React.FC = () => {
  return (
    <section id="heritage-testimonials" className="heritage-section testimonials-section">
      <div className="heritage-container">
        <div className="heritage-section-header">
          <span className="heritage-eyebrow">WORDS OF ADORATION</span>
          <h2 className="heritage-section-title">Heirlooms Cherished Across Generations</h2>
          <div className="heritage-gold-rule"></div>
          <p className="heritage-section-desc">
            From intimate temple weddings in Madurai to grand receptions in London and New York.
          </p>
        </div>

        <div className="testimonials-grid">
          {HERITAGE_TESTIMONIALS.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-quote-mark">
                <Quotes size={32} weight="fill" />
              </div>

              {/* Star rating */}
              <div className="testimonial-stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className="gold-star" />
                ))}
              </div>

              <p className="testimonial-comment">"{review.comment}"</p>

              <div className="testimonial-author-block">
                <div className="author-meta">
                  <h4 className="author-name">{review.name}</h4>
                  <div className="author-location">
                    <MapPin size={13} weight="fill" />
                    <span>{review.location}</span>
                  </div>
                </div>

                {review.sareePurchased && (
                  <div className="author-saree-tag">
                    <Sparkle size={12} weight="fill" />
                    <span>{review.sareePurchased}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
