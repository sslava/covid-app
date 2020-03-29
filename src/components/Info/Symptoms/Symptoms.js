import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Symptom from './Symptom';
import symptoms from './list';

import styles from './Symptoms.styles';

export default function Symptoms() {
  return (
    <View style={styles.container}>
      <View slyle={styles.header}>
        <Text slyle={styles.title}>Симптомы</Text>
      </View>
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
