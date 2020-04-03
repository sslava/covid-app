import React, {useMemo} from 'react';
import {t} from 'i18n-js';
import {View} from 'react-native';

import Recommendation from './Recommendation';
import recommendationsFn from './list';

import Subheader from '../Subheader';

import styles from './Recommendations.styles';

export default function Recommendations() {
  const recommendations = useMemo(() => recommendationsFn(t), []);
  return (
    <View style={styles.container}>
      <Subheader>{t('info.recommentations.title')}</Subheader>
      <View style={styles.list}>
        {recommendations.map((r, i) => (
          <Recommendation key={i} recommendation={r} />
        ))}
      </View>
    </View>
  );
}
