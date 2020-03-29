import React from 'react';
import {View, Text} from 'react-native';

import Recommendation from './Recommendation';
import recommendations from './list';

import Subheader from '../Subheader';

import styles from './Recommendations.styles';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <Subheader>Рекоммендации</Subheader>
      <View style={styles.list}>
        {recommendations.map((r, i) => (
          <Recommendation key={i} recommendation={r} />
        ))}
      </View>
    </View>
  );
}
