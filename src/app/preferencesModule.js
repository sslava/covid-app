import {createSelector} from 'reselect';

import {ItemStore} from '../common/ItemStore';
import {getCurrentCountryCode} from '../common/locale';

const initialPrefs = {
  primary: null,
};

const actionTypes = {
  SET: 'preferences/SET',
};

const storage = new ItemStore('preferences', initialPrefs);

export const initPreferences = () => async (dispatch) => {
  const loaded = await storage.load();
  if (loaded) {
    dispatch(setPreferences(loaded));
  }
};

const setPreferences = (payload) => ({
  type: actionTypes.SET,
  payload,
});

export function preferencesReducer(state = initialPrefs, action) {
  switch (action.type) {
    case actionTypes.SET: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
  return state;
}

export const preferencesSelector = (store) => store.preferences;

export const updatePrefences = (prefs) => (dispatch, getState) => {
  dispatch(setPreferences(prefs));
  const state = preferencesSelector(getState());
  storage.set(state);
};

// primary country

export const updatePrimaryCountry = (code) => (dispatch) => {
  dispatch(updatePrefences({primary: code}));
};

export const preferredCountrySelector = createSelector(
  preferencesSelector,
  (prefs) => prefs.primary || getCurrentCountryCode(),
);

// primary region

export const countrySupportsRegions = (code) => code === 'US' || code === 'RU';

const defaultRegionIds = {RU: 'Moscow', US: 'New-Yourk'};

const getRegionCountryKey = (code) => `region-${code}`;

export const getRegionId = (r) => r.slug;

export const updatePrimaryRegion = (regionId) => (dispatch, getState) => {
  const code = preferredCountrySelector(getState());
  const key = getRegionCountryKey(code);
  dispatch(updatePrefences({[key]: regionId}));
};

export const preferredRegionSelector = createSelector(
  preferencesSelector,
  preferredCountrySelector,
  (prefs, code) => {
    if (!countrySupportsRegions(code)) {
      return null;
    }
    const key = getRegionCountryKey(code);
    return prefs[key] || defaultRegionIds[code];
  },
);
