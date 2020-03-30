import {apiRequest} from '../common/api';

async function apiFetchStats() {
  return apiRequest(
    'GET',
    'https://dev:mn17KRvc1Q@1koronavirus.ru/request/get_stat',
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
      country_name: 'Russia',
      country_name_en: 'Россия',
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
      const countries = stats.countries.today
        .filter(c => c.country_name_en !== 'Russia')
        .sort((a, b) => b.total - a.total);
      const payload = {
        world: stats.world.today,
        russia: stats.countries.today.find(c => c.country_name_en === 'Russia'),
        countries,
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
