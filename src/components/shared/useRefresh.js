import {useState, useCallback, useEffect} from 'react';

export default function useRefresh(callback, isFetching) {
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    if (!isFetching) {
      setRefreshing(false);
    }
  }, [isFetching]);

  const refresh = useCallback(() => {
    setRefreshing(true);
    callback();
  }, [callback]);

  return [refresh, refreshing];
}
