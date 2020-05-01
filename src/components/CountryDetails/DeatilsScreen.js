import React, {useCallback, useEffect, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';

import useRefresh from '../common/useRefresh';

import {
  fetchStats,
  fetchingStatsSelector,
  makeCountrySelector,
} from '../../app/statsModule';

import {
  fetchCountryHistory,
  makeCounrtyHistorySelector,
} from '../../app/historyModule';

import Today from './Today/Today';
import Stats from './Stats/Stats';
import Graphs from './Graphs/Graphs';

import {Safe, Scroll} from './DeatilsScreen.styles';

export default function DeatilsScreen({navigation, route}) {
  const dispatch = useDispatch();
  const {code} = route.params;

  useEffect(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
  }, [dispatch, code]);

  const refreshStats = useCallback(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
  }, [dispatch, code]);

  const isFetching = useSelector(fetchingStatsSelector);
  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  const countrySelector = useMemo(makeCountrySelector, []);
  const country = useSelector((s) => countrySelector(s, code));

  const historySelector = useMemo(makeCounrtyHistorySelector, []);
  const history = useSelector((s) => historySelector(s, code));
  return (
    <Safe>
      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <Today country={country} history={history} />
        <Stats country={country} history={history} />
        <Graphs history={history} />
      </Scroll>
    </Safe>
  );
}
