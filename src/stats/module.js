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
  stats: {
    top: [],
    russia: {
      country_name: 'Россия',
      country_name_en: 'Russia',
      deaths: '0',
      alive: '0',
      total: '0',
    },
  },
  fetchState: 'NotFetched',
  error: null,
};

export function fetchStatsSaga(dispatch, storage) {
  return async () => {
    dispatch({type: statsActionTypes.FETCH});
    try {
      const data = await apiFetchStats();
      const countries = Reflect.ownKeys(data.countries)
        .map(key => data.countries[key][0])
        .sort((a, b) => b.total - a.total);

      const payload = {
        top: countries.slice(0, 20),
        russia: countries.find(c => c.country_name_en === 'Russia'),
      };
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
