import React, {
  useRef,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
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

function isInitied(prefs) {
  return !!prefs && !!prefs.primary;
}

export function PreferencesProvider({children}) {
  useWillMount(initI18nConfig);

  const storage = useRef(new ItemStore('preferences', defaultPrefs));
  const [preferences, setPreferences] = useState(defaultPrefs);

  const updatePrefences = useCallback((prefs) => {
    setPreferences(prefs);
    storage.current.set(prefs);
  }, []);

  useEffect(() => {
    async function init() {
      const loaded = await storage.current.load();
      if (isInitied(loaded)) {
        setPreferences(loaded);
      } else {
        updatePrefences(getFromLocale());
      }
    }
    init();
  }, [updatePrefences]);

  return (
    <PreferencesContext.Provider value={[preferences, updatePrefences]}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePrefences() {
  return useContext(PreferencesContext);
}
