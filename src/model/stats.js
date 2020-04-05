import {apiRequest} from '../common/api';

async function apiFetchStats() {
  return apiRequest('GET', 'https://covidum.com/request/get_stat');
}

export const actionTypes = {
  FETCH: 'FETCH',
  FETCH_COMPLETE: 'FETCH_COMPLETE',
  FETCH_FAILED: 'FETCH_FAILED',
  SET: 'SET',
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
    countries: [],
  },
  fetchState: 'NotFetched',
  error: null,
};

export function fetchStatsSaga(dispatch, storage) {
  return async () => {
    dispatch({type: actionTypes.FETCH});
    try {
      const {stats} = await apiFetchStats();

      const ordered = stats.countries
        .filter((c) => !!c.code)
        .sort((a, b) => b.total - a.total);

      // const m = new Map();
      // console.log('----------------------------');
      // ordered.forEach((c) => {
      //   if (m.has(c.code)) {
      //     console.log(
      //       `code: ${c.code}:  ${m.get(c.code).country_name_en}, ${
      //         m.get(c.code).total
      //       }; ${c.country_name_en}, ${c.total}`,
      //     );
      //   } else {
      //     m.set(c.code, c);
      //   }
      // });
      // console.log('----------------------------');

      const payload = {
        world: stats.world,
        countries: ordered,
      };
      dispatch({type: actionTypes.FETCH_COMPLETE, payload});
      storage.set(payload);
    } catch (error) {
      dispatch({type: actionTypes.FETCH_FAILED, payload: error});
      console.log(error);
    }
  };
}

export function statsReducer(state = initialStatsState, action) {
  switch (action.type) {
    case actionTypes.FETCH:
      return {...state, fetchState: 'Fetching', error: null};
    case actionTypes.FETCH_COMPLETE:
      return {
        ...state,
        fetchState: 'Fetched',
        data: action.payload,
        error: null,
      };
    case actionTypes.FETCH_FAILED:
      return {...state, fetchState: 'Error', error: action.payload};
    case actionTypes.SET:
      return {...state, data: action.payload};
  }
  return state;
}
