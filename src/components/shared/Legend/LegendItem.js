import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

import SecondaryNumber from '../SecondaryNumber';

import styles from './LegendItem.styles';

export default function LegendItem({color, title, number, today, bad}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={[styles.color, {backgroundColor: color}]} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.number}>
        {formatNumber(number)}
        <SecondaryNumber num={today} style={[styles.today, styles.bad]} />
      </Text>
    </View>
  );
}
