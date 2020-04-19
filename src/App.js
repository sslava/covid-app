import React from 'react';
import {Provider} from 'react-redux';

import Navigator from './components/Navigator';

import AppearanceTheme from './components/shared/AppearanceTheme';
import {PreferencesProvider} from './components/shared/Preferences';

import {store} from './app/store';

export default function App() {
  return (
    <PreferencesProvider>
      <Provider store={store}>
        <AppearanceTheme>
          <Navigator />
        </AppearanceTheme>
      </Provider>
    </PreferencesProvider>
  );
}
