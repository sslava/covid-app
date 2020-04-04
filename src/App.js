import React from 'react';

import Navigator from './components/Navigator';

import {StatsDataProvider} from './components/shared/StatsDataContext';
import {PreferencesProvider} from './components/shared/PreferencesContext';

export default function App() {
  return (
    <PreferencesProvider>
      <StatsDataProvider>
        <Navigator />
      </StatsDataProvider>
    </PreferencesProvider>
  );
}
