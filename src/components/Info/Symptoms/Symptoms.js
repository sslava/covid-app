import React, {useMemo} from 'react';

import {View} from 'react-native';

import {t} from '../../../common/locale';

import Subheader from '../Subheader';
import Symptom from './Symptom';
import symptomsFn from './list';

import {ListScroll} from './Symptoms.styles';

export default function Symptoms() {
  const symptoms = useMemo(symptomsFn, []);
  return (
    <View>
      <Subheader>{t('info.symptoms.title')}</Subheader>
      <ListScroll horizontal showsHorizontalScrollIndicator={false}>
        {symptoms.map((s, i) => (
          <Symptom key={i} symptom={s} />
        ))}
      </ListScroll>
    </View>
  );
}
