import React from 'react';
import {View} from 'react-native';

import RegionStats from './RegionStats';

import {useStatsContext} from '../shared/StatsDataContext';
import HeaderScrollView from '../shared/HeaderScrollView';

import styles from './StatsScreen.styles';

export default function StatsScreen({navigation}) {
  const {stats} = useStatsContext();

  return (
    <HeaderScrollView title="COVID-19">
      <View style={styles.container}>
        <View style={styles.stats}>
          <RegionStats region={stats.russia} />
        </View>
      </View>
    </HeaderScrollView>
  );
}
