import React, {
  useRef,
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import {initI18nConfig, getCurrentCountryCode} from '../../common/locale';
import {ItemStore} from '../../common/ItemStore';

import useWillMount from '../common/useWillMount';

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

export function usePreferredCountry() {
  const [prefs, updatePrefences] = useContext(PreferencesContext);

  const updateCountry = useCallback(
    (code) => {
      updatePrefences({...prefs, primary: code});
    },
    [prefs, updatePrefences],
  );

  return [prefs.primary, updateCountry];
}

export const supportsRegions = (country) =>
  country && (country.code === 'US' || country.code === 'RU');

export function getRegionKey(code) {
  return `region-${code}`;
}

const defaultRegions = {
  RU: 'Moscow',
  US: 'New-Yourk',
};

export const getRegionId = (r) => r.region_name_en;

export function getPreferredRegion(prefs, code) {
  if (!supportsRegions(code)) {
    return null;
  }
  return prefs[getRegionKey(code)] || defaultRegions[code];
}

export function usePreferredRegion() {
  const [prefs, updatePrefences] = useContext(PreferencesContext);

  const [primary] = usePreferredCountry();
  const regionId = getPreferredRegion(prefs, primary);

  const saveRegion = useCallback(
    (id) => {
      const regionKey = getRegionKey(primary);
      updatePrefences({...prefs, [regionKey]: id});
    },
    [prefs, primary, updatePrefences],
  );

  return [regionId, primary, saveRegion];
}
