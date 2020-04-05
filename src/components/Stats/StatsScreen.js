import React, {useMemo, useRef} from 'react';
import {t} from 'i18n-js';

import {View, ScrollView, RefreshControl, SafeAreaView} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';

import LargeHeader from '../shared/Header/LargeHeader';
import useRefresh from '../shared/useRefresh';
import {useStatsContext} from '../shared/StatsDataContext';
import {usePrefences} from '../shared/PreferencesContext';

import WorldStats from './World/WorldStats';
import PrimaryCountry from './PrimaryCountry/PrimaryCountry';
import Countries from './Countries/Countries';

import styles from './StatsScreen.styles';

function findPrimary(countries, primary) {
  if (!primary) {
    return null;
  }
  return countries.find((c) => c.code === primary);
}

function getTop(countries) {
  return countries.slice(0, 9);
}

export default function StatsScreen({}) {
  const scrollRef = useRef();
  useScrollToTop(scrollRef);

  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();

  const [prefs] = usePrefences();
  const [refresh, refreshing] = useRefresh(refreshStats, fetchState);

  const primary = useMemo(() => findPrimary(data.countries, prefs.primary), [
    data.countries,
    prefs.primary,
  ]);
  const top = useMemo(() => getTop(data.countries), [data.countries]);

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
        {primary && (
          <View style={styles.primary}>
            <PrimaryCountry country={primary} />
          </View>
        )}
        <View style={styles.countries}>
          <Countries countries={top} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
