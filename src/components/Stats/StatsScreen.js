import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {View, ScrollView, RefreshControl, SafeAreaView} from 'react-native';

import NavStatusBar from '../shared/NavStatusBar';
import {useStatsContext} from '../shared/StatsDataContext';
import LargeHeader from '../shared/LargeHeader';

import WorldStats from './World/WorldStats';
import Russia from './Russia/RussiaStats';
import Countries from './Countries/Countries';

import styles from './StatsScreen.styles';

const topSize = 15;

export default function StatsScreen({navigation}) {
  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(() => {
    setRefreshing(true);
    refreshStats();
  }, [refreshStats]);

  useEffect(() => {
    if (fetchState !== 'Fetching') {
      setRefreshing(false);
    }
  }, [fetchState]);

  const top = useMemo(() => data.countries.slice(0, topSize), [data.countries]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavStatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <LargeHeader title="Статистика" />
        <View style={styles.content}>
          <View style={styles.world}>
            <WorldStats region={data.world} />
          </View>
          <View style={styles.russia}>
            <Russia
              russia={data.russia}
              hasCities={!!(data.cities && data.cities.length)}
            />
          </View>
          <View style={styles.countries}>
            <Countries countries={top} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
