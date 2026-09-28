import React, { useState } from 'react';
import { TemplateSwitcher, TemplateId, ViewportMode } from './components/common/TemplateSwitcher';
import { HeritageLuxe } from './components/templates/HeritageLuxe/HeritageLuxe';
import { ModernMinimal } from './components/templates/ModernMinimal/ModernMinimal';
import { BoutiqueEditorial } from './components/templates/BoutiqueEditorial/BoutiqueEditorial';
import { WifiHigh, BatteryFull } from '@phosphor-icons/react';

export const App: React.FC = () => {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateId>('heritage');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('responsive');

  // Format current device time for phone mockup
  const now = new Date();
  const timeString = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

  const renderActiveTemplate = () => {
    switch (currentTemplate) {
      case 'heritage':
        return <HeritageLuxe />;
      case 'modern':
        return <ModernMinimal />;
      case 'editorial':
        return <BoutiqueEditorial />;
      default:
        return <HeritageLuxe />;
    }
  };

  return (
    <div className="app-container">
      {/* Client Preview Navigation Switcher */}
      <TemplateSwitcher
        currentTemplate={currentTemplate}
        onSelectTemplate={setCurrentTemplate}
        viewportMode={viewportMode}
        onSelectViewport={setViewportMode}
      />

      {/* Render Area Based on Viewport Mode */}
      {viewportMode === 'responsive' && (
        <main className="app-viewport-stage is-responsive" role="main">
          {renderActiveTemplate()}
        </main>
      )}

      {viewportMode === 'mobile' && (
        <div className="app-viewport-stage is-mobile">
          <div className="device-frame-phone">
            {/* Simulated iPhone Status Bar */}
            <div className="phone-status-bar">
              <span>{timeString}</span>
              <div className="dynamic-island"></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <WifiHigh size={14} weight="bold" />
                <BatteryFull size={16} weight="fill" />
              </div>
            </div>

            {/* Scrollable Viewport Stage */}
            <div className="phone-screen-scroll">
              {renderActiveTemplate()}
            </div>
          </div>
        </div>
      )}

      {viewportMode === 'tablet' && (
        <div className="app-viewport-stage is-tablet">
          <div className="device-frame-tablet">
            <div className="tablet-screen-scroll">
              {renderActiveTemplate()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
