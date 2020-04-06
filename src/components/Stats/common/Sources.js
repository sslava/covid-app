import React from 'react';

import {Text, View} from 'react-native';
import {formatDate, t} from '../../../common/locale';

import styles from './Sources.styles';

export default function Sources({date, source}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {t('stats.source.source')}
        <Text style={styles.source}>{source}</Text>
        {t('stats.source.updatedAt', {date: formatDate(date)})}
      </Text>
    </View>
  );
}
