import React from 'react';
import {View, Text} from 'react-native';

import Recommendation from './Recommendation';
import recommendations from './list';

import styles from './Recommendations.styles';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Рекоммендации</Text>
      </View>
      <View style={styles.list}>
        {recommendations.map((r, i) => (
          <Recommendation key={i} recommendation={r} />
        ))}
      </View>
    </View>
  );
}
