import React, {useMemo} from 'react';
import {View} from 'react-native';

import Recommendation from './Recommendation';
import recommendationsFn from './list';

import {t} from '../../../common/locale';

import Subheader from '../Subheader';

import styles from './Recommendations.styles';

export default function Recommendations() {
  const recommendations = useMemo(recommendationsFn, []);
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
