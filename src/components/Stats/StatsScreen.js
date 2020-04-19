import React, {useRef, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import useRefresh from '../shared/useRefresh';
import {usePrefences} from '../shared/Preferences';

import {
  initStats,
  fetchStats,
  nodataSelector,
  fetchingStatsSelector,
} from '../../app/statsModule';

import Stats from './Stats';

import {Safe, Scroll} from './StatsScreen.styles';

export default function StatsScreen({}) {
  const dispatch = useDispatch();

  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  useEffect(() => {
    dispatch(initStats());
  }, [dispatch]);

  const refreshStats = useCallback(() => dispatch(fetchStats()), [dispatch]);

  const isFetching = useSelector(fetchingStatsSelector);
  const nodata = useSelector(nodataSelector);

  const [prefs] = usePrefences();
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
