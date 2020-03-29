import React from 'react';
import {View, Text} from 'react-native';

import Recommendation from './Recommendation';
import recommendations from './list';

import styles from './Recommendation.styles';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <View slyle={styles.header}>
        <Text slyle={styles.title}>Рекоммендации</Text>
      </View>
      <View slyle={styles.list}>
        {recommendations.map((r, i) => (
          <Recommendation key={i} recommendation={r} />
        ))}
      </View>
    </View>
  );
}
