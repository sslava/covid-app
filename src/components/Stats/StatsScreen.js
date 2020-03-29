import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Text,
} from 'react-native';

import NavStatusBar from '../shared/NavStatusBar';
import {useStatsContext} from '../shared/StatsDataContext';

import WorldStats from './World/WorldStats';
import Russia from './Russia/RussiaStats';
import Countries from './Countries/Countries';

import styles from './StatsScreen.styles';

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
        <View style={styles.header}>
          <Text style={styles.title}>В мире</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.world}>
            <WorldStats region={data.world} />
          </View>
          <View style={styles.russia}>
            <Russia country={data.russia} />
          </View>
          <View style={styles.countries}>
            <Countries countries={data.top20} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
