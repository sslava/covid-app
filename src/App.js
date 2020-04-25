import React from 'react';
import {Provider} from 'react-redux';

import {initI18nConfig} from './common/locale';
import {initPreferences} from './app/preferencesModule';

import Navigator from './components/Navigator';

import AppearanceTheme from './components/common/AppearanceTheme';

import {store} from './app/store';

initI18nConfig();

store.dispatch(initPreferences());

export default function App() {
  return (
    <Provider store={store}>
      <AppearanceTheme>
        <Navigator />
      </AppearanceTheme>
    </Provider>
  );
}
