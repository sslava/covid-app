import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import AppMetrica from 'react-native-appmetrica';

import {initI18nConfig} from './common/locale';
import {initPreferences} from './app/preferencesModule';

import Navigator from './components/Navigator';

import AppearanceTheme from './components/common/AppearanceTheme';

import {store} from './app/store';
import {initAds} from './app/adModule';
// import {AdManager} from 'react-native-admob-native-ads';

import admob, {MaxAdContentRating} from '@react-native-firebase/admob';

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });

initI18nConfig();

// AdManager.setRequestConfiguration({
//   maxAdContetRating: 'G',
// });

AppMetrica.activate({
  apiKey: 'f34cf193-d2c4-4530-9b34-3577c479fdde',
  sessionTimeout: 120,
  firstActivationAsUpdate: true,
});

store.dispatch(initPreferences());

export default function App() {
  useEffect(() => {
    store.dispatch(initAds());
  }, []);

  useEffect(() => {
    AppMetrica.reportAppOpen();
  }, []);

  return (
    <Provider store={store}>
      <AppearanceTheme>
        <Navigator />
      </AppearanceTheme>
    </Provider>
  );
}
