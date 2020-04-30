import {createSelector} from 'reselect';

import {apiRequest} from '../common/api';

import createFetchReducer from './createFetchReducer';
import entitiesMapReducer from './entitiesMapReducer';
import {lastX} from '../common/utils';

const fetcher = (code) =>
  apiRequest('GET', `https://covidum.com/request/get_stat_history/${code}`);

const initial = [];

const [reducer, actionTypes] = createFetchReducer('history', initial);

export const historyReducer = entitiesMapReducer(
  reducer,
  new Set(Object.values(actionTypes)),
  (a) => a.meta && a.meta.code,
);

export const fetchCountryHistory = (code) => async (dispatch) => {
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

const historySelector = (state) => state.history;

export const makeCounrtyHistorySelector = () =>
  createSelector(
    historySelector,
    (s, code) => code,
    (items, code) => {
      const state = items[code];
      if (!state) {
        return [];
      }
      return lastX(state.data, 50);
    },
  );
