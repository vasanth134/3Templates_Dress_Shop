import React from 'react';
import { DRAPE_STEPS } from '../../../data/modernData';
import { Sparkle, PlayCircle, Clock, Ruler, ShieldCheck } from '@phosphor-icons/react';

interface DrapeGuideSectionProps {
  onOpenInteractiveGuide: () => void;
}

export const DrapeGuideSection: React.FC<DrapeGuideSectionProps> = ({ onOpenInteractiveGuide }) => {
  return (
    <section id="modern-drape-guide" className="modern-section drape-guide-section">
      <div className="modern-container">
        <div className="drape-guide-banner">
          <div className="drape-guide-info">
            <span className="modern-section-pill">NO MORE FEAR OF DRAPING</span>
            <h2 className="drape-guide-heading">The 3-Minute Drape Guide</h2>
            <p className="drape-guide-text">
              We eliminated the bulk and intimidating layers. Our mulberry silk weaves feature engineered selvedges and balanced weights that naturally hold pleats without endless safety pins.
            </p>

            {/* Quick Sizing & Drape Specs */}
            <div className="drape-specs-grid">
              <div className="spec-card">
                <Ruler size={20} weight="fill" className="spec-icon" />
                <div className="spec-content">
                  <strong>Length & Width</strong>
                  <span>5.5 Meters Saree + 0.8m Blouse</span>
                </div>
              </div>

              <div className="spec-card">
                <Clock size={20} weight="fill" className="spec-icon" />
                <div className="spec-content">
                  <strong>Effortless Styling</strong>
                  <span>Average 3 Minutes to Complete</span>
                </div>
              </div>
            </div>

            <button className="drape-interactive-launch-btn" onClick={onOpenInteractiveGuide}>
              <PlayCircle size={22} weight="fill" />
              <span>Launch Step-by-Step Drape Tutorial</span>
            </button>
          </div>

          {/* Visual 4-Step Mini Cards */}
          <div className="drape-mini-steps-stack">
            {DRAPE_STEPS.map((step) => (
              <div key={step.step} className="mini-step-item" onClick={onOpenInteractiveGuide}>
                <div className="mini-step-badge">{step.step}</div>
                <div className="mini-step-text">
                  <strong>{step.title}</strong>
                  <span>{step.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
