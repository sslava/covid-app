import React from 'react';
import {View, Text} from 'react-native';
import {useStatsContext} from '../shared/StatsDataContext';

import styles from './StatsScreen.styles';

export default function StatsScreen() {
  const {stats} = useStatsContext();
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(stats, undefined, 2)}</Text>
    </View>
  );
}
