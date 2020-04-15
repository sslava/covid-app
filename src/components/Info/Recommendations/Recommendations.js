import React, {useMemo} from 'react';
import {View} from 'react-native';

import Recommendation from './Recommendation';
import recommendationsFn from './list';

import {t} from '../../../common/locale';

import Subheader from '../Subheader';

import {List} from './Recommendations.styles';

export default function Recommendations() {
  const recommendations = useMemo(recommendationsFn, []);
  return (
    <View>
      <Subheader>{t('info.recommentations.title')}</Subheader>
      <List>
        {recommendations.map((r, i) => (
          <Recommendation key={i} recommendation={r} />
        ))}
      </List>
    </View>
  );
}
