import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './Symptoms.styles';
import Symptom from './Symptom';

const symptoms = [
  {image: '', title: 'высокая температура тела'},
  {image: '', title: 'кашель'},
  {image: '', title: 'одышка'},
  {image: '', title: 'боль в мышцах'},
  {image: '', title: 'утомляемость'},
];

export default function Symptoms() {
  return (
    <View style={styles.container}>
      <View slyle={styles.header}>
        <Text slyle={styles.title}>Симптомы</Text>
      </View>
      <ScrollView slyle={styles.list} horizontal>
        {symptoms.map((s, i) => (
          <Symptom key={i} symptom={s} />
        ))}
      </ScrollView>
    </View>
  );
}
