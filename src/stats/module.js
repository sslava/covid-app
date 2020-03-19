import {apiRequest} from '../common/api';

async function apiFetchStats() {
  return apiRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1');
}

export const statsActionTypes = {
  FETCH: 'stats/FETCH',
  FETCH_COMPLETE: 'stats/FETCH_COMPLETE',
  FETCH_FAILED: 'stats/FETCH_FAILED',
  SET: 'stats/SET',
};

export const initialStatsState = {
  stats: {
    id: 3,
  },
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
      return {...state, fetchState: 'Fetching', error: null};
    case statsActionTypes.FETCH_COMPLETE:
      return {
        ...state,
        fetchState: 'Fetched',
        stats: action.payload,
        error: null,
      };
    case statsActionTypes.FETCH_FAILED:
      return {...state, fetchState: 'Error', error: action.payload};
    case statsActionTypes.SET:
      return {...state, stats: action.payload};
  }
  return state;
}
