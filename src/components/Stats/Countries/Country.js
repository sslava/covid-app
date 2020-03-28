import React from 'react';
import {View, Text} from 'react-native';

import {formatNumber} from '../../../common/utils';

import styles from './Country.styles';

export default function Country({country}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{country.country_name_en}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <Text style={styles.number}>{formatNumber(country.total)}</Text>
          <Text style={styles.caption}>Подтверждено</Text>
        </View>
        <View style={[styles.item, styles.central]}>
          <Text style={styles.number}>{formatNumber(country.recovered)}</Text>
          <Text style={styles.caption}>Поправилось</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.number}>{formatNumber(country.deaths)}</Text>
          <Text style={styles.caption}>Смертей</Text>
        </View>
      </View>
    </View>
  );
}
