import {createSelector} from 'reselect';

import createFetchReducer from './createFetchReducer';
import entitiesMapReducer from './entitiesMapReducer';

import {apiRequest} from '../common/api';
import {MapItemStore} from '../common/ItemStore';

const initial = [];

const historyStorage = new MapItemStore('country-history', initial);

const [reducer, actionTypes] = createFetchReducer('history', initial);

const fetcher = (code) =>
  apiRequest('GET', `https://covidum.com/request/get_stat_history/${code}`);

export const fetchCountryHistory = (code) => async (dispatch) => {
  const saved = await historyStorage.load(code);
  if (saved) {
    dispatch({type: actionTypes.SET, payload: saved, meta: {code}});
  }
  dispatch({type: actionTypes.FETCH, meta: {code}});
  try {
    const payload = await fetcher(code);
    dispatch({type: actionTypes.FETCH_COMPLETE, payload, meta: {code}});
    historyStorage.set(code, payload);
  } catch (error) {
    dispatch({type: actionTypes.FETCH_FAILED, payload: error, meta: {code}});
    console.log(error);
  }
};

const historySelector = (state) => state.history;

export const makeCounrtyHistorySelector = () =>
  createSelector(
    historySelector,
    (s, code) => code,
    (items, code) => {
      const state = items[code];
      if (!state) {
        return {data: [], isFetching: false, error: null};
      }
      return state;
    },
  );

export const historyReducer = entitiesMapReducer(
  reducer,
  new Set(Object.values(actionTypes)),
  (a) => a.meta && a.meta.code,
);
