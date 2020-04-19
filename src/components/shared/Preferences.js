import React, {
  useRef,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {initI18nConfig, getCurrentCountryCode} from '../../common/locale';
import ItemStore from '../../common/ItemStore';

import useWillMount from './useWillMount';

const PreferencesContext = createContext(null);

const emptyPrefs = {
  primary: null,
};

function getDefaultPrefences() {
  return {
    ...emptyPrefs,
    primary: getCurrentCountryCode(),
  };
}

function isInitied(prefs) {
  return !!prefs && !!prefs.primary;
}

export function PreferencesProvider({children}) {
  useWillMount(initI18nConfig);

  const storage = useRef(new ItemStore('preferences', emptyPrefs));
  const [preferences, setPreferences] = useState(emptyPrefs);

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
        updatePrefences(getDefaultPrefences());
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
