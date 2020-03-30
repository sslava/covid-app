import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from 'react';

import {
  initialStatsState,
  statsActionTypes,
  statsReducer,
  fetchStatsSaga,
} from '../../model/stats';

import ItemStore from '../../common/ItemStore';

const StatsContext = createContext(null);
const statsStorage = new ItemStore('stats', initialStatsState.stats);

export function useStatsContext() {
  return useContext(StatsContext);
}

export function StatsDataProvider({children}) {
  const [state, dispatch] = useReducer(statsReducer, initialStatsState);
  const refreshStats = useCallback(fetchStatsSaga(dispatch, statsStorage), []);

  useEffect(() => {
    async function init() {
      const payload = await statsStorage.load();
      if (payload) {
        dispatch({type: statsActionTypes.SET, payload});
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
