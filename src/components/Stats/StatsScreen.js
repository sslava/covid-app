import React from 'react';
import {View} from 'react-native';

import Pie from './Pie';

import {useStatsContext} from '../shared/StatsDataContext';
import HeaderScrollView from '../shared/HeaderScrollView';

import styles from './StatsScreen.styles';

const demoData = [
  {
    number: 60,
    color: '#0d2f51',
  },
  {
    number: 20,
    color: '#28BD8B',
  },
  {
    number: 20,
    color: '#F66A6A',
  },
];

export default function StatsScreen({navigation}) {
  const {stats} = useStatsContext();
  return (
    <HeaderScrollView title="COVID-19">
      <View style={styles.stats}>
        <Pie data={demoData} width={300} height={300} />
      </View>
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
