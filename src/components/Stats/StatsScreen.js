import React, {useMemo, useRef} from 'react';
import {t} from 'i18n-js';

import {View, ScrollView, RefreshControl, SafeAreaView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import LargeHeader from '../shared/Header/LargeHeader';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';

import WorldStats from './World/WorldStats';
import PrimaryCountry from './PrimaryCountry/PrimaryCountry';
import Countries from './Countries/Countries';

import styles from './StatsScreen.styles';

export default function StatsScreen({navigation}) {
  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();

  const scrollRef = useRef();
  useScrollToTop(scrollRef);
  const [refresh, refreshing] = useRefresh(refreshStats, fetchState);

  const top = useMemo(() => data.countries.slice(0, 7), [data.countries]);

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
        <LargeHeader title={t('stats.title')} />
        <View style={styles.world}>
          <WorldStats world={data.world} />
        </View>
        <View style={styles.russia}>
          <PrimaryCountry
            country={data.russia}
            hasCities={!!(data.cities && data.cities.length)}
          />
        </View>
        <View style={styles.countries}>
          <Countries countries={top} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
