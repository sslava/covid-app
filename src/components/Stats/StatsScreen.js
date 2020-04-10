import React, {useRef} from 'react';

import {ScrollView, RefreshControl, SafeAreaView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';
import {usePrefences} from '../shared/PreferencesContext';

import Stats from './Stats';

import styles from './StatsScreen.styles';

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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        {!data.nodata && <Stats prefs={prefs} data={data} />}
      </ScrollView>
    </SafeAreaView>
  );
}
