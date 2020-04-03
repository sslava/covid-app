import React from 'react';
import {View, ScrollView} from 'react-native';

import Subheader from '../Subheader';
import Symptom from './Symptom';
import symptoms from './list';

import styles from './Symptoms.styles';
import {t} from 'i18n-js';

export default function Symptoms() {
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
