import React, { useState } from 'react';
import { X, CaretRight, CaretLeft, Sparkle, Clock, Check } from '@phosphor-icons/react';
import { DRAPE_STEPS } from '../../data/modernData';

interface DrapeGuideModalProps {
  onClose: () => void;
}

export const DrapeGuideModal: React.FC<DrapeGuideModalProps> = ({ onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = DRAPE_STEPS[currentStepIndex];

  return (
    <div className="drape-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="drape-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="drape-modal-header">
          <div>
            <span className="drape-modal-pill">
              <Sparkle size={13} weight="fill" /> Interactive Guide
            </span>
            <h3 className="drape-modal-title">The 3-Minute Modern Drape</h3>
          </div>
          <button className="drape-modal-close" onClick={onClose} aria-label="Close drape guide">
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Step indicator progress bar */}
        <div className="drape-progress-bar">
          {DRAPE_STEPS.map((s, idx) => (
            <div
              key={s.step}
              className={`drape-step-pip ${idx <= currentStepIndex ? 'is-active' : ''}`}
              onClick={() => setCurrentStepIndex(idx)}
            >
              <span>{s.step}</span>
            </div>
          ))}
        </div>

        {/* Content Card */}
        <div className="drape-step-card">
          <div className="drape-step-visual">
            <img src={currentStep.image} alt={currentStep.title} />
            <div className="drape-time-badge">
              <Clock size={14} weight="bold" />
              <span>{currentStep.duration}</span>
            </div>
          </div>

          <div className="drape-step-details">
            <span className="drape-step-num">STEP {currentStep.step} OF {DRAPE_STEPS.length}</span>
            <h4 className="drape-step-heading">{currentStep.title}</h4>
            <p className="drape-step-subtitle">{currentStep.subtitle}</p>
            <p className="drape-step-desc">{currentStep.description}</p>

            <div className="drape-nav-buttons">
              <button
                className="drape-prev-btn"
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
              >
                <CaretLeft size={16} weight="bold" /> Previous
              </button>

              {currentStepIndex < DRAPE_STEPS.length - 1 ? (
                <button
                  className="drape-next-btn"
                  onClick={() => setCurrentStepIndex((prev) => Math.min(DRAPE_STEPS.length - 1, prev + 1))}
                >
                  Next Step <CaretRight size={16} weight="bold" />
                </button>
              ) : (
                <button className="drape-finish-btn" onClick={onClose}>
                  <Check size={16} weight="bold" /> Ready to Drape
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
