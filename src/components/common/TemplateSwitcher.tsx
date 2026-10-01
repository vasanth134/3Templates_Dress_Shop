import React, { useState } from 'react';
import { Crown, Wind, BookOpen, CaretDown, CaretUp } from '@phosphor-icons/react';

export type TemplateId = 'heritage' | 'modern' | 'editorial';

interface TemplateSwitcherProps {
  currentTemplate: TemplateId;
  onSelectTemplate: (template: TemplateId) => void;
}

export const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({
  currentTemplate,
  onSelectTemplate
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const templates: { id: TemplateId; name: string; shortName: string; subtitle: string; icon: React.ReactNode; badge: string; color: string }[] = [
    {
      id: 'heritage',
      name: 'Template 1: Heritage Luxe',
      shortName: '1. Heritage Luxe',
      subtitle: 'Traditional Silk & Gold Luxury',
      icon: <Crown size={16} weight="fill" />,
      badge: 'Deep Maroon & Gold',
      color: '#4A0E17'
    },
    {
      id: 'modern',
      name: 'Template 2: Modern Minimal',
      shortName: '2. Modern Minimal',
      subtitle: 'Urban Ethnic Chic & Fast App UX',
      icon: <Wind size={16} weight="fill" />,
      badge: 'Sage, Blush & Charcoal',
      color: '#E14936'
    },
    {
      id: 'editorial',
      name: 'Template 3: Boutique Editorial',
      shortName: '3. Boutique Editorial',
      subtitle: 'High-Fashion Magazine Storytelling',
      icon: <BookOpen size={16} weight="fill" />,
      badge: 'Terracotta, Beige & Rust',
      color: '#B85233'
    }
  ];

  return (
    <aside className="template-switcher-bar" aria-label="Template Switcher Controls">
      <div className="switcher-inner">
        {/* Brand label & toggle */}
        <div className="switcher-brand-col">
          <div className="switcher-brand-title">
            <span className="switcher-brand-dot"></span>
            <strong>BOUTIQUE TEMPLATES</strong>
            <span className="switcher-tag">Client Preview</span>
          </div>
          <button
            className="switcher-toggle-collapse"
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Collapse switcher' : 'Expand switcher'}
          >
            {isExpanded ? <CaretUp size={16} weight="bold" /> : <CaretDown size={16} weight="bold" />}
          </button>
        </div>

        {isExpanded && (
          <div className="switcher-controls-row">
            {/* Template Selector Tabs */}
            <div className="switcher-tabs-group" role="tablist">
              {templates.map((tmpl) => (
                <button
                  key={tmpl.id}
                  role="tab"
                  aria-selected={currentTemplate === tmpl.id}
                  className={`switcher-tab-btn ${currentTemplate === tmpl.id ? 'is-active' : ''}`}
                  onClick={() => onSelectTemplate(tmpl.id)}
                >
                  <span className="tab-icon-wrap" style={{ color: tmpl.color }}>
                    {tmpl.icon}
                  </span>
                  <div className="tab-text-wrap">
                    <span className="tab-name">
                      <span className="tab-name-desktop">{tmpl.name}</span>
                      <span className="tab-name-mobile">{tmpl.shortName}</span>
                    </span>
                    <span className="tab-sub">{tmpl.badge}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
