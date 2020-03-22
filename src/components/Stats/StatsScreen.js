import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {View, ScrollView, RefreshControl, StatusBar} from 'react-native';

import RegionStats from './RegionStats';

import {useStatsContext} from '../shared/StatsDataContext';

import styles from './StatsScreen.styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function StatsScreen({navigation}) {
  const {state, refreshStats} = useStatsContext();
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

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
      <StatusBar barStyle="dark-content" animated />
      <ScrollView
        style={styles.scroll}
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
