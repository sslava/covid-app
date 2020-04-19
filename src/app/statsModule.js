import ItemStore from '../common/ItemStore';
import {apiRequest} from '../common/api';

import {createFetchReducer} from './fetchReducer';
import {createSelector} from 'reselect';

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

const [statsReducer, actionTypes] = createFetchReducer('stats', initial);

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

const storage = new ItemStore('stats', initial);

export const fetchStats = () => async (dispatch) => {
  dispatch({type: actionTypes.FETCH});
  try {
    const json = await apiRequest(
      'GET',
      'https://covidum.com/request/get_stat',
    );
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

export const countriesByTotalSelector = createSelector(
  countriesSelector,
  (countries) => {
    return [...countries].sort((a, b) => b.total - a.total);
  },
);

export const topCountriesSelector = createSelector(
  countriesByTotalSelector,
  (countries) => countries.slice(0, 9),
);

export {statsReducer};
