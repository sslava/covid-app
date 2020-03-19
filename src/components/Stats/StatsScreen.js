import React from 'react';
import {View, Text} from 'react-native';
import {useStatsContext} from '../shared/StatsDataContext';
import HeaderScrollView from '../shared/HeaderScrollView';

import styles from './StatsScreen.styles';

export default function StatsScreen() {
  const {stats} = useStatsContext();
  return (
    <HeaderScrollView title="For You">
      <View style={styles.stats}>
        <View style={styles.block}>
          <Text style={styles.all}>{stats.russia.total}</Text>
          <Text style={styles.info}>Всего подтвержденных случаев</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.deaths}>{stats.russia.deaths}</Text>
          <Text style={styles.info}>Всего смертей</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.recovered}>{stats.russia.alive}</Text>
          <Text style={styles.info}>Всего выздоровело</Text>
        </View>
      </View>
    </HeaderScrollView>
  );
}
