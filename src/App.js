import React from 'react';

import Navigator from './components/Navigator';

import AppearanceTheme from './components/shared/AppearanceTheme';
import {StatsDataProvider} from './components/shared/StatsDataContext';
import {PreferencesProvider} from './components/shared/PreferencesContext';

export default function App() {
  return (
    <PreferencesProvider>
      <AppearanceTheme>
        <StatsDataProvider>
          <Navigator />
        </StatsDataProvider>
      </AppearanceTheme>
    </PreferencesProvider>
  );
}
