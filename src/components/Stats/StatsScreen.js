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

import WorldStats from './TopStats/WorldStats';
import DetailedStats from './DetailedStats/DetailedStats';

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
          <Text style={styles.title}>Вcего в мире</Text>
          <Text style={styles.subtitle}>Обновлено {data.world.updateDate}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.world}>
            <WorldStats region={data.world} />
          </View>
          <View style={styles.russia}>
            <DetailedStats title="Россия" country={data.russia} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
