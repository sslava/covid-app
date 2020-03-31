import React, {useMemo} from 'react';
import {View, ScrollView, RefreshControl, SafeAreaView} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';
import LargeHeader from '../shared/Header/LargeHeader';
import useRefresh from '../shared/useRefresh';

import WorldStats from './World/WorldStats';
import Russia from './Russia/RussiaStats';
import Countries from './Countries/Countries';

import styles from './StatsScreen.styles';

export default function StatsScreen({navigation}) {
  const {
    state: {data, fetchState},
    refreshStats,
  } = useStatsContext();

  const [refresh, refreshing] = useRefresh(refreshStats, fetchState);

  const top = useMemo(() => data.countries.slice(0, 7), [data.countries]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <LargeHeader title="Статистика" />
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
      </ScrollView>
    </SafeAreaView>
  );
}
