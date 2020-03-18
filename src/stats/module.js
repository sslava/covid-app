import StatsStore from './StatsStore';

import {apiRequest} from '../common/api';

async function apiFetchStats() {
  return apiRequest('GET', 'http://127.0.0.1:8080/response.json');
}

export const statsActionTypes = {
  FETCH: 'stats/FETCH',
  FETCH_COMPLETE: 'stats/FETCH_COMPLETE',
  FETCH_FAILED: 'stats/FETCH_FAILED',
  SET: 'stats/SET',
};

export const initialStatsState = {
  stats: StatsStore.defaultStats,
  fetchState: 'NotFetched',
  error: null,
};

export function fetchStatsSaga(dispatch, storage) {
  return async () => {
    dispatch({type: statsActionTypes.FETCH});
    try {
      const data = await apiFetchStats();
      dispatch({type: statsActionTypes.FETCH_COMPLETE, payload: data});
      await storage.set(data);
    } catch (error) {
      dispatch({type: statsActionTypes.FETCH_FAILED, payload: error});
    }
  };
}

export function statsReducer(state = initialStatsState, action) {
  switch (action.type) {
    case statsActionTypes.FETCH:
      return {...state, fetchState: 'Fetching'};
    case statsActionTypes.FETCH_COMPLETE:
      return {...state, fetchState: 'Fetched', stats: action.payload};
    case statsActionTypes.FETCH_FAILED:
      return {...state, fetchState: 'Error', error: action.payload};
    case statsActionTypes.SET:
      return {...state, stats: action.payload};
  }
  return state;
}
