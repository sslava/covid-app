import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

import styles from './NumberBlock.styles';

export default function NumberBlock({number, total, title, color, today}) {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        {color && <View style={[styles.color, {backgroundColor: color}]} />}
        <Text style={styles.title}>{title}</Text>
      </View>
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
