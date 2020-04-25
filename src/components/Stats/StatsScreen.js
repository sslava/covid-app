import React, {useRef, useEffect, useCallback} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import {
  preferredCountrySelector,
  countrySupportsRegions,
} from '../../app/preferencesModule';

import useRefresh from '../common/useRefresh';
import {useAppStateActive} from '../common/useAppState';

import {
  initStats,
  fetchStats,
  nodataSelector,
  fetchingStatsSelector,
} from '../../app/statsModule';

import {fetchCountryHistory} from '../../app/historyModule';
import {fetchCountryRegions} from '../../app/regionsModule';

import Stats from './Stats';

import {Safe, Scroll} from './StatsScreen.styles';

export default function StatsScreen({}) {
  const dispatch = useDispatch();

  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  const code = useSelector(preferredCountrySelector);

  useEffect(() => {
    dispatch(initStats());
  }, [dispatch]);

  useEffect(() => {
    if (code) {
      dispatch(fetchCountryHistory(code));
      if (countrySupportsRegions(code)) {
        dispatch(fetchCountryRegions(code));
      }
    }
  }, [dispatch, code]);

  const refreshStats = useCallback(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));
    if (countrySupportsRegions(code)) {
      dispatch(fetchCountryRegions(code));
    }
  }, [dispatch, code]);

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
        {!nodata && <Stats code={code} />}
      </Scroll>
    </Safe>
  );
}
