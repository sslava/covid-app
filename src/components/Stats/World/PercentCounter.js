import React from 'react';
import {View, Text} from 'react-native';

import styles from './PercentCounter.styles';

export default function PercentCounter({title, number, color}) {
  return (
    <View style={styles.wc}>
      <View style={[styles.wcLine, {backgroundColor: color}]} />
      <Text style={styles.wcTitle}>{title}</Text>
      <Text style={styles.wcNumber}>{(number * 100).toFixed(2)}%</Text>
    </View>
  );
}
