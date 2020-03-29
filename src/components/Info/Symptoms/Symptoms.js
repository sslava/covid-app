import React from 'react';
import {View, ScrollView} from 'react-native';

import Subheader from '../Subheader';
import Symptom from './Symptom';
import symptoms from './list';

import styles from './Symptoms.styles';

export default function Symptoms() {
  return (
    <View style={styles.container}>
      <Subheader>Симптомы</Subheader>
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
