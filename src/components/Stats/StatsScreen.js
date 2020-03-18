import React from 'react';
import {View, Text} from 'react-native';

import {useStatsContext} from '../shared/StatsDataContext';

export default function StatsScreen() {
  const {stats} = useStatsContext();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{JSON.stringify(stats, undefined, 2)}</Text>
    </View>
  );
}
