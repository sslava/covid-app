import {apiRequest} from '../common/api';

async function apiFetchStats() {
  return apiRequest(
    'GET',
    'http://dev:mn17KRvc1Q@1koronavirus.ru/request/get_stat',
  );
}

export const statsActionTypes = {
  FETCH: 'stats/FETCH',
  FETCH_COMPLETE: 'stats/FETCH_COMPLETE',
  FETCH_FAILED: 'stats/FETCH_FAILED',
  SET: 'stats/SET',
};

export const initialStatsState = {
  data: {
    russia: {
      deaths: '3',
      deaths_new: '1',
      recovered: '20',
      recovered_new: '4',
      total: '820',
      total_new: '182',
    },
    cities: [
      {
        name: 'Москва',
        deaths: '0',
        recovered: '0',
        total: '0',
      },
    ],
    world: {
      deaths: '0',
      deaths_new: '0',
      recovered: '0',
      recovered_new: '0',
      total: '0',
      total_new: '0',
    },
    countries: [
      {
        country_name: 'Россия',
        country_name_en: 'Russia',
        deaths: '0',
        deaths_new: '0',
        recovered: '0',
        recovered_new: '0',
        total: '0',
        total_new: '0',
      },
    ],
  },
  fetchState: 'NotFetched',
  error: null,
};

export function fetchStatsSaga(dispatch, storage) {
  return async () => {
    dispatch({type: statsActionTypes.FETCH});
    try {
      // const data = await apiFetchStats();
      const payload = initialStatsState.data;
      dispatch({type: statsActionTypes.FETCH_COMPLETE, payload});
      await storage.set(payload);
    } catch (error) {
      dispatch({type: statsActionTypes.FETCH_FAILED, payload: error});
      console.log(error);
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
        data: action.payload,
        error: null,
      };
    case statsActionTypes.FETCH_FAILED:
      return {...state, fetchState: 'Error', error: action.payload};
    case statsActionTypes.SET:
      return {...state, data: action.payload};
  }
  return state;
}
