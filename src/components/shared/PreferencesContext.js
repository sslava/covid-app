import React, {
  useRef,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';

import i18n from 'i18n-js';

import {initI18nConfig} from '../../common/locale';
import ItemStore from '../../common/ItemStore';

import useWillMount from './useWillMount';

const localeCountriesMap = {
  ru: 'Russia',
  en: 'USA',
};

const PreferencesContext = createContext(null);

const defaultPrefs = {
  primary: null,
};

function getFromLocale() {
  const locale = i18n.locale;
  return {
    ...defaultPrefs,
    primary: localeCountriesMap[locale] || localeCountriesMap.en,
  };
}

export function PreferencesProvider({children}) {
  useWillMount(initI18nConfig);
  const storage = useRef(new ItemStore('preferences', defaultPrefs));
  const state = useState(defaultPrefs);

  const [, setPreferences] = state;

  useEffect(() => {
    async function init() {
      const stored = await storage.current.load();
      if (stored) {
        setPreferences(stored);
      } else {
        const fromLocale = getFromLocale();
        setPreferences(fromLocale);
        await storage.current.set(fromLocale);
      }
    }
    init();
  }, [setPreferences]);

  return (
    <PreferencesContext.Provider value={state}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePrefences() {
  return useContext(PreferencesContext);
}
