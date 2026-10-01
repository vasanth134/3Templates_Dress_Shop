import React, { useState } from 'react';
import { TemplateSwitcher, TemplateId } from './components/common/TemplateSwitcher';
import { HeritageLuxe } from './components/templates/HeritageLuxe/HeritageLuxe';
import { ModernMinimal } from './components/templates/ModernMinimal/ModernMinimal';
import { BoutiqueEditorial } from './components/templates/BoutiqueEditorial/BoutiqueEditorial';

export const App: React.FC = () => {
  const [currentTemplate, setCurrentTemplate] = useState<TemplateId>('heritage');

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
      />

      {/* Main Template Display */}
      <main className="app-viewport-stage is-responsive" role="main">
        {renderActiveTemplate()}
      </main>
    </div>
  );
};

export default App;
