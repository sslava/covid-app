import {apiRequest} from '../common/api';
import {encode61} from '../common/base64';

const auth = (username, password) => (params) => {
  return {
    ...params,
    headers: {
      ...params.headers,
      Authorization: `Basic ${encode61(`${username}:${password}`)}`,
    },
  };
};

async function apiFetchStats() {
  return apiRequest(
    'GET',
    'https://1koronavirus.ru/request/get_stat',
    auth('dev', 'mn17KRvc1Q'),
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
      updated: '2020-03-28 19:39:00',
    },
    russia: {
      deaths: '0',
      deaths_new: '0',
      recovered: '0',
      total: '0',
      total_new: '0',
      cases_1m: '0',
      active: '0',
      serious: '0',
      updated: '2020-03-28 19:39:00',
      country_name: 'Россия',
      country_name_en: 'Russia',
      lng: '102,110178',
      lat: '32,278826',
    },
    cities: [],
    countries: [],
  },
  fetchState: 'NotFetched',
  error: null,
};

export function fetchStatsSaga(dispatch, storage) {
  return async () => {
    dispatch({type: statsActionTypes.FETCH});
    try {
      const {stats} = await apiFetchStats();
      const ordered = stats.countries.today.sort((a, b) => b.total - a.total);
      const payload = {
        world: stats.world.today,
        countries: ordered,
        cities: stats.cities.today,
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
