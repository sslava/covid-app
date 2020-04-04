import React, {useMemo} from 'react';
import {t} from 'i18n-js';
import {View, ScrollView} from 'react-native';

import Subheader from '../Subheader';
import Symptom from './Symptom';
import symptomsFn from './list';

import styles from './Symptoms.styles';

export default function Symptoms() {
  const symptoms = useMemo(symptomsFn, []);
  return (
    <View style={styles.container}>
      <Subheader>{t('info.symptoms.title')}</Subheader>
      <ScrollView
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {symptoms.map((s, i) => (
          <Symptom key={i} symptom={s} />
        ))}
      </ScrollView>
    </View>
  );
}
