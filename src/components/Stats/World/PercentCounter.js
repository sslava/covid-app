import React from 'react';
import {View, Text} from 'react-native';

import styles from './PercentCounter.styles';
import {formatNumber} from '../../../common/utils';

export default function PercentCounter({title, number, color, today}) {
  return (
    <View style={styles.wc}>
      <View style={[styles.line, {backgroundColor: color}]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>
        {formatNumber(number)}
        {today && (
          <Text style={styles.today}>
            {' (+'}
            {formatNumber(today)})
          </Text>
        )}
      </Text>
    </View>
  );
}
