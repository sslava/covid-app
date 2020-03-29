import React from 'react';

import {Text, View} from 'react-native';

import styles from './Sources.styles';
import {formatDate} from '../../common/utils';

export default function Sources({date, source}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        По данным <Text style={styles.source}>{source}</Text> на{' '}
        <Text style={styles.date}>{formatDate(date)}</Text>
      </Text>
    </View>
  );
}
