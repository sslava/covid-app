import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, RefreshControl, SafeAreaView} from 'react-native';

import NavStatusBar from '../shared/NavStatusBar';
import {useStatsContext} from '../shared/StatsDataContext';

import RegionStats from './RegionStats';
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

  console.log(JSON.stringify(data, undefined, 2));

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavStatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scroll}
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <View style={styles.container}>
          <View style={styles.stats}>
            <RegionStats region={data.russia} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
