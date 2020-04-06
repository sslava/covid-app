import React from 'react';

import {View, Text} from 'react-native';

import {formatNumber, t} from '../../../common/locale';

import SecondaryNumber from '../../shared/SecondaryNumber';

import styles from './HeroStats.styles';

export default function HeroStats({number, today}) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {formatNumber(number)}
        <SecondaryNumber num={today} style={styles.today} />
      </Text>
      <Text style={styles.text}>{t('stats.cases')}</Text>
    </View>
  );
}
