import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, RefreshControl, SafeAreaView} from 'react-native';

import NavStatusBar from '../shared/NavStatusBar';
import {useStatsContext} from '../shared/StatsDataContext';

import RegionStats from './RegionStats';
import styles from './StatsScreen.styles';

export default function StatsScreen({navigation}) {
  const {state, refreshStats} = useStatsContext();
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(() => {
    setRefreshing(true);
    refreshStats();
  }, [refreshStats]);

  useEffect(() => {
    if (state.fetchState !== 'Fetching') {
      setRefreshing(false);
    }
  }, [state.fetchState]);

  return (
    <SafeAreaView style={styles.SafeArea}>
      <NavStatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scroll}
        indicatorStyle="black"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={refresh} />
        }>
        <View style={styles.container}>
          <View style={styles.stats}>
            <RegionStats region={state.stats.russia} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
