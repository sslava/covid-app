import React from 'react';
import {View, Text} from 'react-native';

import styles from './Recommendation.styles';

export default function Recommendation({recommendation}) {
  return (
    <View style={styles.container}>
      <Text>{recommendation.text}</Text>
    </View>
  );
}
