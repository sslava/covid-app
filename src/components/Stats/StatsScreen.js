import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';

import RegionStats from './RegionStats';

import {useStatsContext} from '../shared/StatsDataContext';

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
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refresh} />
      }>
      <View style={styles.container}>
        <View style={styles.stats}>
          <RegionStats region={state.stats.russia} />
        </View>
      </View>
    </ScrollView>
  );
}
