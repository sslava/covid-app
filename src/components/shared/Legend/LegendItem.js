import React, {memo} from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

import SecondaryNumber from '../SecondaryNumber';

import styles from './LegendItem.styles';

function LegendItem({color, title, number, today, bad}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={[styles.color, {backgroundColor: color}]} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.number}>{formatNumber(number)}</Text>
        <SecondaryNumber num={today} style={styles.today} />
      </View>
    </View>
  );
}

export default memo(LegendItem);
