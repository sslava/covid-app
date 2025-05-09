import {createSelector} from 'reselect';

import createFetchReducer from './createFetchReducer';

import {ItemStore} from '../common/ItemStore';
import {apiRequest} from '../common/api';

const fetcher = () => apiRequest('GET', '/get_stat');

const initial = {
  nodata: false,
  world: {
    deaths: '0',
    deaths_new: '0',
    recovered: '0',
    total: '0',
    total_new: '0',
    cases_1m: '0',
    active: '0',
    serious: '0',
    mild: '0',
    updated: '2000-01-01 00:00:00',
  },
  countries: [],
};

const storage = new ItemStore('stats', initial);

const [statsReducer, actionTypes] = createFetchReducer('stats', initial);

export {statsReducer};

const normalize = (payload) => {
  if (payload.nodata === true) {
    return {nodata: payload.nodata, ...initial};
  }
  return {
    nodata: false,
    world: payload.stats.world,
    countries: payload.stats.countries.filter((c) => !!c.code),
  };
};

export const fetchStats = () => async (dispatch) => {
  dispatch({type: actionTypes.FETCH});
  try {
    const json = await fetcher();
    const payload = normalize(json);
    dispatch({type: actionTypes.FETCH_COMPLETE, payload});
    storage.set(payload);
  } catch (error) {
    dispatch({type: actionTypes.FETCH_FAILED, payload: error});
    console.log(error);
  }
};

export const initStats = () => async (dispatch) => {
  const payload = await storage.load();
  if (payload) {
    dispatch({type: actionTypes.SET, payload});
  }
  dispatch(fetchStats());
};

export const fetchingStatsSelector = (state) => state.stats.isFetching;
export const worldSelector = (state) => state.stats.data.world;
export const nodataSelector = (state) => state.stats.data.nodata;
export const countriesSelector = (state) => state.stats.data.countries;

export const makeCountrySelector = () =>
  createSelector(
    countriesSelector,
    (state, code) => code,
    (countries, code) => {
      if (!code) {
        return null;
      }
      return countries.find((c) => c.code === code);
    },
  );

export const makePrimaryCountrySelector = () => {
  const countrySelector = makeCountrySelector();
  return createSelector(
    countrySelector,
    countriesSelector,
    (country, countries) => {
      return country || countries.find((c) => c.code === 'US');
    },
  );
};

export function sortTotal(arr) {
  return [...arr].sort((a, b) => b.total - a.total);
}

export function sortActive(arr) {
  return [...arr].sort((a, b) => b.active - a.active);
}

export function sortRecovered(arr) {
  return [...arr].sort((a, b) => b.recovered - a.recovered);
}

export function sortDeaths(arr) {
  return [...arr].sort((a, b) => b.deaths - a.deaths);
}

export const sortedCountriesSelector = createSelector(
  countriesSelector,
  (countries) => {
    return {
      total: sortTotal(countries),
      active: sortActive(countries),
      recovered: sortRecovered(countries),
      deaths: sortDeaths(countries),
    };
  },
);

export const makeCountryRatingSelector = () =>
  createSelector(
    sortedCountriesSelector,
    (s, code) => code,
    (sorted, code) => {
      return {
        total: sorted.total.findIndex((c) => c.code === code) + 1,
        active: sorted.active.findIndex((c) => c.code === code) + 1,
        recovered: sorted.recovered.findIndex((c) => c.code === code) + 1,
        deaths: sorted.deaths.findIndex((c) => c.code === code) + 1,
      };
    },
  );
