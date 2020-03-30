import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

import SecondaryNumber from '../../shared/SecondaryNumber';

import styles from './HeroStats.styles';

export default function HeroStats({
  number,
  today,
  title = 'Случаев заболевания',
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {formatNumber(number)}
        <SecondaryNumber num={today} style={styles.today} />
      </Text>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
