import {useState, useCallback, useEffect} from 'react';

export default function useRefresh(callback, fetchState) {
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    if (fetchState !== 'Fetching') {
      setRefreshing(false);
    }
  }, [fetchState]);

  const refresh = useCallback(() => {
    setRefreshing(true);
    callback();
  }, [callback]);

  return [refresh, refreshing];
}
