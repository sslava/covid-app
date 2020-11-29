import {createSelector} from 'reselect';

import {ItemStore} from '../common/ItemStore';
import {getCurrentCountryCode} from '../common/locale';

import {makeCountrySelector} from './statsModule';

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

export const preferredCountryCodeSelector = createSelector(
  preferencesSelector,
  (prefs) => prefs.primary || getCurrentCountryCode(),
);

// primary region

const getRegionCountryKey = (code) => `region-${code}`;

export const getRegionId = (r) => r.slug;

export const updatePrimaryRegion = (code, regionId) => (dispatch, getState) => {
  const key = getRegionCountryKey(code);
  dispatch(updatePrefences({[key]: regionId}));
};

export const makePreferredRegionSelector = () => {
  const countrySelector = makeCountrySelector();
  return createSelector(
    preferencesSelector,
    countrySelector,
    (prefs, country) => {
      if (!country?.has_state) {
        return null;
      }
      const key = getRegionCountryKey(country.code);
      return prefs[key] || country.default_state;
    },
  );
};
