import React, {useRef, useEffect, useCallback} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import useRefresh from '../shared/useRefresh';

import {usePrefences} from '../shared/Preferences';
import {useAppStateActive} from '../shared/useAppState';

import {
  initStats,
  fetchStats,
  nodataSelector,
  fetchingStatsSelector,
} from '../../app/statsModule';

import {fetchCountryHistory} from '../../app/historyModule';

import Stats from './Stats';

import {Safe, Scroll} from './StatsScreen.styles';

export default function StatsScreen({}) {
  const dispatch = useDispatch();

  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  const [prefs] = usePrefences();

  useEffect(() => {
    dispatch(initStats());
  }, [dispatch]);

  useEffect(() => {
    if (prefs.primary) {
      dispatch(fetchCountryHistory(prefs.primary));
    }
  }, [dispatch, prefs.primary]);

  const refreshStats = useCallback(() => dispatch(fetchStats()), [dispatch]);
  useAppStateActive(refreshStats);

  const isFetching = useSelector(fetchingStatsSelector);
  const nodata = useSelector(nodataSelector);

  const [refresh, refreshing] = useRefresh(refreshStats, isFetching);

  return (
    <Safe>
      <Scroll
        ref={scrollRef}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        {!nodata && <Stats prefs={prefs} />}
      </Scroll>
    </Safe>
  );
}
