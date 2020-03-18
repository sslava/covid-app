import React, {createContext, useReducer, useEffect, useContext} from 'react';

import {
  initialStatsState,
  statsActionTypes,
  statsReducer,
  fetchStatsSaga,
} from '../../stats/module';

import ItemStore from '../../common/ItemStore';

const StatsContext = createContext(null);
const statsStorage = new ItemStore('stats', initialStatsState.stats);

export function useStatsContext() {
  return useContext(StatsContext);
}

export function StatsDataProvider({children}) {
  const [stats, dispatch] = useReducer(statsReducer, initialStatsState);

  useEffect(() => {
    async function init() {
      const loaded = await statsStorage.load();
      dispatch({type: statsActionTypes.SET, payload: loaded});
      const fetch = fetchStatsSaga(dispatch, statsStorage);
      fetch();
    }
    init();
  }, []);
  return (
    <StatsContext.Provider value={stats}>{children}</StatsContext.Provider>
  );
}
