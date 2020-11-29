import React, {useRef, useEffect, useCallback, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import {preferredCountryCodeSelector} from '../../app/preferencesModule';

import useRefresh from '../common/useRefresh';
import {useAppStateActive} from '../common/useAppState';

import {
  initStats,
  fetchStats,
  nodataSelector,
  fetchingStatsSelector,
  makePrimaryCountrySelector,
} from '../../app/statsModule';

import {fetchCountryHistory} from '../../app/historyModule';
import {fetchCountryRegions} from '../../app/regionsModule';

import Stats from './Stats';

import {Safe, Scroll} from './StatsScreen.styles';

export default function StatsScreen({}) {
  const dispatch = useDispatch();

  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  const code = useSelector(preferredCountryCodeSelector);

  const countrySelector = useMemo(makePrimaryCountrySelector, []);
  const country = useSelector((s) => countrySelector(s, code));

  useEffect(() => {
    dispatch(initStats());
  }, [dispatch]);

  useEffect(() => {
    if (code) {
      dispatch(fetchCountryHistory(code));
    }
  }, [dispatch, code]);

  useEffect(() => {
    if (country?.has_state) {
      dispatch(fetchCountryRegions(country.code));
    }
  }, [dispatch, country]);

  const refreshStats = useCallback(() => {
    dispatch(fetchStats());
    dispatch(fetchCountryHistory(code));

    if (country?.has_state) {
      dispatch(fetchCountryRegions(country.code));
    }
  }, [dispatch, code, country]);

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
