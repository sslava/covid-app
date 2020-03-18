import React, {createContext, useReducer, useEffect} from 'react';

import {
  initialStatsState,
  statsActionTypes,
  statsReducer,
  fetchStatsSaga,
} from '../../stats/module';

import StatsStore from '../../stats/StatsStore';

const storage = new StatsStore();
const ApiContext = createContext({});

export default function StatsDataProvider({children}) {
  const [stats, dispatch] = useReducer(statsReducer, initialStatsState);

  useEffect(() => {
    async function init() {
      const loaded = await storage.load();
      dispatch({type: statsActionTypes.SET, payload: loaded});

      const fetchStats = fetchStatsSaga(dispatch, storage);
      fetchStats();
    }
    init();
  }, []);
  console.log(stats);
  return <ApiContext.Provider value={stats}>{children}</ApiContext.Provider>;
}
