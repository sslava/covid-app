import React from 'react';
import {View, Text} from 'react-native';

import styles from './LegendItem.styles';

export default function LegendItem({color, title, number}) {
  return (
    <View style={styles.entity}>
      <View style={[styles.color, {backgroundColor: color}]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.updateDate}>{number}</Text>
    </View>
  );
}
