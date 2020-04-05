import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';

import {apiRequest} from '../../common/api';

import {actionTypes, fetchReducer, getInitialFetchState} from './fetchReducer';

import ItemStore from '../../common/ItemStore';

const StatsContext = createContext(null);

const initialState = getInitialFetchState({
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
});

const normalize = (payload) => {
  const ordered = payload.stats.countries
    .filter((c) => !!c.code)
    .sort((a, b) => b.total - a.total);

  return {
    world: payload.stats.world,
    countries: ordered,
  };
};

export function useStatsContext() {
  return useContext(StatsContext);
}

export function StatsDataProvider({children}) {
  const storage = useRef(new ItemStore('stats', initialState.data));

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const refreshStats = useCallback(async () => {
    dispatch({type: actionTypes.FETCH});
    try {
      const responseJson = await apiRequest(
        'GET',
        'https://covidum.com/request/get_stat',
      );

      const payload = normalize(responseJson);
      dispatch({type: actionTypes.FETCH_COMPLETE, payload});
      storage.current.set(payload);
    } catch (error) {
      dispatch({type: actionTypes.FETCH_FAILED, payload: error});
      console.log(error);
    }
  }, []);

  useEffect(() => {
    async function init() {
      const payload = await storage.current.load();
      if (payload) {
        dispatch({type: actionTypes.SET, payload});
      }
      refreshStats();
    }
    init();
  }, [refreshStats]);

  return (
    <StatsContext.Provider value={{state, refreshStats}}>
      {children}
    </StatsContext.Provider>
  );
}
