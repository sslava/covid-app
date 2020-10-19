import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {initI18nConfig} from './common/locale';
import {initPreferences} from './app/preferencesModule';

import Navigator from './components/Navigator';

import AppearanceTheme from './components/common/AppearanceTheme';

import {store} from './app/store';
import {initAds} from './app/adModule';
import {AdManager} from 'react-native-admob-native-ads';

initI18nConfig();

AdManager.setRequestConfiguration({
  maxAdContetRating: 'G',
});

store.dispatch(initPreferences());

export default function App() {
  useEffect(() => {
    store.dispatch(initAds());
  }, []);

  return (
    <Provider store={store}>
      <AppearanceTheme>
        <Navigator />
      </AppearanceTheme>
    </Provider>
  );
}
