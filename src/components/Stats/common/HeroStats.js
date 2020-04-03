import React from 'react';
import {t} from 'i18n-js';

import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

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
