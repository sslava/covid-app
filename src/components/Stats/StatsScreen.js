import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';
import HeaderScrollView from '../shared/HeaderScrollView';

import styles from './StatsScreen.styles';

export default function StatsScreen({navigation}) {
  const {stats} = useStatsContext();
  return (
    <HeaderScrollView title="COVID-19">
      <View style={styles.stats} />
    </HeaderScrollView>
  );
}

//<View style={styles.block}>
//<Text style={styles.all}>{stats.russia.total}</Text>
//<Text style={styles.info}>Всего подтвержденных случаев</Text>
//</View>
//<View style={styles.block}>
//<Text style={styles.deaths}>{stats.russia.deaths}</Text>
//<Text style={styles.info}>Всего смертей</Text>
//</View>
//<View style={styles.block}>
//<Text style={styles.recovered}>{stats.russia.alive}</Text>
//<Text style={styles.info}>Всего выздоровело</Text>
//</View>
