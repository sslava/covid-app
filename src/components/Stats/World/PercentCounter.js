import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/locale';
import SecondaryNumber from '../../shared/SecondaryNumber';

import styles from './PercentCounter.styles';

export default function PercentCounter({title, number, color, today}) {
  return (
    <View style={styles.wc}>
      <View style={[styles.circle, {backgroundColor: color}]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>
        {formatNumber(number)}
        <SecondaryNumber num={today} style={styles.today} />
      </Text>
    </View>
  );
}
