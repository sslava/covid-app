import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from 'react';

import {
  initialStatsState,
  statsActionTypes,
  statsReducer,
  fetchStatsSaga,
} from '../../model/stats';

import ItemStore from '../../common/ItemStore';

const StatsContext = createContext(null);

export function useStatsContext() {
  return useContext(StatsContext);
}

export function StatsDataProvider({children}) {
  const storage = useRef(new ItemStore('stats', initialStatsState.stats));

  const [state, dispatch] = useReducer(statsReducer, initialStatsState);
  const refreshStats = useCallback(
    fetchStatsSaga(dispatch, storage.current),
    [],
  );

  useEffect(() => {
    async function init() {
      const payload = await storage.current.load();
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
