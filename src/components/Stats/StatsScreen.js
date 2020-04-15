import React, {useRef} from 'react';

import {RefreshControl} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';
import {usePrefences} from '../shared/PreferencesContext';

import Stats from './Stats';

import {Safe, Scroll} from './StatsScreen.styles';

export default function StatsScreen({}) {
  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();

  const [prefs] = usePrefences();
  const [refresh, refreshing] = useRefresh(refreshStats, fetchState);

  return (
    <Safe>
      <Scroll
        ref={scrollRef}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        {!data.nodata && <Stats prefs={prefs} data={data} />}
      </Scroll>
    </Safe>
  );
}
