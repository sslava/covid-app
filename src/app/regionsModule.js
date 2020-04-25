import {createSelector} from 'reselect';

import {apiRequest} from '../common/api';

import createFetchReducer from './createFetchReducer';
import entitiesMapReducer from './entitiesMapReducer';

const fetcher = (code) =>
  apiRequest('GET', `https://covidum.com/request/get_stat_regions/${code}`);

const initial = [];

const [reducer, actionTypes] = createFetchReducer('regions', initial);

export const regionsReducer = entitiesMapReducer(
  reducer,
  new Set(Object.values(actionTypes)),
  (a) => a.meta && a.meta.code,
);

export const fetchCountryRegions = (code) => async (dispatch) => {
  dispatch({type: actionTypes.FETCH, meta: {code}});
  try {
    const payload = await fetcher(code);
    dispatch({
      type: actionTypes.FETCH_COMPLETE,
      payload: payload || [],
      meta: {code},
    });
  } catch (error) {
    dispatch({type: actionTypes.FETCH_FAILED, payload: error, meta: {code}});
    console.log(error);
  }
};

const regionsSelector = (state) => state.regions;

export const makeCountryRegionsSelector = () =>
  createSelector(
    regionsSelector,
    (s, code) => code,
    (items, code) => {
      const state = items[code];
      if (!state) {
        return {data: [], isFetching: false, error: null};
      }
      return state;
    },
  );

export const getRegionActiveCases = (r) =>
  r.total_cases - r.total_recovered - r.total_deaths;

export function sortTotal(arr) {
  return [...arr].sort((a, b) => b.total_cases - a.total_cases);
}

export function sortActive(arr) {
  return [...arr].sort(
    (a, b) => getRegionActiveCases(b) - getRegionActiveCases(a),
  );
}

export function sortDeaths(arr) {
  return [...arr].sort((a, b) => b.total_deaths - a.total_deaths);
}
